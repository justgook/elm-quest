module RPG.World exposing (World, world)

import Logic.Component as Component
import Logic.Entity as Entity exposing (EntityID)
import RPG.Component.Action as Action exposing (Action)
import RPG.Component.Ai as Ai exposing (Ai)
import RPG.Component.Animation as Animation exposing (Animation)
import RPG.Component.Character as Character exposing (Body(..), Character)
import RPG.Component.Chat as Chat exposing (Chat)
import RPG.Component.Fx as Fx exposing (Fx)
import RPG.Component.Grid as Grid exposing (Grid)
import RPG.Component.IdSource as IdSource exposing (IdSource)
import RPG.Component.Name as Name exposing (Name)
import RPG.Component.Particle as Particle exposing (Particle)
import RPG.Component.Path as Path exposing (Path)
import RPG.Component.Pointer as Mouse exposing (Mouse)
import RPG.Component.Position as Position exposing (Position)
import RPG.Component.Server as Server exposing (Server)
import RPG.Component.Ui as Ui exposing (Ui)
import RPG.Component.Util.Vec2 as Vec2
import RPG.Component.Velocity as Velocity exposing (Velocity)
import Random exposing (Seed)


type alias World =
    { id : IdSource
    , you : EntityID
    , chat : Chat
    , seed : Seed
    , grid : Grid
    , p : Component.Set Position
    , v : Component.Set Velocity
    , char : Component.Set Character
    , name : Component.Set Name
    , anim : Component.Set Animation
    , action : Component.Set Action
    , path : Component.Set Path
    , ai : Component.Set Ai
    , mouse : Mouse
    , ui : Ui
    , fx : Component.Set Fx
    , particle : Component.Set Particle
    , server : Server
    , debug : Bool
    }


world : World
world =
    let
        you =
            5
    in
    { id = IdSource.empty 0
    , you = you
    , chat = Chat.empty
    , seed = Random.initialSeed 42
    , grid = Grid.empty 10 10
    , p = Position.empty
    , v = Velocity.empty
    , char = Character.empty
    , name = Name.empty
    , anim = Animation.empty
    , action = Action.empty
    , path = Path.empty
    , ai = Ai.empty
    , mouse = Mouse.empty
    , ui = Ui.empty
    , fx = Fx.empty
    , particle = Particle.empty
    , server = Server.empty
    , debug = False
    }
        |> (\w -> List.foldl spawn w bodies)
        |> Tuple.pair you
        |> Entity.remove Ai.spec
        |> Tuple.second


spawn ( body, p ) =
    IdSource.create
        >> Entity.with ( Character.spec, Character.spawn1 body )
        >> Entity.with ( Animation.spec, Animation.spawn )
        >> Entity.with ( Position.spec, Position.spawn p )
        >> Entity.with ( Velocity.spec, Vec2.zero )
        >> Entity.with ( Path.spec, [] )
        >> Entity.with ( Ai.spec, Ai.spawn )
        >> Entity.with ( Particle.spec, Particle.spawn )
        >> (\( id, w ) -> Entity.with ( Name.spec, Name.spawn (Random.initialSeed id) |> Tuple.first ) ( id, w ))
        >> Tuple.second


bodies =
    let
        zombieParts =
            { arm = False, brain = False, eye = False, mouth = False, ribs = False }
    in
    [ ( MaleDrake, { x = -160, y = 0 } )
    , ( MaleLizard, { x = -128, y = 0 } )
    , ( MaleOrc, { x = -96, y = 0 } )
    , ( Male Nothing Nothing Nothing, { x = -64, y = 0 } )
    , ( Skeleton, { x = -32, y = 0 } )
    , ( Zombie zombieParts, { x = 0, y = 0 } )
    , ( Female Nothing Nothing Nothing, { x = 32, y = 0 } )
    , ( FemaleOrc, { x = 64, y = 0 } )
    , ( FemaleLizard, { x = 96, y = 0 } )
    , ( FemaleDrake, { x = 128, y = 0 } )
    ]
