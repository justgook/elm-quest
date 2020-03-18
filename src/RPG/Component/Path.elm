module RPG.Component.Path exposing (Path, empty, path, spawn, spec)

import AltMath.Vector2 exposing (Vec2)
import Logic.Component as Component


type alias Path =
    List Vec2


path grid comp target =
    target


spec : Component.Spec Path { world | path : Component.Set Path }
spec =
    Component.Spec .path (\comps world -> { world | path = comps })


empty : Component.Set Path
empty =
    Component.empty


spawn : Path
spawn =
    []
