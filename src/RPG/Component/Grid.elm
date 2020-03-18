module RPG.Component.Grid exposing (Grid, empty, toGrid)

import AltMath.Vector2 exposing (Vec2)
import RPG.Component.Util.Matrix as Matrix exposing (Matrix)
import RPG.Component.Util.Vec2 as Vec2


toGrid { config, offset } { x, y } =
    { x = round (x + offset.x) // config.cellW |> toFloat
    , y = round (y + offset.y) // config.cellH |> toFloat
    }


type alias Grid =
    { collision : Matrix ()
    , config :
        { cellW : Int
        , cellH : Int
        }
    , offset : Vec2
    }


empty : Int -> Int -> Grid
empty w h =
    { collision = Matrix.repeat h w ()
    , config =
        { cellW = 32
        , cellH = 32
        }
    , offset = Vec2.zero
    }
