module RPG.Component.Character exposing (Body(..), Character, empty, spawn1, spec)

import Logic.Component as Component


{-| layerMask

  - head
  - chest
  - shoulders
  - upperArm
  - forearm
  - fist/hand
  - legs
  - foots

-}
type alias Character =
    { layers : Int
    , body : Body
    }


spec : Component.Spec Character { world | char : Component.Set Character }
spec =
    Component.Spec .char (\comps world -> { world | char = comps })


empty : Component.Set Character
empty =
    Component.empty


spawn : Character
spawn =
    { layers = 0
    , body = Male Nothing Nothing Nothing
    }


spawn1 : Body -> Character
spawn1 body =
    { layers = 0
    , body = body
    }


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
