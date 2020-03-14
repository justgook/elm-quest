module RPG.Component.Input exposing (Input, empty, spawn, spec)

import Logic.Component as Component
import Logic.Entity exposing (EntityID)


type alias Input =
    { arrows : { x : Float, y : Float }
    , attack : Bool
    , target : Maybe EntityID
    }


spec : Component.Spec Input { world | input : Component.Set Input }
spec =
    Component.Spec .input (\comps world -> { world | input = comps })


empty : Component.Set Input
empty =
    Component.empty


spawn : Input
spawn =
    { arrows = { x = 0, y = 0 }
    , attack = False
    , target = Nothing
    }
