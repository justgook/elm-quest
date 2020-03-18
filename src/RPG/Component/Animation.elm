module RPG.Component.Animation exposing (Animation, Pose(..), empty, index, spawn, spec)

import Logic.Component as Component
import RPG.Component.Util.Direction exposing (Direction(..))


type alias Animation =
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


spec : Component.Spec Animation { world | anim : Component.Set Animation }
spec =
    Component.Spec .anim (\comps world -> { world | anim = comps })


empty : Component.Set Animation
empty =
    Component.empty


spawn : Animation
spawn =
    { pose = Walk
    , time = 0
    , speed = 0.01
    , dir = South
    , frame = 0
    }



--Util


index : Animation -> Int
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
