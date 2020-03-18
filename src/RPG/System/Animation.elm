module RPG.System.Animation exposing (system)

import Logic.System as System exposing (System)
import RPG.Component.Animation as Action exposing (Animation, Pose(..))
import RPG.World exposing (World)


system : Float -> System World
system delta =
    System.step (next delta) Action.spec


next : Float -> Animation -> Animation
next delta ({ speed, pose, dir } as action) =
    let
        time =
            delta + action.time

        iTime =
            floor (time * speed)
    in
    { action
        | time = time
        , frame =
            case pose of
                Stand ->
                    0

                Walk ->
                    remainderBy 8 iTime

                Hurt ->
                    remainderBy 5 iTime

                Slash ->
                    remainderBy 5 iTime

                Cast ->
                    remainderBy 6 iTime

                Shoot ->
                    remainderBy 12 iTime

                Pierce ->
                    remainderBy 7 iTime
    }
