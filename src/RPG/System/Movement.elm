module RPG.System.Movement exposing (..)

import AltMath.Vector2 as Vec2
import Logic.System
import RPG.Component.Position as Position
import RPG.Component.Velocity as Velocity


system world =
    Logic.System.step2
        (\( v, _ ) ( p, setP ) -> setP (Vec2.add v p))
        Velocity.spec
        Position.spec
        world
