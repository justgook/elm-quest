module WebGL.Ui.Internal exposing (defaultEntitySettings, setAlpha)

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
