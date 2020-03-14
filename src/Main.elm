module Main exposing (main)

import Browser
import Browser.Dom as Dom
import Browser.Events as Events
import Dict exposing (Dict)
import Html exposing (Html)
import Html.Attributes exposing (height, width)
import RPG.Game as Game exposing (Message(..))
import RPG.Subscription.Keyboard
import RPG.Subscription.Pointer
import RPG.System as System
import RPG.Util exposing (toScreen)
import RPG.World as World exposing (World)
import Set exposing (Set)
import Task
import WebGL


initModel : Game.Model
initModel =
    { textures = { done = Dict.empty, loading = Set.empty }
    , entities = []
    , screen = toScreen 2 2
    , world = World.world
    }


view : Game.Model -> Html Game.Message
view { entities, screen } =
    entities
        |> WebGL.toHtmlWith
            [ WebGL.alpha False
            , WebGL.depth 1
            , WebGL.clearColor 1 1 1 1
            ]
            [ width (floor screen.width)
            , height (floor screen.height)
            ]
        |> Html.map Event


main : Program () Game.Model Game.Message
main =
    Browser.document
        { init =
            \_ ->
                ( initModel
                , Cmd.batch
                    [ Task.perform (\{ scene } -> Resize scene.width scene.height) Dom.getViewport
                    ]
                )
        , view =
            \m ->
                { title = "RPG"
                , body =
                    [ Html.node "style" [] [ Html.text "html,body{margin:0;padding:0;overflow:hidden;}canvas{display:block}" ]
                    , view m
                    ]
                }
        , update = update
        , subscriptions =
            \model ->
                Sub.batch
                    [ Events.onResize (\w h -> Resize (toFloat w) (toFloat h))
                    , Events.onAnimationFrameDelta Delta
                    , RPG.Subscription.Keyboard.subscription model.world |> Sub.map Subscription
                    , RPG.Subscription.Pointer.subscription model |> Sub.map Subscription
                    ]
        }


update : Message -> Game.Model -> ( Game.Model, Cmd Message )
update msg ({ textures } as model) =
    case msg of
        Delta d ->
            System.system d model

        Subscription world ->
            ( { model | world = world }, Cmd.none )

        Event fn ->
            ( { model | world = fn model.world }, Cmd.none )

        Texture url t ->
            ( { model
                | textures =
                    { textures
                        | loading = Set.remove url textures.loading
                        , done = Dict.insert url t textures.done
                    }
              }
            , Cmd.none
            )

        Resize w h ->
            ( { model | screen = toScreen w h }, Cmd.none )

        TextureFail _ ->
            ( model, Cmd.none )
