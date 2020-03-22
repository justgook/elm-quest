module RPG.System.Render.Ui exposing (system)

import Playground exposing (..)
import Playground.Extra exposing (..)
import WebGL.Ui exposing (slice9)



--https://opengameart.org/content/golden-ui
--https://opengameart.org/content/golden-ui-bigger-than-ever-edition


config =
    { padding = 16
    , height = 64
    }


system { bottom, left, right, top, width } { ui } =
    [ --TopLeft
      [ rectangle green (width * 0.5 - config.padding) config.height |> fade 0
      , health 1 1 0.3
            |> move (50 + width * -0.25 + config.padding * 0.5) 0
            |> scale 2
            |> moveX 50
      ]
        |> group
        |> move (left + width * 0.25 + config.padding * 0.5)
            (top - config.height * 0.5 - config.padding)

    --Top-Right
    , [ rectangle yellow
            (width * 0.5 - config.padding)
            config.height
            |> fade 0
      ]
        |> group
        |> move (width * 0.25 - config.padding * 0.5)
            (top - config.height * 0.5 - config.padding)

    -- Bottom-Left
    , [ rectangle red (width * 0.5 - config.padding) config.height
            |> fade 0
      , hotkeys ((width * 0.25 - config.padding - 15) / 25 |> floor |> toFloat)
            |> scale 2
      ]
        |> group
        |> move (left + width * 0.25 + config.padding * 0.5)
            (bottom + config.height * 0.5 + config.padding)

    --Bottom-Right
    , [ rectangle blue
            (width * 0.5 - config.padding)
            config.height
            |> fade 0
      ]
        |> group
        |> move (width * 0.25 - config.padding * 0.5)
            (bottom + config.height * 0.5 + config.padding)

    --Center
    ]
        |> (if ui.inventory then
                (::) (scale 2 inventory |> move (right - 110) (top - 175))

            else
                identity
           )
        |> group


hotkeys w =
    [ spriteRepeat
        { xmin = 109
        , ymin = 1
        , xmax = 133
        , ymax = 24
        }
        (25 * w)
        24
    , sprite
        { xmin = 102
        , ymin = 6
        , xmax = 108
        , ymax = 19
        }
        |> move (-12.5 * w - 3.5) 0
    , sprite
        { xmin = 134
        , ymin = 6
        , xmax = 141
        , ymax = 19
        }
        |> move (12.5 * w + 4) 0
    ]
        |> group


inventory =
    let
        cell =
            border2 16 16
    in
    List.range 0 14
        |> List.map (\i -> cell |> move (toFloat (modBy 5 i) * 17 - 34) (17 * toFloat (floor (toFloat i / 5))))
        |> (::) (border 102 102)
        |> (::) (moveY 67 (group [ border 102 30, words white "INVENTORY" |> scale 0.5 ]))
        |> group


border =
    slice9
        "assets/ui/ui-sheet.png"
        { bounds = { x = 1, y = 34, w = 67, h = 39 }
        , slice = { x = 9, y = 9, w = 50, h = 24 }
        }


border2 =
    slice9
        "assets/ui/ui-sheet.png"
        { bounds = { x = 69, y = 34, w = 8, h = 8 }
        , slice = { x = 4, y = 4, w = 1, h = 1 }
        }


health h s m =
    [ sprite { xmin = 1, xmax = 100, ymin = 1, ymax = 32 }
    , rectangle red (50 * h + 1) 4 |> move ((25 * h) - 13.5) 10
    , rectangle red1 (50 * h) 2 |> move ((25 * h) - 13) 11
    , rectangle green (50 * s + 1) 4 |> move ((25 * s) - 13.5) 0
    , rectangle green1 (50 * s) 2 |> move ((25 * s) - 13) 1
    , rectangle blue (50 * m + 1) 4 |> move ((25 * m) - 13.5) -10
    , rectangle blue1 (50 * m) 2 |> move ((25 * m) - 13) -9
    ]
        |> group


sprite =
    Playground.Extra.sprite "assets/ui/ui-sheet.png"


spriteRepeat =
    WebGL.Ui.repeat "assets/ui/ui-sheet.png"


red =
    rgb 208 70 72


red1 =
    rgb 210 170 153


green =
    rgb 109 170 44


green1 =
    rgb 218 212 94


blue =
    rgb 89 125 206


blue1 =
    rgb 109 194 202


bg =
    rgb 78 74 78
