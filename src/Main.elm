module Main exposing (main)

import Browser
import Browser.Dom as Dom
import Browser.Events as Events
import Dict exposing (Dict)
import Html exposing (Html)
import Html.Attributes exposing (height, width)
import Html.Lazy
import RPG.Asset.Cursor
import RPG.Game as Game exposing (Message(..))
import RPG.Subscription.Keyboard
import RPG.Subscription.Pointer
import RPG.System as System
import RPG.Util exposing (toScreen)
import RPG.World as World exposing (World)
import Set exposing (Set)
import Task
import WebGL



--https://forums.rpgmakerweb.com/index.php?threads/mv-added-resource-generators-a-face-for-your-hero.37958/
--http://schlangan.free.fr/mvxgen.html
--https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/
--http://gaurav.munjal.us/Universal-LPC-Spritesheet-Character-Generator/
--http://lpc.opengameart.org/static/lpc-style-guide/assets.html
--https://chibi.center/


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
                    [ view m
                    , Html.Lazy.lazy2 css1 m.world.ui.cursor m.world.ui.cursor2
                    ]
                        |> (if m.world.debug then
                                (::) (Html.Lazy.lazy cssGrid m.world.grid)

                            else
                                identity
                           )
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


css1 cursor cursor2 =
    Html.node "style" [] [ Html.text <| """
html,body{
   cursor:url(""" ++ cursor ++ """), auto;
   margin:0;
   padding:0;
   overflow:hidden;
   width:100%;
   height:100%;
   animation: animate .4s infinite;
   }
canvas{display:block}
""" ++ cursor2 ++ """

""" ]


cssGrid { offset, cellW, cellH } =
    Html.node "style" [] [ Html.text <| """
body::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: """ ++ String.fromFloat cellW ++ """px """ ++ String.fromFloat cellH ++ """px;
    background-position: calc(""" ++ String.fromFloat -offset.x ++ """px + 50%) calc(""" ++ String.fromFloat offset.y ++ """px + 50%);
    background-image: linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);
}
    """ ]


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
