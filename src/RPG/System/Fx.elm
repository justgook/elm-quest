module RPG.System.Fx exposing (system)

import Array exposing (Array)
import Logic.Component as Component
import Logic.Entity as Entity exposing (EntityID)
import Logic.System exposing (System)
import Playground exposing (Screen)
import RPG.Component.Fx as Fx
import RPG.Component.Grid as Grid
import RPG.Component.IdSource as IdSource
import RPG.Component.Position as Position exposing (Position)
import RPG.World exposing (World)


system : Screen -> Float -> System World
system screen delta ({ mouse } as w) =
    if mouse.down then
        step delta w
            |> spawn (Grid.fromScreen w.grid mouse.p |> Grid.fromGrid w.grid)

    else
        step delta w


step delta =
    stepWith
        (\i fx w ->
            let
                life =
                    fx.life - delta
            in
            if life < 0 then
                ( Nothing, remove i w )

            else
                ( Just { fx | life = life }, w )
        )
        Fx.spec


spawn : Position -> World -> World
spawn p =
    IdSource.create
        >> Entity.with ( Fx.spec, Fx.spawn )
        >> Entity.with ( Position.spec, Position.spawn p )
        >> Tuple.second


remove : EntityID -> World -> World
remove id =
    IdSource.remove id
        >> Entity.remove Fx.spec
        >> Entity.remove Position.spec
        >> Tuple.second



-----


stepWith : (EntityID -> comp -> world -> ( Maybe comp, world )) -> Component.Spec comp world -> System world
stepWith f { get, set } world =
    indexedFoldlArray
        (\i c_ (( comps, w ) as acc) ->
            case c_ of
                Just c ->
                    f i c w
                        |> Tuple.mapFirst (\cc -> Array.set i cc comps)

                Nothing ->
                    acc
        )
        ( get world, world )
        (get world)
        |> (\( comps, w ) -> set comps w)


indexedFoldlArray : (Int -> a -> b -> b) -> b -> Array a -> b
indexedFoldlArray func acc list =
    let
        inner : a -> ( Int, b ) -> ( Int, b )
        inner x ( i, thisAcc ) =
            ( i + 1, func i x thisAcc )
    in
    Tuple.second (Array.foldl inner ( 0, acc ) list)
