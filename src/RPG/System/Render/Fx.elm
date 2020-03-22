module RPG.System.Render.Fx exposing (system)

import Logic.System as System
import Playground exposing (blue, group, move, square)
import RPG.Component.Grid as Grid


system world =
    System.foldl2
        (\fx p ->
            square blue 32
                |> move p.x p.y
                |> (::)
        )
        world.fx
        world.p
        []
        |> group
