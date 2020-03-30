module WebGL.Ui.Slice exposing (slice9, spriteRender)

import Math.Vector2 as Vec2 exposing (Vec2, vec2)
import Math.Vector4 as Vec4 exposing (Vec4, vec4)
import WebGL exposing (Mesh, Shader)
import WebGL.Shape2d exposing (Form(..), Render, Shape2d(..))
import WebGL.Texture exposing (Texture)
import WebGL.Ui.Internal exposing (defaultEntitySettings, mesh)


slice9 atlas { bounds, slice } w h =
    Shape2d
        { x = 0
        , y = 0
        , a = 0
        , sx = 1
        , sy = 1
        , o = 1
        , form =
            Textured atlas <|
                \texture ->
                    let
                        ( tW_, tH_ ) =
                            WebGL.Texture.size texture

                        tw =
                            toFloat tW_

                        th =
                            toFloat tH_
                    in
                    Shape2d
                        { x = 0
                        , y = 0
                        , a = 0
                        , sx = 1
                        , sy = 1
                        , o = 1
                        , form =
                            Form w h <|
                                slice9Render
                                    texture
                                    (vec2 tw th)
                                    (vec2 w h)
                                    (vec4 bounds.x bounds.y bounds.w bounds.h)
                                    (vec4 slice.x slice.y slice.w slice.h)
                        }
        }


slice9Render img imageSize uSize uBounds uSlice uP uT opacity =
    WebGL.entityWith
        defaultEntitySettings
        vertSlice9
        fragSlice9
        mesh9
        { uP = uP
        , uT = uT
        , uA = opacity
        , uImg = img
        , uImgSize = imageSize
        , uBounds = uBounds
        , uSlice = uSlice
        , uSize = uSize
        }


vertSlice9 =
    [glsl|
precision mediump float;
attribute vec2 aP;
uniform vec4 uT;
uniform vec2 uP;
uniform vec2 uSize;
uniform vec2 uImgSize;
uniform vec4 uSlice;
uniform vec4 uBounds;
varying vec2 uv;
varying vec2 uv2;
varying vec4 center;
varying vec2 doRepeat;
varying vec2 repeat;
vec2 edgeFix = vec2(0.0000001, -0.0000001);
void main () {
    doRepeat = vec2(0.0,0.0);
    center = vec4(
        uBounds.x + uSlice.x,
        uImgSize.y - (uBounds.y + uSlice.y + uSlice.w),
        uSlice.z,
        uSlice.w
    );
    repeat = vec2((uSize.x - (uBounds.z - uSlice.z)) / uSlice.z, (uSize.y - (uBounds.w - uSlice.w)) / uSlice.w);
    vec2 p = aP;
    uv2 = vec2(0.0, 0.0);

    if (aP.x == -1.0) {
        p.x = -1.0 + (uSlice.x / uSize.x * 2.0);
        uv.x = 1.0;
        doRepeat.x = 1.0;
        uv2.x = (uBounds.x + uSlice.x);
    }
    if (aP.x == 1.0) {
        p.x = 1.0 - (uBounds.z - uSlice.x - uSlice.z) / uSize.x * 2.0;
        uv.x = 2.0;
        doRepeat.x = 1.0;
        uv2.x = (uBounds.x + uSlice.x + uSlice.z);
    }
    if (aP.y == 1.0) {
        p.y = 1.0 - (uSlice.y / uSize.y * 2.0);
        uv.y = 2.0;
        doRepeat.y = 1.0;
        uv2.y = uImgSize.y - (uBounds.y + uSlice.y);
    }
    if (aP.y == -1.0) {
        p.y = -1.0 + (uBounds.w - uSlice.y - uSlice.w) / uSize.y * 2.0;
        uv.y = 1.0;
        doRepeat.y = 1.0;
        uv2.y = uImgSize.y - (uBounds.y + uSlice.y + uSlice.w);
    }
    if (aP.x == -3.0) {
        p.x = -1.0;
        uv.x = 0.0;
        uv2.x = uBounds.x;
    }
    if (aP.x == 3.0) {
        p.x = 1.0;
        uv.x = 3.0;
        uv2.x = (uBounds.x + uBounds.z);
    }
    if (aP.y == 3.0) {
        p.y = 1.0;
        uv.y = 3.0;
        uv2.y = uImgSize.y - uBounds.y;
    }
    if (aP.y == -3.0) {
        p.y = -1.0;
        uv.y = 0.0;
        uv2.y = uImgSize.y - (uBounds.y + uBounds.w);
    }

    uv += edgeFix;
    uv2 += edgeFix;

    gl_Position = vec4(p * mat2(uT) + uP, 0., 1.0);

}
        |]


fragSlice9 =
    [glsl|
        precision mediump float;
        varying vec2 uv;
        varying vec4 center;
        varying vec2 uv2;
        varying vec2 doRepeat;
        varying vec2 repeat;
        uniform float uA;
        uniform sampler2D uImg;
        uniform vec2 uImgSize;
        void main () {
        gl_FragColor = vec4(0.,0.,0.,1.);
        vec2 pixel2 = fract(fract(uv) * repeat);

        if (doRepeat.x < 1.0) {
            pixel2.x = fract(uv.x);
        }
        if (doRepeat.y < 1.0) {
            pixel2.y = fract(uv.y);
        }

        vec2 repeatPart = (pixel2 * center.zw + center.xy);

        if (doRepeat.x < 1.0) {
            repeatPart.x = (uv2.x);
        }
        if (doRepeat.y < 1.0) {
            repeatPart.y = (uv2.y);
        }

        gl_FragColor = texture2D(uImg, (floor(repeatPart) + 0.5) / uImgSize );

        }
    |]


mesh9 : Mesh { aP : Vec2 }
mesh9 =
    let
        v0 =
            vec2 -3 3

        v1 =
            vec2 -1 3

        v2 =
            vec2 1 3

        v3 =
            vec2 3 3

        v4 =
            vec2 -3 1

        v5 =
            vec2 -1 1

        v6 =
            vec2 1 1

        v7 =
            vec2 3 1

        v8 =
            vec2 -3 -1

        v9 =
            vec2 -1 -1

        v10 =
            vec2 1 -1

        v11 =
            vec2 3 -1

        v12 =
            vec2 -3 -3

        v13 =
            vec2 -1 -3

        v14 =
            vec2 1 -3

        v15 =
            vec2 3 -3
    in
    [ v0, v4, v1, v5, v2, v6, v3, v7, v11, v6, v10, v5, v9, v4, v8, v12, v9, v13, v10, v14, v11, v15 ]
        |> List.map (\i -> { aP = i })
        |> WebGL.triangleStrip


spriteRender : Vec2 -> Texture -> Vec2 -> Vec4 -> Render
spriteRender uv2 image_ imageSize uv uP uT opacity =
    WebGL.entityWith
        defaultEntitySettings
        vertSprite
        fragSprite
        mesh
        { uP = uP
        , uT = uT
        , uA = opacity
        , uImg = image_
        , uImgSize = imageSize
        , uUV = uv
        , uUV2 = uv2
        }


{-| -}
vertSprite =
    [glsl|
            precision mediump float;
            attribute vec2 aP;
            uniform vec4 uT;
            uniform vec2 uP;
            varying vec2 uv;
            vec2 edgeFix = vec2(0.0000001, -0.0000001);
            void main () {
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
            vec2 uv2 = uUV.xy + (fract(uv * uUV2) * uUV.zw);
            vec2 pixel = (floor(uv2 * uImgSize) + 0.5) / uImgSize;
            gl_FragColor = texture2D(uImg, pixel);
            gl_FragColor.a *= uA;
        }
    |]
