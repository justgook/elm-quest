module RPG.Asset.Body exposing (get)

import Playground exposing (Shape, group, moveY)
import Playground.Extra
import RPG.Component.Animation as Action exposing (Animation, Pose(..))
import RPG.Component.Body exposing (Body(..))


get : Body -> Animation -> Shape
get body action =
    let
        i =
            Action.index action
    in
    [ shadow i
    , case body of
        Male eyes ears nose ->
            maleBase i

        MaleOrc ->
            maleOrc i

        MaleDrake ->
            maleDrake i

        MaleLizard ->
            maleLizard i

        Skeleton ->
            skeleton i

        Zombie blood ->
            zombie i

        Female eyes ears nose ->
            femaleBase i

        FemaleOrc ->
            femaleOrc i

        FemaleDrake ->
            femaleDrake i

        FemaleLizard ->
            femaleLizard i
    ]
        |> group



--|> moveY 16


tile url =
    Playground.Extra.tile 64 64 ("assets/lpc/body/" ++ url)


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
