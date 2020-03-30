module WebGL.Ui.Text exposing (tileFont)

import Math.Vector2 exposing (Vec2, vec2)
import Math.Vector3 exposing (Vec3)
import Math.Vector4 exposing (Vec4)
import WebGL
import WebGL.Shape2d exposing (Form(..), Shape2d(..))
import WebGL.Texture as Texture exposing (Texture)
import WebGL.Ui.Internal exposing (defaultEntitySettings, fragImageColor, mesh, setAlpha, vertTile)


tileFont : { a | charW : Float, charH : Float, src : String, getIndex : Char -> Float } -> Vec3 -> String -> Shape2d
tileFont { charW, charH, src, getIndex } color string =
    Shape2d
        { x = 0
        , y = 0
        , a = 0
        , sx = 1
        , sy = 1
        , o = 1
        , form =
            Textured src
                (\t ->
                    let
                        ( imgW, imgH ) =
                            t
                                |> Texture.size
                                |> Tuple.mapBoth toFloat toFloat

                        imgSize =
                            Math.Vector2.vec2 imgW imgH

                        toChar =
                            char t imgSize charW charH color
                    in
                    draw (outputFold toChar getIndex charW charH) charW charH string
                )
        }


draw fn charW charH string =
    let
        output =
            String.toList string
                |> List.foldl fn
                    { chars = [], x = charW, y = charH, width = 0 }
    in
    Shape2d
        { x = max output.x output.width * -0.5
        , y = output.y * -0.5 + 0.5 * -charH
        , a = 0
        , sx = 1
        , sy = 1
        , o = 1
        , form = Group output.chars
        }


char spriteSheet imageSize w h color x y index =
    Shape2d
        { x = x
        , y = y
        , a = 0
        , sx = 1
        , sy = 1
        , o = 1
        , form = Form w h <| tileWithColor spriteSheet (vec2 w h) imageSize color index
        }


outputFold toChar getIndex w h c { chars, x, y, width } =
    if c == '\n' then
        { chars = chars
        , x = w
        , y = y - h
        , width = max width x
        }

    else
        { chars = toChar x y (getIndex c) :: chars, x = x + w, y = y, width = width }


tileWithColor : Texture -> Vec2 -> Vec2 -> Vec3 -> Float -> Vec2 -> Vec4 -> Float -> WebGL.Entity
tileWithColor spriteSheet spriteSize imageSize color index translate scaleRotateSkew opacity =
    WebGL.entityWith
        defaultEntitySettings
        vertTile
        fragImageColor
        mesh
        { uP = translate
        , uT = scaleRotateSkew
        , index = index
        , spriteSize = spriteSize
        , uImg = spriteSheet
        , uImgSize = imageSize
        , uA = opacity
        , color = setAlpha color opacity
        }
