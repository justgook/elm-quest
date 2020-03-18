module RPG.System.Input exposing (system)

import Logic.Component as Component
import Logic.Entity exposing (EntityID)
import Logic.System exposing (System)
import RPG.Component.Animation as Animation
import RPG.Component.Grid as Grid
import RPG.Component.Path as Path
import RPG.World exposing (World)


system : EntityID -> System World
system id world =
    case Component.get id world.path of
        Just p ->
            if Just world.mouse.p /= List.head p then
                world
                    |> (Component.update id (\_ -> [ Grid.toGrid world.grid world.mouse.p ]) world.path
                            |> Path.spec.set
                       )

            else
                world

        _ ->
            world
