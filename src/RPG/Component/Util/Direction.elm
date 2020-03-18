module RPG.Component.Util.Direction exposing
    ( Direction(..)
    , DirectionRecord
    , east
    , fromInt
    , fromRecord
    , fromString
    , north
    , opposite
    , oppositeMirror
    , south
    , toInt
    , toRecord
    , toString
    , west
    )


type Direction
    = North
    | East
    | South
    | West


opposite : Direction -> Direction
opposite dir =
    case dir of
        North ->
            South

        East ->
            West

        South ->
            North

        West ->
            East


oppositeMirror : Direction -> DirectionRecord
oppositeMirror dir =
    case dir of
        North ->
            { x = 0, y = 1 }

        East ->
            { x = 1, y = 0 }

        South ->
            { x = 0, y = 1 }

        West ->
            { x = 1, y = 0 }


toRecord : Direction -> DirectionRecord
toRecord dir =
    case dir of
        North ->
            north

        East ->
            east

        South ->
            south

        West ->
            west


fromRecord : { a | x : Float, y : Float } -> Direction
fromRecord { x, y } =
    let
        ax =
            abs x

        ay =
            abs y
    in
    if ax > ay then
        if x > 0 then
            East

        else
            West

    else if y > 0 then
        North

    else
        South


fromString : String -> Direction
fromString dir =
    case dir of
        "N" ->
            North

        "E" ->
            East

        "S" ->
            South

        "W" ->
            West

        _ ->
            South


toString : Direction -> String
toString dir =
    case dir of
        North ->
            "N"

        East ->
            "E"

        South ->
            "S"

        West ->
            "W"


toInt : Direction -> Int
toInt dir =
    case dir of
        North ->
            1

        East ->
            2

        South ->
            3

        West ->
            4


fromInt : Int -> Direction
fromInt dir =
    case dir of
        1 ->
            North

        2 ->
            East

        3 ->
            South

        4 ->
            West

        _ ->
            South


type alias DirectionRecord =
    { x : Float, y : Float }


north : DirectionRecord
north =
    { x = 0, y = 1 }


east : DirectionRecord
east =
    { x = 1, y = 0 }


south : DirectionRecord
south =
    { x = 0, y = -1 }


west : DirectionRecord
west =
    { x = -1, y = 0 }
