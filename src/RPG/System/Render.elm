module RPG.System.Render exposing (system)

import Logic.System as System
import Playground exposing (..)
import RPG.Component.Action as Action
import RPG.Component.Asset.Body as BodyAsset
import RPG.Component.Body as Body
import RPG.Component.Position as Position
import RPG.Game as Game
import RPG.World exposing (World)
import Set exposing (Set)
import WebGL exposing (Entity)
import WebGL.Shape2d


system : Game.Model -> ( List Entity, Set String )
system { screen, textures, world } =
    character world
        |> WebGL.Shape2d.toEntities textures.done
            { width = screen.width, height = screen.height }


character : World -> List Shape
character world =
    System.foldl3
        (\{ x, y } body action ->
            BodyAsset.get body action
                |> move x y
                |> (::)
        )
        (Position.spec.get world)
        (Body.spec.get world)
        (Action.spec.get world)
        []
