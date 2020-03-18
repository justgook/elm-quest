module RPG.Subscription.Pointer exposing (subscription)

import AltMath.Vector2 exposing (Vec2)
import Browser.Events as Browser
import Json.Decode as D
import RPG.Game exposing (Model)
import RPG.World exposing (World)


subscription : Model -> Sub World
subscription model =
    Sub.batch
        [ if model.world.mouse.down then
            Browser.onMouseMove
                (D.map2 (toMouse model True)
                    (D.field "pageX" D.float)
                    (D.field "pageY" D.float)
                )

          else
            Sub.none
        , Browser.onMouseUp
            (D.map2 (toMouse model False)
                (D.field "pageX" D.float)
                (D.field "pageY" D.float)
            )
        , Browser.onMouseDown
            (D.map2 (toMouse model True)
                (D.field "pageX" D.float)
                (D.field "pageY" D.float)
            )
        ]


toMouse : Model -> Bool -> Float -> Float -> World
toMouse ({ world } as model) down pageX pageY =
    let
        mouse =
            world.mouse

        x =
            model.screen.left + pageX

        y =
            model.screen.top - pageY
    in
    { world | mouse = { mouse | down = down, p = Vec2 x y } }
