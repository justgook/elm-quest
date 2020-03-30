module WebGL.Ui.Internal exposing (defaultEntitySettings, fragImageColor, mesh, setAlpha, vertTile)

import Math.Vector2 exposing (Vec2, vec2)
import Math.Vector3 as Vec3 exposing (Vec3)
import Math.Vector4 exposing (Vec4, vec4)
import Playground exposing (Shape, group)
import WebGL exposing (Mesh, Shader)
import WebGL.Settings as WebGL exposing (Setting)
import WebGL.Settings.Blend as Blend
import WebGL.Shape2d exposing (Form(..), Render, Shape2d(..))
import WebGL.Texture exposing (Texture)


{-| -}
defaultEntitySettings : List Setting
defaultEntitySettings =
    [ Blend.add Blend.srcAlpha Blend.oneMinusSrcAlpha
    , WebGL.colorMask True True True False
    ]


setAlpha : Vec3 -> Float -> Vec4
setAlpha =
    Vec3.toRecord >> (\a -> Math.Vector4.vec4 a.x a.y a.z)


{-| -}
vertTile :
    Shader { a | aP : Vec2 }
        { b
            | uImgSize : Vec2
            , index : Float
            , spriteSize : Vec2
            , uP : Vec2
            , uT : Vec4
        }
        { uv : Vec2 }
vertTile =
    [glsl|
            precision mediump float;
            attribute vec2 aP;
            uniform vec4 uT;
            uniform vec2 uP;
            uniform float index;
            uniform vec2 spriteSize;
            uniform vec2 uImgSize;
            varying vec2 uv;
            vec2 edgeFix = vec2(0.0000001, -0.0000001);
            void main () {
                vec2 ratio = spriteSize / uImgSize;
                float row = (uImgSize.y / spriteSize.y - 1.0) - floor((index + 0.5) * ratio.x);
                float column = floor(mod((index + 0.5), uImgSize.x / spriteSize.x));
                vec2 offset = vec2(column, row) * ratio;
                uv = (aP * 0.5 + 0.5) * ratio + offset + edgeFix;
                gl_Position = vec4(aP * mat2(uT) + uP, 0.0, 1.0);
            }
        |]


{-| -}
fragImageColor : Shader a { b | color : Vec4, uImg : Texture, uImgSize : Vec2 } { uv : Vec2 }
fragImageColor =
    [glsl|
        precision mediump float;
        varying vec2 uv;
        uniform vec2 uImgSize;
        uniform sampler2D uImg;
        uniform vec4 color;
        void main () {
            vec2 pixel = ((floor(uv * uImgSize) + 0.5) * 2.0 ) / uImgSize / 2.0;
            gl_FragColor = texture2D(uImg, pixel) * color;
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
