module RPG.World exposing (World, world)

import Logic.Component as Component
import Logic.Entity as Entity
import RPG.Component.Action as Action exposing (Action)
import RPG.Component.Body as Body exposing (Body(..))
import RPG.Component.Equipment as Equipment exposing (Equipment)
import RPG.Component.IdSource as IdSource exposing (IdSource)
import RPG.Component.Input as Input exposing (Input)
import RPG.Component.Mouse as Mouse exposing (Mouse)
import RPG.Component.Position as Position exposing (Position)
import RPG.Component.Velocity as Velocity exposing (Velocity)


type alias World =
    { id : IdSource
    , p : Component.Set Position
    , v : Component.Set Velocity
    , equipment : Component.Set Equipment
    , body : Component.Set Body
    , action : Component.Set Action
    , input : Component.Set Input
    , mouse : Mouse
    }


world : World
world =
    { id = IdSource.empty 0
    , p = Position.empty
    , v = Velocity.empty
    , equipment = Equipment.empty
    , body = Body.empty
    , action = Action.empty
    , input = Input.empty
    , mouse = Mouse.empty
    }
        |> (\w ->
                List.foldl spawn w bodies
           )


spawn ( body, p ) =
    IdSource.create
        >> Entity.with ( Body.spec, body )
        >> Entity.with ( Action.spec, Action.spawn )
        >> Entity.with ( Position.spec, p )
        >> Entity.with ( Velocity.spec, zero )
        >> Entity.with ( Input.spec, Input.spawn )
        >> Tuple.second


bodies =
    let
        zombieParts =
            { arm = False, brain = False, eye = False, mouth = False, ribs = False }
    in
    [ ( MaleDrake, { x = -152, y = 0 } )
    , ( MaleLizard, { x = -112, y = 0 } )
    , ( MaleOrc, { x = -80, y = 0 } )
    , ( Male Nothing Nothing Nothing, { x = -48, y = 0 } )
    , ( Skeleton, { x = -16, y = 0 } )
    , ( Zombie zombieParts, { x = 16, y = 0 } )
    , ( Female Nothing Nothing Nothing, { x = 48, y = 0 } )
    , ( FemaleOrc, { x = 80, y = 0 } )
    , ( FemaleLizard, { x = 112, y = 0 } )
    , ( FemaleDrake, { x = 152, y = 0 } )
    ]


zero =
    { x = 0, y = 0 }
