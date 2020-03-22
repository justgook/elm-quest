module RPG.System.Grid exposing (system)

import Logic.Component as Component


system delta ({ grid } as world) =
    case Component.get world.you world.p of
        Just p ->
            { world | grid = { grid | offset = p } }

        Nothing ->
            world
