module RPG.Component.Util.Matrix exposing
    ( Matrix
    , empty, repeat, initialize, identity, fromList, fromLists
    , height, width, size
    , get
    , map, map2, transpose, dot
    , toList, toLists, pretty
    )

{-| A simple linear algebra library using flat-arrays


# The Matrix type

@docs Matrix


# Creating matrices

@docs empty, repeat, initialize, identity, fromList, fromLists


# Get matrix dimensions

@docs height, width, size


# Working with individual elements

@docs get


# Matrix manipulation

@docs map, map2, transpose, dot


# Matrix representation

@docs toList, toLists, pretty

-}

--https://package.elm-lang.org/packages/Punie/elm-matrix/latest/Matrix

import Array exposing (Array)


{-| Representation of a matrix. You can create matrices of any type
but arithmetic operations in Matrix.Operations requires the matrices
to have numeric types.
-}
type Matrix a
    = Matrix
        { nrows : Int
        , ncols : Int
        , mvect : Array a
        }


{-| Create an empty matrix.

    size empty == ( 0, 0 )

-}
empty : Matrix a
empty =
    Matrix
        { nrows = 0
        , ncols = 0
        , mvect = Array.empty
        }


{-| Create a matrix with a given size, filled with a default value.

    repeat 2 3 0 ~= [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]

-}
repeat : Int -> Int -> a -> Matrix a
repeat nrows ncols value =
    Matrix
        { nrows = nrows
        , ncols = ncols
        , mvect = Array.repeat (nrows * ncols) value
        }


{-| Createsa matrix with a given size, with the elements at index `(i, j)` initialized to the result of `f (i, j)`.

    initialize 3
        3
        (\( i, j ) ->
            if i == j then
                1

            else
                0
        )
        == identity 3

-}
initialize : Int -> Int -> (( Int, Int ) -> a) -> Matrix a
initialize nrows ncols f =
    let
        f_ i =
            f (decode ncols i)

        data =
            Array.initialize (nrows * ncols) f_
    in
    Matrix
        { nrows = nrows
        , ncols = ncols
        , mvect = data
        }


{-| Create the identity matrix of dimension `n`.
-}
identity : Int -> Matrix number
identity n =
    let
        f ( i, j ) =
            if i == j then
                1

            else
                0
    in
    initialize n n f


{-| Return the number of rows in a given matrix.
-}
height : Matrix a -> Int
height (Matrix { nrows }) =
    nrows


{-| Return the number of columns in a given matrix.
-}
width : Matrix a -> Int
width (Matrix { ncols }) =
    ncols


{-| Return the dimensions of a given matrix in the form `(rows, columns)`.
-}
size : Matrix a -> ( Int, Int )
size m =
    ( height m, width m )


{-| Return `Just` the element at the index or `Nothing` if the index is out of bounds.
-}
get : Int -> Int -> Matrix a -> Maybe a
get i j (Matrix { nrows, ncols, mvect }) =
    if i > nrows || j > ncols then
        Nothing

    else
        Array.get (encode ncols ( i, j )) mvect


{-| Create a matrix from a list given the desired size.
If the list has a length inferior to `n * m`, returns `Nothing`.

    fromList 2 2 [ 1, 1, 1, 1, 1 ] == Just <| repeat 2 2 1

    fromList 3 3 [ 0, 1, 2 ] == Nothing

-}
fromList : Int -> Int -> List a -> Maybe (Matrix a)
fromList n m list =
    if List.length list < n * m then
        Nothing

    else
        Just <| initialize n m (\i -> unsafeGetFromList (encode m i) list)


{-| Create a matrix from a list of lists.
If any inner list is shorter than the first, returns `Nothing`.
Otherwise, the length of the first list determines the width of the matrix.

    fromLists [] == Just empty

    fromLists [ [] ] == Just empty

    fromLists [ [ 1, 2, 3 ], [ 1, 2 ] ] == Nothing

    fromLists [ [ 1, 0 ], [ 0, 1 ] ] == Just <| identity 2

-}
fromLists : List (List a) -> Maybe (Matrix a)
fromLists list =
    case list of
        [] ->
            Just empty

        xs :: xss ->
            let
                n =
                    1 + List.length xss

                m =
                    List.length xs
            in
            if m == 0 then
                Just empty

            else
                fromList n m <| List.concat <| xs :: List.map (List.take m) xss


{-| Apply a function on every element of a matrix
-}
map : (a -> b) -> Matrix a -> Matrix b
map f (Matrix m) =
    Matrix
        { nrows = m.nrows
        , ncols = m.ncols
        , mvect = Array.map f m.mvect
        }


{-| Apply a function between pairwise elements of two matrices.
If the matrices are of differents sizes, returns `Nothing`.
-}
map2 : (a -> b -> c) -> Matrix a -> Matrix b -> Maybe (Matrix c)
map2 f m1 m2 =
    if size m1 == size m2 then
        Just <|
            initialize (height m1) (width m1) <|
                \( i, j ) -> f (unsafeGet i j m1) (unsafeGet i j m2)

    else
        Nothing


{-| Return the transpose of a matrix.
-}
transpose : Matrix a -> Matrix a
transpose m =
    initialize (width m) (height m) <| \( i, j ) -> unsafeGet j i m


{-| Perform the standard matrix multiplication.
If the dimensions of the matrices are incompatible, returns `Nothing`.
-}
dot : Matrix number -> Matrix number -> Maybe (Matrix number)
dot m1 m2 =
    let
        n =
            width m1

        m =
            height m2
    in
    if n == m then
        Just <| multStd m1 m2

    else
        Nothing


{-| Convert the matrix to a flat list.

    toList (identity 3) == [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ]

-}
toList : Matrix a -> List a
toList (Matrix { mvect }) =
    Array.toList mvect


{-| Convert the matrix to a list of lists.

    toLists (identity 3) = [ [1,0,0], [0,1,0], [0,0,1] ]

-}
toLists : Matrix a -> List (List a)
toLists m =
    List.range 1 (height m)
        |> List.concatMap
            (\i ->
                [ List.range 1 (width m)
                    |> List.concatMap (\j -> [ unsafeGet i j m ])
                ]
            )


{-| Convert a matrix to a formatted string.

    pretty (identity 3) = """
        [ [ 1, 0, 0 ]
        , [ 0, 1, 0 ]
        , [ 0, 0, 1 ] ]
    """

-}
pretty : (a -> String) -> Matrix a -> String
pretty toString m =
    let
        list =
            toLists m
    in
    "[ " ++ prettyPrint toString list ++ " ]"



{- Utilities -}


encode : Int -> ( Int, Int ) -> Int
encode ncols ( i, j ) =
    (i - 1) * ncols + j - 1


decode : Int -> Int -> ( Int, Int )
decode ncols index =
    let
        q =
            index // ncols

        r =
            remainderBy ncols index
    in
    ( q + 1, r + 1 )


itemAt : Int -> List a -> Maybe a
itemAt index list =
    if index < 0 then
        Nothing

    else
        case list of
            [] ->
                Nothing

            x :: xs ->
                if index == 0 then
                    Just x

                else
                    itemAt (index - 1) xs


unsafeGetFromList : Int -> List a -> a
unsafeGetFromList index list =
    case itemAt index list of
        Just value ->
            value

        Nothing ->
            unsafeGetFromList index list


unsafeGet : Int -> Int -> Matrix a -> a
unsafeGet i j m =
    case get i j m of
        Just v ->
            v

        Nothing ->
            unsafeGet i j m


multStd : Matrix number -> Matrix number -> Matrix number
multStd m1 m2 =
    let
        ( n, m ) =
            size m1

        ( _, m_ ) =
            size m2

        f ( i, j ) =
            List.foldr (+) 0 <| List.map (\k -> unsafeGet i k m1 * unsafeGet k j m2) (List.range 1 m)
    in
    initialize n m_ f


prettyPrint : (a -> String) -> List (List a) -> String
prettyPrint toString list =
    case list of
        [] ->
            ""

        x :: [] ->
            "[ " ++ prettyList toString x ++ " ]"

        x :: xs ->
            "[ " ++ prettyList toString x ++ " ]\n, " ++ prettyPrint toString xs


prettyList : (a -> String) -> List a -> String
prettyList toString list =
    case list of
        [] ->
            ""

        x :: [] ->
            toString x

        x :: xs ->
            toString x ++ ", " ++ prettyList toString xs
