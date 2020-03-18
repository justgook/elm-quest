module RPG.World exposing (World, world)

import AltMath.Vector2 exposing (Vec2)
import Logic.Component as Component
import Logic.Entity as Entity
import RPG.Component.Action as Action exposing (Action)
import RPG.Component.Ai as Ai exposing (Ai)
import RPG.Component.Animation as Animation exposing (Animation)
import RPG.Component.Body as Body exposing (Body(..))
import RPG.Component.Equipment as Equipment exposing (Equipment)
import RPG.Component.Grid as Grid exposing (Grid)
import RPG.Component.IdSource as IdSource exposing (IdSource)
import RPG.Component.Path as Path exposing (Path)
import RPG.Component.Pointer as Mouse exposing (Mouse)
import RPG.Component.Position as Position exposing (Position)
import RPG.Component.Ui as Ui exposing (Ui)
import RPG.Component.Util.Vec2 as Vec2
import RPG.Component.Velocity as Velocity exposing (Velocity)
import Random exposing (Seed)


type alias World =
    { id : IdSource
    , seed : Seed
    , grid : Grid
    , p : Component.Set Position
    , v : Component.Set Velocity
    , equipment : Component.Set Equipment
    , body : Component.Set Body
    , anim : Component.Set Animation
    , action : Component.Set Action
    , path : Component.Set Path
    , ai : Component.Set Ai
    , mouse : Mouse
    , ui : Ui
    }


world : World
world =
    { id = IdSource.empty 0
    , seed = Random.initialSeed 42
    , grid = Grid.empty 10 10
    , p = Position.empty
    , v = Velocity.empty
    , equipment = Equipment.empty
    , body = Body.empty
    , anim = Animation.empty
    , action = Action.empty
    , path = Path.empty
    , ai = Ai.empty
    , mouse = Mouse.empty
    , ui = Ui.empty
    }
        |> (\w -> List.foldl spawn w bodies)
        |> Tuple.pair 5
        |> Entity.remove Ai.spec
        |> Tuple.second


spawn ( body, p ) =
    IdSource.create
        >> Entity.with ( Body.spec, body )
        >> Entity.with ( Animation.spec, Animation.spawn )
        >> Entity.with ( Position.spec, Position.spawn p )
        >> Entity.with ( Velocity.spec, Vec2.zero )
        >> Entity.with ( Path.spec, [] )
        >> Entity.with ( Ai.spec, Ai.spawn )
        -->> Entity.with ( Action.spec, Action.spawn )
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
