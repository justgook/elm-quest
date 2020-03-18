module RPG.System.Render.Util exposing (sprite)

import Math.Vector2 exposing (Vec2, vec2)
import Math.Vector4 exposing (Vec4, vec4)
import Playground exposing (Shape)
import WebGL exposing (Mesh, Shader)
import WebGL.Settings as WebGL exposing (Setting)
import WebGL.Settings.Blend as Blend
import WebGL.Shape2d exposing (Form(..), Render, Shape2d(..))
import WebGL.Texture exposing (Texture)


sprite : String -> { xmin : Float, xmax : Float, ymin : Float, ymax : Float } -> Float -> Float -> Shape
sprite atlas { xmin, xmax, ymin, ymax } w_ h_ =
    let
        w =
            abs (xmax - xmin) + 1

        h =
            abs (ymax - ymin) + 1
    in
    Shape2d
        { x = 0
        , y = 0
        , a = 0
        , sx = 1
        , sy = 1
        , o = 1
        , form =
            Textured atlas <|
                \t ->
                    let
                        ( tW_, tH_ ) =
                            WebGL.Texture.size t

                        tW =
                            toFloat tW_

                        tH =
                            toFloat tH_

                        uv =
                            vec4 (xmin / tW) (1 - ymin / tH - (h / tH)) (w / tW) (h / tH)

                        uv2 =
                            vec2 (w_ / w) (h_ / h)
                    in
                    Shape2d
                        { x = 0
                        , y = 0
                        , a = 0
                        , sx = 1
                        , sy = 1
                        , o = 1
                        , form =
                            Form w_ h_ <|
                                spriteRender uv2 t (vec2 tW tH) uv
                        }
        }


spriteRender : Vec2 -> Texture -> Vec2 -> Vec4 -> Render
spriteRender uv2 image_ imageSize uv translate scaleRotateSkew opacity =
    WebGL.entityWith
        defaultEntitySettings
        vertSprite
        fragSprite
        mesh
        { uP = translate
        , uT = scaleRotateSkew
        , uA = opacity
        , uImg = image_
        , uImgSize = imageSize
        , uUV = uv
        , uUV2 = uv2
        }


{-| -}
defaultEntitySettings : List Setting
defaultEntitySettings =
    [ Blend.add Blend.srcAlpha Blend.oneMinusSrcAlpha
    , WebGL.colorMask True True True False
    ]


{-| -}
vertSprite : Shader { a | aP : Vec2 } { b | uP : Vec2, uT : Vec4, uUV : Vec4, uUV2 : Vec2 } { uv : Vec2 }
vertSprite =
    [glsl|
            precision mediump float;
            attribute vec2 aP;
            uniform vec4 uT;
            uniform vec2 uP;
            varying vec2 uv;
            uniform vec4 uUV;
            uniform vec2 uUV2;
            vec2 edgeFix = vec2(0.0000001, -0.0000001);
            void main () {
//                vec2 aP_ = aP * .5 + 0.5;
//                uv = uUV.xy + (aP_ * uUV.zw * uUV2) + edgeFix;
                uv = aP * .5 + 0.5 + edgeFix;
                gl_Position = vec4(aP * mat2(uT) + uP, 0., 1.0);
            }
        |]



--fragSprite : Shader a { b | uImg : Texture, uImgSize : Vec2, uA : Float, uUV2 : Vec2 } { uv : Vec2 }


fragSprite =
    --(2i + 1)/(2N) Pixel perfect center
    [glsl|
        precision mediump float;
        varying vec2 uv;
        uniform vec2 uImgSize;
        uniform sampler2D uImg;
        uniform float uA;
        uniform vec4 uUV;
        uniform vec2 uUV2;
        void main () {
            vec2 uv2 = uUV.xy + (fract(uv * uUV2) * uUV.zw );
            vec2 pixel = (floor(uv2 * uImgSize) + 0.5) / uImgSize;
            gl_FragColor = texture2D(uImg, pixel);
            gl_FragColor.a *= uA;
        }
    |]


mesh : Mesh { aP : Vec2 }
mesh =
    WebGL.triangleStrip
        [ { aP = vec2 -1 -1 }
        , { aP = vec2 -1 1 }
        , { aP = vec2 1 -1 }
        , { aP = vec2 1 1 }
        ]
