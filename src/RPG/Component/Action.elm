module RPG.Component.Action exposing (Action, Pose(..), empty, index, spawn, spec)

import Logic.Component as Component
import RPG.Component.Util.Direction exposing (Direction(..))


type alias Action =
    { time : Float
    , pose : Pose
    , speed : Float
    , dir : Direction
    , frame : Int
    }


type Pose
    = Stand
    | Walk
    | Hurt
    | Slash
    | Cast
    | Shoot
    | Pierce


type alias Velocity =
    { x : Float, y : Float }


spec : Component.Spec Action { world | action : Component.Set Action }
spec =
    Component.Spec .action (\comps world -> { world | action = comps })


empty : Component.Set Action
empty =
    Component.empty


spawn : Action
spawn =
    { pose = Walk
    , time = 0
    , speed = 0.01
    , dir = South
    , frame = 0
    }



--Util


index : Action -> Int
index { pose, dir, frame } =
    (case pose of
        Stand ->
            0

        Walk ->
            105

        Hurt ->
            261

        Slash ->
            157

        Cast ->
            1

        Shoot ->
            209

        Pierce ->
            53
    )
        |> (+)
            (case dir of
                North ->
                    0

                East ->
                    39

                South ->
                    26

                West ->
                    13
            )
        |> (+) frame
