module RPG.Subscription.Keyboard exposing (subscription)

import Browser.Events as Browser
import Json.Decode as D
import RPG.Component.Chat as Chat
import RPG.World exposing (World)


subscription : World -> Sub World
subscription ({ chat } as world) =
    if chat.active then
        Chat.input world

    else
        Browser.onKeyDown
            (D.field "code" D.string
                |> D.map
                    (\code ->
                        let
                            _ =
                                Debug.log "code" code
                        in
                        world
                    )
            )
