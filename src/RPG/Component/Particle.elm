module RPG.Component.Particle exposing (Particle, empty, spawn, spec)

import Logic.Component as Component
import Math.Vector4 exposing (Vec4)
import Random


type Particle
    = Single Float


type alias Emitter uniforms a =
    --Emitter
    { live : List { a | id : Int, data : Vec4 }
    , dead : List { a | id : Int, data : Vec4 }
    , generator : Int -> Random.Generator { a | id : Int, data : Vec4 }
    , spawn : Random.Seed -> Float
    , queue : Float
    , seed : Random.Seed
    , uniforms : uniforms
    }


spec : Component.Spec Particle { world | particle : Component.Set Particle }
spec =
    Component.Spec .particle (\comps world -> { world | particle = comps })


empty : Component.Set Particle
empty =
    Component.empty


spawn : Particle
spawn =
    Single 100
