module RPG.System.Render exposing (system)

import Logic.Component as Component
import Logic.System as System exposing (applyIf, applyMaybe)
import Playground exposing (..)
import RPG.Asset.Body as BodyAsset
import RPG.Asset.Text
import RPG.Component.Animation as Action
import RPG.Component.Body as Body
import RPG.Component.Position as Position
import RPG.Game as Game
import RPG.System.Render.Fx as RenderFx
import RPG.System.Render.Ui as RenderUi
import RPG.World exposing (World)
import Set exposing (Set)
import WebGL exposing (Entity)
import WebGL.Shape2d


system : Game.Model -> ( List Entity, Set String )
system { screen, textures, world } =
    [ [ character world
      , RenderFx.system world
      ]
        |> group
        |> move -world.grid.offset.x -world.grid.offset.y
    , RenderUi.system screen world
    ]
        |> (if world.debug then
                (::) (debugCenter world)

            else
                identity
           )
        |> WebGL.Shape2d.toEntities textures.done
            { width = screen.width, height = screen.height }


character : World -> Shape
character world =
    System.indexedFoldl3
        (\i { x, y } body action ->
            [ BodyAsset.get body action
            ]
                |> applyIf world.debug ((::) (square red 32))
                |> applyMaybe (Component.get i world.name) (\a w -> moveY 24 (RPG.Asset.Text.text a) :: w)
                |> group
                |> move (px x) (px y)
                |> (::)
        )
        (Position.spec.get world)
        (Body.spec.get world)
        (Action.spec.get world)
        []
        |> group


px =
    round >> toFloat


debugCenter world =
    [ rectangle red 2 1000
    , rectangle red 1000 2
    , rectangle red 100 2 |> moveY 64
    , rectangle red 100 2 |> moveY -64
    , rectangle red 2 100 |> moveX 128
    , rectangle red 2 100 |> moveX -128
    ]
        |> group
