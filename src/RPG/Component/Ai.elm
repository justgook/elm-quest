module RPG.Component.Ai exposing (..)

import Logic.Component as Component


type alias Ai =
    ()


spec : Component.Spec Ai { world | ai : Component.Set Ai }
spec =
    Component.Spec .ai (\comps world -> { world | ai = comps })


empty : Component.Set Ai
empty =
    Component.empty


spawn : Ai
spawn =
    ()
