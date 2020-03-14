module RPG.Component.Body exposing (Body(..), empty, spawn, spec)

import Logic.Component as Component


type Body
    = Male (Maybe Eyes) (Maybe Ears) (Maybe Nose)
    | MaleOrc
    | MaleDrake
    | MaleLizard
    | Skeleton
    | Zombie Blood
    | Female (Maybe Eyes) (Maybe Ears) (Maybe Nose)
    | FemaleOrc
    | FemaleDrake
    | FemaleLizard


type Nose
    = Straight
    | Button
    | BigNose


type alias Blood =
    { arm : Bool
    , brain : Bool
    , eye : Bool
    , mouth : Bool
    , ribs : Bool
    }


type Ears
    = BigEars
    | Elven


type Eyes
    = Yellow
    | Blue
    | Brown
    | Gray
    | Green
    | Orange
    | Purple
    | Red


spec : Component.Spec Body { world | body : Component.Set Body }
spec =
    Component.Spec .body (\comps world -> { world | body = comps })


empty : Component.Set Body
empty =
    Component.empty


spawn : Body
spawn =
    Male Nothing Nothing Nothing
