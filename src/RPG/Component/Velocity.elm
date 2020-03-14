module RPG.Component.Velocity exposing (Velocity, empty, spec)

import Logic.Component as Component


type alias Velocity =
    { x : Float, y : Float }


spec : Component.Spec Velocity { world | v : Component.Set Velocity }
spec =
    Component.Spec .v (\comps world -> { world | v = comps })


empty : Component.Set Velocity
empty =
    Component.empty
