module RPG.System.Ai exposing (..)

import AltMath.Vector2 exposing (Vec2)
import Logic.Component as Component
import Logic.System as System exposing (System)
import Playground exposing (Screen)
import RPG.Component.Ai as Ai
import RPG.Component.Grid as Grid
import RPG.Component.Path as Path
import RPG.World exposing (World)
import Random


system : Screen -> System World
system screen world =
    let
        pathComps =
            Path.spec.get world

        aiComps =
            Ai.spec.get world

        toGrid =
            Grid.toGrid world.grid

        ( comps, seed ) =
            System.indexedFoldl2 (step toGrid screen) pathComps aiComps ( pathComps, world.seed )
    in
    { world | seed = seed }
        |> Path.spec.set comps


step toGrid screen i path _ (( comps, seed ) as acc) =
    case path of
        [] ->
            Random.step (randPath screen) seed
                |> Tuple.mapFirst (\a -> Component.set i [ toGrid a ] comps)

        _ ->
            acc


randVec2 =
    Random.float -300 300


randPath { top, right, bottom, left } =
    Random.map2 Vec2 (Random.float left right) (Random.float bottom top)
