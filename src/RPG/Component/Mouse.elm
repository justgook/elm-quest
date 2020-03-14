module RPG.Component.Mouse exposing (Mouse, empty)


type alias Mouse =
    { down : Bool }


empty : Mouse
empty =
    { down = False }


get =
    .mouse


set =
    \comps world -> { world | mouse = comps }
