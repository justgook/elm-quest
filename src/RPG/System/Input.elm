module RPG.System.Input exposing (system)

import Logic.Component as Component
import Logic.Entity exposing (EntityID)
import Logic.System exposing (System)
import RPG.Component.Grid as Grid
import RPG.Component.Path as Path
import RPG.World exposing (World)


system : EntityID -> System World
system id world =
    case Component.get id world.path of
        Just p ->
            let
                click =
                    Grid.fromScreen world.grid world.mouse.p
            in
            if world.mouse.down && Just click /= List.head p then
                world
                    |> (Component.update id
                            (\_ ->
                                [ click ]
                            )
                            world.path
                            |> Path.spec.set
                       )

            else
                world

        _ ->
            world
