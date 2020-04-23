module RPG.Component.Server.Script.Char exposing (CharDef, WorldChar, all, c_man)

import Dict
import NarrativeEngine.Syntax.EntityParser exposing (ExtendFn)


all =
    Dict.empty
        |> Dict.insert "c_man" c_man


type alias CharDef =
    { name : String
    , color : Int
    , home : { x : Int, y : Int, z : Int }

    ---
    , oBody : Int -- Gets or sets the character's original body.
    , body : Int --Gets or sets the character's body.

    ---
    , dir : Int --Gets or sets the direction that the character is facing.

    --
    , p : { x : Int, y : Int, z : Int }
    , str : Int
    , dex : Int
    , int : Int

    ---
    , hits : Int
    , stam : Int
    , mana : Int

    ---
    , karma : Int
    , fame : Int

    ---
    , anim : Int
    }


type alias WorldChar =
    { extends : String
    , serial : String
    , p : String
    , str : Int
    , dex : Int
    , int : Int
    }


c_man : CharDef
c_man =
    { name = "a Man"
    , color = 0x00
    , home = { x = 0, y = 0, z = 0 }
    , oBody = 0x01
    , body = 0x01
    , dir = 0x00
    , p = { x = 0, y = 0, z = 0 }
    , str = 100
    , dex = 100
    , int = 100
    , hits = 100
    , stam = 100
    , mana = 100
    , karma = 0
    , fame = 0
    , anim = 0
    }
