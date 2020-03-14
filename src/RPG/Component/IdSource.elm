module RPG.Component.IdSource exposing (IdSource, create, empty, remove)

import Logic.Entity as Entity exposing (EntityID)


type alias IdSource =
    { pool : List EntityID, next : EntityID }


empty : EntityID -> IdSource
empty next =
    { pool = [], next = next }


get =
    .id


set =
    \comps world -> { world | id = comps }


create world =
    let
        ({ next, pool } as comp) =
            get world
    in
    case pool of
        id :: rest ->
            Entity.create id (set { comp | pool = rest } world)

        [] ->
            Entity.create next (set { comp | next = next + 1 } world)


remove entityID world =
    let
        comp =
            get world
    in
    ( entityID, set { comp | pool = entityID :: comp.pool } world )
