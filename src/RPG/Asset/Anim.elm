module RPG.Asset.Anim exposing (all)

import Array exposing (Array)
import Playground exposing (group)
import Playground.Extra
import WebGL.Shape2d exposing (Shape2d)


all : Array (Int -> Shape2d)
all =
    Array.fromList
        [ anim "male/base.png"
        , anim "female/base.png"
        ]


anim : String -> Int -> Shape2d
anim url i =
    group [ tile64 "shadow.png" i, tile64 url i ]


tile64 : String -> Int -> Shape2d
tile64 url =
    Playground.Extra.tile 64 64 ("assets/lpc/body/" ++ url)
