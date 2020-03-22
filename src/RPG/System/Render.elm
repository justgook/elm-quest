module RPG.System.Render exposing (system)

import Logic.System as System
import Playground exposing (..)
import RPG.Component.Animation as Action
import RPG.Component.Asset.Body as BodyAsset
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
    System.foldl3
        (\{ x, y } body action ->
            [ BodyAsset.get body action ]
                |> (if world.debug then
                        (::) (square red 32)

                    else
                        identity
                   )
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
