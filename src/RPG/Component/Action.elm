module RPG.Component.Action exposing (Action, empty, spawn, spec)

import Logic.Component as Component
import Logic.Entity exposing (EntityID)


type alias Action =
    { arrows : { x : Float, y : Float }
    , attack : Bool
    , target : Maybe { x : Float, y : Float }
    }


spec : Component.Spec Action { world | action : Component.Set Action }
spec =
    Component.Spec .action (\comps world -> { world | action = comps })


empty : Component.Set Action
empty =
    Component.empty


spawn : Action
spawn =
    { arrows = { x = 0, y = 0 }
    , attack = False
    , target = Nothing
    }
