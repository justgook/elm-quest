module RPG.Component.Fx exposing (Fx, empty, spawn, spec)

import Logic.Component as Component


type alias Fx =
    { life : Float }


spec : Component.Spec Fx { world | fx : Component.Set Fx }
spec =
    Component.Spec .fx (\comps world -> { world | fx = comps })


empty : Component.Set Fx
empty =
    Component.empty


spawn : Fx
spawn =
    { life = 3000 }
