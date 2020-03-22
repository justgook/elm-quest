module RPG.System.Path exposing (system)

import AltMath.Vector2 as Vec2 exposing (Vec2, vec2)
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
    System.step4 (next delta world.grid) Position.spec Path.spec Velocity.spec Animation.spec world


speed =
    -- px / s
    120


next delta grid ( p, setP ) ( path, setPath ) ( v, setV ) ( anim, setAnim ) acc =
    case path of
        target :: rest ->
            let
                distance =
                    Vec2.sub target (Grid.toGrid grid p)

                dir =
                    distance
                        |> Direction.fromRecord
            in
            if Vec2.zero == distance then
                acc
                    |> setPath rest
                    |> setV Vec2.zero
                    |> setAnim { anim | pose = Stand }
                    |> setP (Grid.fromGrid grid target)

            else
                acc
                    |> setAnim { anim | dir = dir, pose = Walk }
                    |> setV
                        (Direction.toRecord dir
                            |> Vec2.scale (speed * delta * 0.001)
                        )

        [] ->
            acc
                |> setAnim { anim | pose = Stand }
