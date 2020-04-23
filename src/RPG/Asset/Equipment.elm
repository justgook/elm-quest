module RPG.Asset.Equipment exposing (get)

import Playground exposing (Shape, group, moveY)
import Playground.Extra
import RPG.Component.Animation as Action exposing (Animation, Pose(..))
import RPG.Component.Character exposing (Character)


get : Character -> Animation -> Shape
get body action =
    let
        i =
            Action.index action
    in
    [ shadow i
    , case body of
        _ ->
            femaleLizard i
    ]
        |> group


tile url =
    Playground.Extra.tile 64 64 ("assets/lpc/equipment/" ++ url)


shadow =
    tile <| "shadow.png"


maleBase =
    tile <| "male/base.png"


maleOrc =
    tile <| "male/orc.png"


maleDrake =
    tile <| "male/drake.png"


maleLizard =
    tile <| "male/lizard.png"


skeleton =
    tile <| "skeleton.png"


zombie =
    tile <| "zombie.png"


femaleBase =
    tile <| "female/base.png"


femaleOrc =
    tile <| "female/orc.png"


femaleDrake =
    tile <| "female/drake.png"


femaleLizard =
    tile <| "female/lizard.png"
