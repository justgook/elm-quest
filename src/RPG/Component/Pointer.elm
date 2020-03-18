module RPG.Component.Pointer exposing (Mouse, empty)

import AltMath.Vector2 exposing (Vec2)
import RPG.Component.Util.Vec2 as Vec2


type alias Mouse =
    { down : Bool, p : Vec2 }


empty : Mouse
empty =
    { down = False, p = Vec2.zero }


get =
    .mouse


set =
    \comps world -> { world | mouse = comps }
