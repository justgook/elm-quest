module RPG.Component.Chat exposing (Chat, empty, input, spawn, system)

import Browser.Events as Browser
import Json.Decode as D
import Playground exposing (Shape, group, move, moveY, rectangle, red)
import RPG.Asset.Text


type alias Chat =
    { input : String
    , active : Bool
    , messages : List Shape
    , messages_ : List String
    }


empty : Chat
empty =
    { input = ".add c_man"
    , active = True
    , messages = []
    , messages_ = []
    }


system : { a | chat : Chat } -> Shape
system { chat } =
    [ chat.messages |> group
    , RPG.Asset.Text.chat chat.input
    ]
        |> group


input ({ chat } as world) =
    Browser.onKeyUp
        (D.field "key" D.string
            |> D.andThen
                (\key ->
                    case key of
                        "Backspace" ->
                            { world | chat = { chat | input = String.dropRight 1 chat.input } }
                                |> D.succeed

                        "Enter" ->
                            { world | chat = spawn chat }
                                |> D.succeed

                        _ ->
                            case String.toList key of
                                [ _ ] ->
                                    { world | chat = { chat | input = chat.input ++ key } }
                                        |> D.succeed

                                _ ->
                                    D.fail ""
                )
        )


spawn chat =
    if chat.input == "" then
        chat

    else if String.startsWith ".add" chat.input then
        chat

    else
        let
            messages_ =
                chat.input :: List.take 10 chat.messages_

            messages =
                messages_
                    |> List.foldl
                        (\a ( acc, offset ) ->
                            ( (RPG.Asset.Text.chat a |> moveY offset)
                                :: acc
                            , offset + lineHeight
                            )
                        )
                        ( [], 10 )
                    |> Tuple.first
        in
        { chat
            | input = ""
            , messages = messages
            , messages_ = messages_
        }


lineHeight =
    10
