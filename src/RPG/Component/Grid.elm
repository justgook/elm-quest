module RPG.Component.Grid exposing (Grid, empty, fromGrid, fromScreen, toGrid)

import AltMath.Vector2 exposing (Vec2)
import RPG.Component.Util.Matrix as Matrix exposing (Matrix)


fromScreen { cellW, cellH, offset } { x, y } =
    { x = round ((x + offset.x) / cellW) |> toFloat
    , y = round ((y + offset.y) / cellH) |> toFloat
    }


fromGrid { cellW, cellH } { x, y } =
    { x = x * cellW
    , y = y * cellH
    }


toGrid { cellW, cellH, offset } { x, y } =
    { x = round (x / cellW) |> toFloat
    , y = round (y / cellH) |> toFloat
    }


type alias Grid =
    { collision : Matrix ()
    , cellW : Float
    , cellH : Float
    , offset : Vec2
    }


empty : Int -> Int -> Grid
empty w h =
    { collision = Matrix.repeat h w ()
    , cellW = 32
    , cellH = 32
    , offset = Vec2 0 0
    }
