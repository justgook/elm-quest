module RPG.System.Path exposing (system)

import AltMath.Vector2 as Vec2
import Logic.System as System exposing (System)
import RPG.Component.Animation as Animation exposing (Pose(..))
import RPG.Component.Grid as Grid
import RPG.Component.Path as Path
import RPG.Component.Position as Position
import RPG.Component.Util.Direction as Direction
import RPG.Component.Util.Vec2 as Vec2
import RPG.Component.Velocity as Velocity
import RPG.World exposing (World)


system : Float -> System World
system delta world =
    System.step4 (next delta (Grid.toGrid world.grid)) Position.spec Path.spec Velocity.spec Animation.spec world


next delta toGrid ( p, setP ) ( path, setPath ) ( v, setV ) ( anim, setAnim ) acc =
    case path of
        target :: rest ->
            let
                distance =
                    Vec2.sub target (toGrid p)

                dir =
                    distance
                        |> Direction.fromRecord
            in
            if distance == Vec2.zero then
                acc
                    |> setPath rest
                    |> setV Vec2.zero
                    |> setAnim { anim | pose = Stand }

            else
                acc
                    |> setAnim { anim | dir = dir, pose = Walk }
                    |> setV (Direction.toRecord dir)

        [] ->
            acc
                |> setAnim { anim | pose = Stand }
