module RPG.Component.Position exposing (Position, empty, spawn, spec)

import Logic.Component as Component


type alias Position =
    { x : Float
    , y : Float
    }


spec : Component.Spec Position { world | p : Component.Set Position }
spec =
    Component.Spec .p (\comps world -> { world | p = comps })


empty : Component.Set Position
empty =
    Component.empty


spawn : { a | x : Float, y : Float } -> Position
spawn { x, y } =
    { x = x, y = y }
