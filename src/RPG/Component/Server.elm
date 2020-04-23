module RPG.Component.Server exposing (Server, empty)

import Dict exposing (Dict)
import Hex
import NarrativeEngine.Core.WorldModel exposing (NarrativeComponent, WorldModel)
import RPG.Component.Server.Script.Char exposing (CharDef, c_man)
import Set


type alias ItemDef =
    { name : String
    }


type alias Server =
    { item : WorldModel ItemDef
    , char : WorldModel CharDef
    , next : Int
    }


empty : Server
empty =
    { item = Dict.empty
    , char = Dict.empty
    , next = 0x01
    }
        |> spawnChar c_man


spawnChar : CharDef -> Server -> Server
spawnChar c w =
    { w
        | next = w.next + 1
        , char =
            w.char
                |> Dict.insert
                    (Hex.toString w.next)
                    { name = c.name
                    , color = c.color
                    , home = c.home
                    , oBody = c.oBody
                    , body = c.body
                    , dir = c.dir
                    , p = c.p
                    , str = c.str
                    , dex = c.dex
                    , int = c.int
                    , hits = c.hits
                    , stam = c.stam
                    , mana = c.mana
                    , karma = c.karma
                    , fame = c.fame
                    , anim = c.anim

                    ---
                    , tags = Set.empty
                    , stats = Dict.empty
                    , links = Dict.empty
                    }
    }
