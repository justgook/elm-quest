module RPG.System.Render.Ui exposing (system)

import Playground exposing (..)
import Playground.Extra exposing (..)
import RPG.System.Render.Util



--https://opengameart.org/content/golden-ui
--https://opengameart.org/content/golden-ui-bigger-than-ever-edition


config =
    { padding = 16
    , height = 64
    }


system { bottom, left, top, width } { ui } =
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
                (::) inventory

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
    [ box 100 100 |> move 25 100
    , [ box 150 30, words white "INVENTORY" ]
        |> group
        |> moveY 190
    , box 20 100
        |> move -65 100
    ]
        |> group


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


box w h =
    [ --- center
      rectangle bg (w + 1) (h + 1)

    ------- sides
    , spriteRepeat { xmin = 12, xmax = 68, ymin = 34, ymax = 40 } (w + 1) 7
        |> move 0.5 (h * 0.5 + 3.5)
    , spriteRepeat { xmin = 70, xmax = 78, ymin = 42, ymax = 64 } 9 (h + 1.5)
        |> move (w * 0.5 + 4.5) 0.5
    , spriteRepeat { xmin = 12, xmax = 68, ymin = 66, ymax = 72 } (w + 1) 7
        |> move 0.5 -(h * 0.5 + 3.5)
    , spriteRepeat { xmin = 1, xmax = 10, ymin = 42, ymax = 64 } 10 (h + 1.5)
        |> move (-w * 0.5 - 5) 0.5

    --corner
    , spriteRepeat { xmin = 1, xmax = 10, ymin = 34, ymax = 40 } 10 7
        |> move (-w * 0.5 - 5) (h * 0.5 + 3.5)
    , spriteRepeat { xmin = 70, xmax = 78, ymin = 34, ymax = 40 } 9 7
        |> move (w * 0.5 + 4.5) (h * 0.5 + 3.5)
    , spriteRepeat { xmin = 70, xmax = 78, ymin = 66, ymax = 72 } 9 7
        |> move (w * 0.5 + 4.5) -(h * 0.5 + 3.5)
    , spriteRepeat { xmin = 1, xmax = 10, ymin = 66, ymax = 72 } 10 7
        |> move (-w * 0.5 - 5) -(h * 0.5 + 3.5)
    ]
        |> group


sprite =
    Playground.Extra.sprite "assets/ui/ui-sheet.png"


spriteRepeat =
    RPG.System.Render.Util.sprite "assets/ui/ui-sheet.png"


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
