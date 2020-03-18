module RPG.Component.Ui exposing (Ui, empty)


type alias Ui =
    { cursor : String
    , inventory : Bool
    }


empty : Ui
empty =
    { cursor = cursor
    , inventory = False
    }


cursor =
    """data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAAAXNSR0IArs4c6QAAAL1JREFUKJGVkrENgzAQAI9XJOhYAdFYSokQC3gIpqDILJmC1CnSUKZD9DSIFejoSOXIgAXmm3/Jf3+29aRJvnAhBOAKJACf990bElP4QgIw1x0AVRGeQjeAqMyY6w6tAGKe5MswtsGhISozALSaDk1iG3yglcEHWhlcsYV2bzADmj5Gq2kHCUDTx3+DyVpNTkjMoW2wITuGsd0bmj525sfrCxCIPcFcwc52M0CQJvlSFaHzh7bNpjhbuNWK/ADDZWjuLvOJVwAAAABJRU5ErkJggg=="""
