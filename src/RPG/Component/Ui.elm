module RPG.Component.Ui exposing (Ui, empty)

import RPG.Asset.Cursor as Cursor


type alias Ui =
    { cursor : String
    , inventoryOpen : Bool
    , cursor2 : String
    }


empty : Ui
empty =
    { cursor = Cursor.default
    , inventoryOpen = True
    , cursor2 = Cursor.target
    }
