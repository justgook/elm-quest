module RPG.System.Render.Character exposing (system)

import Array
import Dict
import Playground exposing (group, move, moveY)
import RPG.Asset.Anim as Anim
import RPG.Asset.Text
import RPG.World exposing (World)


system : World -> Playground.Shape
system { server } =
    server.char
        |> Dict.foldl
            (\_ { body, anim, name, p } ->
                Array.get body Anim.all
                    |> Maybe.map
                        (\fn ->
                            [ fn anim
                                |> move (toFloat p.x) (toFloat p.y)
                            , moveY 24 (RPG.Asset.Text.text name)
                            ]
                                |> group
                                |> (::)
                        )
                    |> Maybe.withDefault identity
            )
            []
        |> group
