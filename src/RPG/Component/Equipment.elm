module RPG.Component.Equipment exposing (Equipment, empty, spec)

import Logic.Component as Component


type alias Equipment =
    {}


spec : Component.Spec Equipment { world | equipment : Component.Set Equipment }
spec =
    Component.Spec .equipment (\comps world -> { world | equipment = comps })


empty : Component.Set Equipment
empty =
    Component.empty
