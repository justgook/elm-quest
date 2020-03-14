module RPG.Subscription.Pointer exposing (subscription)

import Browser.Events as Browser
import Json.Decode as D
import RPG.Game exposing (Model)
import RPG.World exposing (World)


subscription : Model -> Sub World
subscription model =
    Browser.onMouseDown
        (D.map2
            (\pageX pageY ->
                let
                    x =
                        model.screen.left + pageX

                    y =
                        model.screen.top - pageY

                    _ =
                        Debug.log "pointer" ( x, y )
                in
                model.world
            )
            (D.field "pageX" D.float)
            (D.field "pageY" D.float)
        )
