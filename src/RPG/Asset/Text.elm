module RPG.Asset.Text exposing (chat, text)

import Dict
import Playground exposing (rgb)
import WebGL.Shape2d exposing (Shape2d)
import WebGL.Ui


text : String -> Shape2d
text =
    tileFont (rgb 18 147 216)


chat : String -> Shape2d
chat =
    tileFontChat (rgb 0 0 255)


tileFont =
    WebGL.Ui.tileFont
        { charW = 7
        , charH = 9
        , src = "assets/ui/charmap-oldschool_white.png"
        , getIndex = getIndex
        }


tileFontChat =
    WebGL.Ui.tileFontLeftBottom
        { charW = 7
        , charH = 9
        , src = "assets/ui/charmap-oldschool_white.png"
        , getIndex = getIndex
        }


getIndex : Char -> Float
getIndex c =
    Dict.get c letters
        |> Maybe.withDefault 0


letters =
    [ [ '\u{00A0}', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1' ]
    , [ '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', ' ' ]
    , [ 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U' ]
    , [ 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
    , [ 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ]
    , [ 'z', '{', '|', '}', '~' ]
    ]
        |> List.concat
        |> List.indexedMap (\a b -> ( b, toFloat a ))
        |> Dict.fromList
