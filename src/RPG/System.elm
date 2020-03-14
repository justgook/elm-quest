module RPG.System exposing (system)

import RPG.Game as Game exposing (Message(..), Model)
import RPG.System.Action as Action
import RPG.System.Render as Render
import Set
import Task
import WebGL.Texture as Texture


system : Float -> Model -> ( Model, Cmd Message )
system delta ({ textures } as model) =
    let
        world =
            model.world
                |> Action.system delta

        ( entities, missing ) =
            Render.system { model | world = world }
    in
    ( { model
        | entities = entities
        , textures =
            { textures
                | loading = Set.union missing textures.loading
            }
        , world = world
      }
    , Set.diff missing textures.loading
        |> Set.foldl (\url -> (::) (getTexture url)) []
        |> Cmd.batch
    )


getTexture : String -> Cmd Game.Message
getTexture url =
    Texture.loadWith textureOption url
        |> Task.attempt
            (\r ->
                case r of
                    Ok t ->
                        Texture url t

                    Err e ->
                        TextureFail e
            )


textureOption : Texture.Options
textureOption =
    { magnify = Texture.linear
    , minify = Texture.linear
    , horizontalWrap = Texture.clampToEdge
    , verticalWrap = Texture.clampToEdge
    , flipY = True
    }
