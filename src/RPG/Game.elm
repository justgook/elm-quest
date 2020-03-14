module RPG.Game exposing (Message(..), Model)

import Dict exposing (Dict)
import Playground exposing (Screen)
import RPG.World exposing (World)
import Set exposing (Set)
import WebGL
import WebGL.Texture as Texture exposing (Texture)


type alias Model =
    { entities : List WebGL.Entity
    , textures : { done : Dict String Texture, loading : Set String }
    , screen : Screen
    , world : World
    }


type Message
    = Texture String Texture
    | TextureFail Texture.Error
    | Resize Float Float
    | Delta Float
    | Event (World -> World)
    | Subscription World
