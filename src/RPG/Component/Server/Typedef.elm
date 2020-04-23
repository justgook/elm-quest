module RPG.Component.Server.Typedef exposing (t_normal, t_container, t_container_locked, t_door, t_door_locked, t_key, t_light_lit, t_light_out, t_food, t_food_raw, t_armor, t_weapon_mace_smith, t_weapon_mace_sharp, t_weapon_sword, t_weapon_fence, t_weapon_bow, t_wand, t_telepad, t_switch, t_book, t_rune, t_booze, t_potion, t_fire, t_clock, t_trap, t_trap_active, t_musical, t_spell, t_gem, t_water, t_clothing, t_scroll, t_carpentry, t_spawn_char, t_game_piece, t_portculis, t_figurine, t_shrine, t_moongate, t_chair, t_forge, t_ore, t_log, t_tree, t_rock, t_carpentry_chop, t_multi, t_reagent, t_ship, t_ship_plank, t_ship_side, t_ship_side_locked, t_ship_tiller, t_eq_trade_window, t_fish, t_sign_gump, t_stone_guild, t_ingot, t_coin, t_crops, t_drink, t_bed, t_gold, t_map, t_eq_memory_obj, t_eq_horse, t_comm_crystal, t_game_board, t_trash_can, t_cannon_muzzle, t_cannon, t_cannon_ball, t_seed, t_message, t_reagent_raw, t_eq_client_linger, t_snow, t_it_stone, t_unused_93, t_explosion, t_eq_npc_script, t_web, t_grass, t_arock, t_tracker, t_sound, t_stone_town, t_bboard, t_spellbook, t_corpse, t_eq_bank_box, t_deed, t_loom, t_bee_hive, t_archery_butte, t_fruit, t_weapon_xbow, t_keyring, t_table, t_floor, t_roof, t_feather, t_wool, t_fur, t_blood, t_foliage, t_hide, t_cloth_bolt, t_board, t_pitcher, t_pitcher_empty, t_dye_vat, t_dye, t_potion_empty, t_mortar, t_hair_dye, t_sewing_kit, t_tinker_tools, t_wall, t_window, t_cotton, t_bone, t_eq_script, t_ship_hold, t_ship_hold_lock, t_lava, t_shield, t_jewelry, t_dirt, t_script, t_spellbook_necro, t_spellbook_pala, t_spellbook_extra, t_spellbook_bushido, t_spellbook_ninjitsu, t_spellbook_arcanist, t_multi_custom, t_spellbook_mystic, t_hoverover, t_spellbook_bard)

{-| Type definitions that can be attached to items.

@docs t_normal, t_container, t_container_locked, t_door, t_door_locked, t_key, t_light_lit, t_light_out, t_food, t_food_raw, t_armor, t_weapon_mace_smith, t_weapon_mace_sharp, t_weapon_sword, t_weapon_fence, t_weapon_bow, t_wand, t_telepad, t_switch, t_book, t_rune, t_booze, t_potion, t_fire, t_clock, t_trap, t_trap_active, t_musical, t_spell, t_gem, t_water, t_clothing, t_scroll, t_carpentry, t_spawn_char, t_game_piece, t_portculis, t_figurine, t_shrine, t_moongate, t_chair, t_forge, t_ore, t_log, t_tree, t_rock, t_carpentry_chop, t_multi, t_reagent, t_ship, t_ship_plank, t_ship_side, t_ship_side_locked, t_ship_tiller, t_eq_trade_window, t_fish, t_sign_gump, t_stone_guild, t_ingot, t_coin, t_crops, t_drink, t_bed, t_gold, t_map, t_eq_memory_obj, t_eq_horse, t_comm_crystal, t_game_board, t_trash_can, t_cannon_muzzle, t_cannon, t_cannon_ball, t_seed, t_message, t_reagent_raw, t_eq_client_linger, t_snow, t_it_stone, t_unused_93, t_explosion, t_eq_npc_script, t_web, t_grass, t_arock, t_tracker, t_sound, t_stone_town, t_bboard, t_spellbook, t_corpse, t_eq_bank_box, t_deed, t_loom, t_bee_hive, t_archery_butte, t_fruit, t_weapon_xbow, t_keyring, t_table, t_floor, t_roof, t_feather, t_wool, t_fur, t_blood, t_foliage, t_hide, t_cloth_bolt, t_board, t_pitcher, t_pitcher_empty, t_dye_vat, t_dye, t_potion_empty, t_mortar, t_hair_dye, t_sewing_kit, t_tinker_tools, t_wall, t_window, t_cotton, t_bone, t_eq_script, t_ship_hold, t_ship_hold_lock, t_lava, t_shield, t_jewelry, t_dirt, t_script, t_spellbook_necro, t_spellbook_pala, t_spellbook_extra, t_spellbook_bushido, t_spellbook_ninjitsu, t_spellbook_arcanist, t_multi_custom, t_spellbook_mystic, t_hoverover, t_spellbook_bard

-}

--https://wiki.spherecommunity.net/index.php?title=TYPEDEF


type alias Typedef =
    Int


{-| No built-in behavior.
-}
t_normal : Typedef
t_normal =
    0


{-| These types are used for containers. They leverage the following properties:

  - MORE1 = "ID" from the key that can unlock this item (If the - MORE1 of the key matches the - MORE1 of the container then they are - LINKed)
  - MORE2 = The lock complexity (how hard it is to pick the lock)
  - MOREX = The trap type (not used yet?)
  - TDATA2 = The gumpID of the container (this is not an ITEMDEF)
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size
  - LINK = UID of a secondary key?

-}
t_container : Typedef
t_container =
    1


{-| same as t\_container
-}
t_container_locked : Typedef
t_container_locked =
    2


{-| This type is used for both unlocked and locked doors. They leverage the following properties:

  - MORE1 = UID of this door's key (if it has one)
  - TDATA1 = ID for the sound it makes when double clicked

-}
t_door : Typedef
t_door =
    3


{-| same as `t_door`
-}
t_door_locked : Typedef
t_door_locked =
    4


{-| This type is used for keys. It leverages the following properties:

  - MORE1 = "ID" of the item(s) this key can unlock (if the - MORE1 of the key matches the - MORE1 of the container/door then they are - LINKed)
  - LINK = If this is set to the UID of a "multi" object (like a house) the key can open all doors/containers in that multi?

Note: Keys, containers, and doors are interesting. If both a key and a door/container contain the same arbitrary - MORE1 value, the key can be used to lock or unlock the door/container. That action changes the TYPE of the door/container to indicate whether it is locked or not. It also seems like - LINK on the key can be set to the UID of a multi so that it can be used to open all doors/containers inside that multi.

-}
t_key : Typedef
t_key =
    5


{-| This type is used for light sources that can be turned onIT\_S or off. It leverages the following properties:

  - MOREY = Number of charges before the item is consumed
  - MOREZ = Type of light pattern it will cast

-}
t_light_lit : Typedef
t_light_lit =
    6


{-| This type is used for light sources that can be turned on or off. It leverages the following properties:

  - MOREY = Number of charges before the item is consumed
  - MOREZ = Type of light pattern it will cast

-}
t_light_out : Typedef
t_light_out =
    7


{-| This type is used for edible food. It leverages the following properties:

  - MORE2 = The ID of the creature that this came from
  - MOREM = Is the amount (0 to 127) of "food units" that will be gained when the item is used (eaten)
  - MOREZ = Is the poison level of the food

Note: The following properties may also exist depending on your server version:

  - MOREX = The ID of a spell effect that will be gained when eaten
  - MOREY = The strength of the spell effect

-}
t_food : Typedef
t_food =
    8


{-| This type is used for raw food. It leverages the following properties:

  - MORE1 = ID of the item it makes when cooked (the default is i\_unused and if defined, it will override - TDATA1)
  - MORE2 = The ID of the creature that this came from
  - MOREM = Is the amount (0 to 127) of "food units" that will be gained when the item is used (eaten)
  - MOREZ = Is the poison level of the food
  - TDATA1 = The item ID this cooks into

Note: The following properties may also exist depending on your server version:

  - MOREX = The ID of a spell effect that will be gained when eaten
  - MOREY = The strength of the spell effect
  - TDATA2 = The creature ID type that the food came from
  - TDATA3 = The amount of skill required to cook it (did this ever work?)

-}
t_food_raw : Typedef
t_food_raw =
    9


{-| This type is used for armor. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREX = Spell effect when worn (for example, setting - MOREX=1 causes a permanent Clumsy effect)
  - MOREY = There are two possible effects of setting - MOREY:
    If - MOREX is set, then - MOREY is the power/effect of that spell
    If the ATTR includes attr\_magic, then there is an AR bonus (how is this calculated?)

Note: Old versions of sphere stored remaining charges in - MORE2, this is no longer true.

-}
t_armor : Typedef
t_armor =
    10


{-| This type is used for macefighting weapons that can also be used by blacksmiths to forge items. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREY = Attack bonus (percentage), but only if ATTR & attr\_magic

The following overrides can be set on a per item basis:

TAG.OVERRIDE.DAMAGETYPE = can be used on a per item basis to override the types of damage this weapon does
TAG.OVERRIDE.SOUND\_HIT = can be used on a per item basis to override the sound this weapon makes when it hits
TAG.OVERRIDE.SOUND\_MISS = can be used on a per item basis to override the sound this weapon makes when it misses

-}
t_weapon_mace_smith : Typedef
t_weapon_mace_smith =
    11


{-| This type is used for macefighting weapons that have sharp cutting edges. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREY = Attack bonus (percentage), but only if ATTR & attr\_magic

The following overrides can be set on a per item basis:

TAG.OVERRIDE.DAMAGETYPE = can be used on a per item basis to override the types of damage this weapon does
TAG.OVERRIDE.SOUND\_HIT = can be used on a per item basis to override the sound this weapon makes when it hits
TAG.OVERRIDE.SOUND\_MISS = can be used on a per item basis to override the sound this weapon makes when it misses

-}
t_weapon_mace_sharp : Typedef
t_weapon_mace_sharp =
    12


{-| This type is used for swordsmanship weapons. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREY = Attack bonus (percentage), but only if ATTR & attr\_magic

The following overrides can be set on a per item basis:

TAG.OVERRIDE.DAMAGETYPE = can be used on a per item basis to override the types of damage this weapon does
TAG.OVERRIDE.SOUND\_HIT = can be used on a per item basis to override the sound this weapon makes when it hits
TAG.OVERRIDE.SOUND\_MISS = can be used on a per item basis to override the sound this weapon makes when it misses

-}
t_weapon_sword : Typedef
t_weapon_sword =
    13


{-| This type is used for fencing weapons. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREY = Attack bonus (percentage), but only if ATTR & attr\_magic

The following overrides can be set on a per item basis:

TAG.OVERRIDE.DAMAGETYPE = can be used on a per item basis to override the types of damage this weapon does
TAG.OVERRIDE.SOUND\_HIT = can be used on a per item basis to override the sound this weapon makes when it hits
TAG.OVERRIDE.SOUND\_MISS = can be used on a per item basis to override the sound this weapon makes when it misses

-}
t_weapon_fence : Typedef
t_weapon_fence =
    14


{-| This type is used for archery weapons (bow or crossbow). It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREY = Attack bonus (percentage), but only if ATTR & attr\_magic
  - TDATA1 = The sound effect the weapon makes when it shoots
  - TDATA2 = The required strength to wield the weapon
  - TDATA3 = ID of arrow item that will be fired (and must therefore be on the player's person)
  - TDATA4 = ID of the arrow animation (for bows it is usually i\_arrow\_x, for crossbows, i\_xbow\_x)

The following overrides can be set on a per item basis:

TAG.OVERRIDE.DAMAGETYPE = to override the types of damage this weapon does
TAG.OVERRIDE.SOUND\_HIT = to override the sound this weapon makes when it hits
TAG.OVERRIDE.SOUND\_MISS = to override the sound this weapon makes when it misses
AMMOANIMRENDER = to override the rendermode of the ANIM this item uses (yes, no TAGs)
AMMOTYPE = to override the type of ammo ( - TDATA3) this item uses (yes, no TAGs)
AMMOANIM = to override the ammo animation ( - TDATA4) this item uses (yes, no TAGs)
AMMOANIMHUE = to override the color of the ammo animation this item uses (yes, no TAGs)

-}
t_weapon_bow : Typedef
t_weapon_bow =
    15


{-| This type is used for magic wands. It leverages the following properties:

  - MORE1L = the current amount of hitpoints the item has
  - MORE1H = the maximum hitpoints for the item
  - MORE2 = the number of remaining charges (if magical)
  - MOREX = the spell type (if magical)
  - MOREY = the spell strength (0-1000)
  - MOREZ = the poison skill applied (0-100)
  - TDATA2 = Required Strength to equip the wand
  - TDATA3 = ID of the light pattern
  - TDATA4 = A flag to indicate what happens when the light burns out (0=nothing, 1=delete the object).

-}
t_wand : Typedef
t_wand =
    16


{-| This type is used for teleport pads. It leverages the following properties:

  - MOREP = Coordinates of the point to which you will teleport when you step on the item
  - MORE1 = If set to 1, the teleport pad will only work for players (and their pets)
  - MORE2 = If set to 1, the teleport animation and sound will not be shown to anyone witnessing the teleport

-}
t_telepad : Typedef
t_telepad =
    17


{-| This type is used for switches. The way these things work is, when used, they trigger @DCLICK on the - LINK object. It leverages the following properties:

  - LINK = UID of item to trigger
  - MORE1 = The item ID of the next state of the switch
  - MOREX = A flag to indicate if this is activated by stepping on it

-}
t_switch : Typedef
t_switch =
    18


{-| This type is used for books of static or dynamic text. It leverages the following properties:

  - MORE1L = This can be set to an ID of a book (some default book text is included in the sphere\_books.scp file)
  - MORE1H = Some flags that determine book behavior:
    0c00: Scripted book
    0800: Editable book
    08000: ? time stamp ?
    AUTHOR = The ID of the character that wrote the book
    BODY.# = The text for each page of the book (starting with page 0)

Note: we need more information on those flags...

-}
t_book : Typedef
t_book =
    19


{-| This type is used for recall runes. It leverages the following properties:

  - MORE1 = The number of uses left before it wears out
  - MOREP = The coordinates of the marked location

-}
t_rune : Typedef
t_rune =
    20


{-| This type is used for alcohol (it causes a drunk effect when double clicked.) It leverages the following properties:

  - TDATA1 = A flag that indicates whether the container is empty or not.

-}
t_booze : Typedef
t_booze =
    21


{-| This type is used for potions. It leverages the following properties:

  - MORE1 = The potion spell effect that will result when the potion is double clicked
  - MORE2 = The strength of the potion (This has a different effect defending on the spell, usually between 0 and 1000)
  - MOREX = The countdown to explosion (for purple potions)
  - TDATA1 = A flag that indicates whether the container is empty or not

-}
t_potion : Typedef
t_potion =
    22


{-| This type is used for fires (and ovens?). These items can be used to cook food, and they can burn you if stepped on. It leverages the following properties:
TIMER = time until it decays?

  - MORE1 (or - MORE2?) = Amount of damage it will cause when stepped on or dclicked
  - MOREZ = Type of light pattern it will cast

-}
t_fire : Typedef
t_fire =
    23


{-| This type is used to tell time (game time, not real time) when double clicked. The result comes out something like "half past eleven o'clock at night". From what I can tell there are no MORE or TDATA modifiers that affect the result.
-}
t_clock : Typedef
t_clock =
    24


{-| These types are used for traps that are triggered when walked on. They leverage the following properties:

  - MORE1 = ID of the animation
  - MORE2 = The damage the trap will cause
  - MOREX = The length of time the animation will run
  - MOREY = The length of time the activated trap will idle until reset
  - MOREZ = A flag that indicates if the trap must idle before changing from active to inactive.

-}
t_trap : Typedef
t_trap =
    25


{-| -}
t_trap_active : Typedef
t_trap_active =
    26


{-| This type is used for musical instruments. It leverages the following properties:

  - TDATA1 = The sound ID to be played if successful
  - TDATA2 = The sound ID to be played if not successful

-}
t_musical : Typedef
t_musical =
    27


{-| This type is used for magic spell effects. It leverages the following properties:

  - MORE1L = The polymorph effect on STR
  - MORE1H = The polymorph effect on DEX
  - MORE2 = The number of charges left
  - MOREX = The spell effect that will result when the item is stepped on
  - MOREY = The strength of the spell (This has a different effect defending on the spell, usually between 0 and 1000)
  - MOREZ = Type of light pattern it will cast

-}
t_spell : Typedef
t_spell =
    28


{-| This type is used for gems, and from what I can tell there is no built-in behavior for it.
-}
t_gem : Typedef
t_gem =
    29


{-| This type is used for water, which means it can be fished in or used to clean used bandages.

  - MORE1 = The regiontype ID that determines what sorts of resources (fish etc) that it can produce.

-}
t_water : Typedef
t_water =
    30


{-| This type is used for all cloth based equip-able items. It is essentially identical to t\_armor and t\_armor\_leather. It leverages the following properties:

  - MORE1L = Max hitpoints
  - MORE1H = Current hitpoints
  - MOREX = Spell effect when worn (for example, setting - MOREX=1 causes a permanent Clumsy effect)
  - MOREY = There are two possible effects of setting - MOREY:
    If - MOREX is set, then - MOREY is the power/effect of that spell
    If the ATTR includes attr\_magic, then there is an AR bonus (how is this calculated?)

Note: Old versions of sphere stored remaining charges in - MORE2, this is no longer true.

-}
t_clothing : Typedef
t_clothing =
    31


{-| This type is used for scrolls. It leverages the following properties:

  - MOREX = ID of the spell to cast when double-clicked
  - MOREY = Power of the spell (equivalent to the EFFECT setting of the spell itself?)

-}
t_scroll : Typedef
t_scroll =
    32


{-| This type is used by carpenters to craft items, and from what I can tell there is no built-in behavior for it.
-}
t_carpentry : Typedef
t_carpentry =
    33


{-| This type is used to spawn NPCs. Once it spawns its first creature, it will turn red and change its appearance to the ICON of the creature (or appear as a wisp if the spawn is set to use a template.) It leverages the following properties:
AMOUNT = The maximum amount of NPCs the spawner should create

  - MORE1 = The creature ID or spawn template ID for what you want to spawn
  - MORE2 = The current number of creatures spawned from this point
  - MOREX = The minimum time between spawns (in minutes)
  - MOREY = The maximum time between spawns (in minutes)
  - MOREZ = The maximum distance away from the spawn to create the spawned NPC (this is also the maximum wander distance for the NPC)

Note: The spawn is considered active if the TIMER has a positive value, and when the timer reaches zero, it is automatically restarted using a random number between - MOREX and - MOREY.

-}
t_spawn_char : Typedef
t_spawn_char =
    34


{-| This type is used for game board pieces (checkers, chess, etc). They cannot be removed from the game, and they have no tile image outside of the game board gump. It leverages the following properties:

  - TDATA1 = The starting x position for this piece
  - TDATA2 = The starting y position for this piece

-}
t_game_piece : Typedef
t_game_piece =
    35


{-| This type is used for portcullis doors that raise and lower when double clicked. It leverages the following properties:

  - MORE1 = The z height at the lowest setting
  - MORE2 = The z height at the highest setting

-}
t_portculis : Typedef
t_portculis =
    36


{-| This type is used for shrunk NPCs (essentially magic figurines), that turn into a "pet" creature when double clicked. It leverages the following properties:

  - MORE1 = The creature ID that will spawn when the item is double clicked.
  - MORE2 = The UID of the off-line creature (in "stable master" inventory)
  - TDATA2 = The required strength to mount the creature (presumably only if it is possible to mount it)
  - TDATA3 = The base creature ID.

-}
t_figurine : Typedef
t_figurine =
    37


{-| This type is used for shrines. They will resurrect a ghost when double-clicked by a ghost.
-}
t_shrine : Typedef
t_shrine =
    38


{-| This type is used for moongates. When stepped on they teleport the player to another location. It leverages the following properties:

  - MOREP = The coordinates that the moongate leads to
  - MORE1 = If set to 1, the smoke and sound is supressed
  - MORE2 = If set to 1, NPCs (and pets?) cannot use it

-}
t_moongate : Typedef
t_moongate =
    39


{-| This type is used for any sort of a chair item and it's only purpose is to trigger a sitting animation.
-}
t_chair : Typedef
t_chair =
    40


{-| This type is used by blacksmiths to smelt ore....
-}
t_forge : Typedef
t_forge =
    41


{-| This type is harvested by miners, and converted by blacksmiths (using a forge) into something else. It leverages the following properties:

  - TDATA1 = ID of item created when the ore is smelted (usually ingots)

-}
t_ore : Typedef
t_ore =
    42


{-| This type is a raw material resource usually harvested from trees.
-}
t_log : Typedef
t_log =
    43


{-| This type is chopped by lumberjacks to get logs. It leverages the following properties:

  - MORE1 = The regiontype ID that determines what sorts of resources (fish etc) that it can produce.
  - FRUIT = ID of item gathered if double-clicked (usually logs)

-}
t_tree : Typedef
t_tree =
    44


{-| This type can be mined for ore.

  - MORE1 = The regiontype ID that determines what sorts of resources (fish etc) that it can produce.

-}
t_rock : Typedef
t_rock =
    45


{-| A carpentry tool that can be used to craft carpentry objects as well as used to "chop" trees (like a saw?)
-}
t_carpentry_chop : Typedef
t_carpentry_chop =
    46


{-| Multi part object like house or ship.

  - MORE1 is the UID of the player that created/owns the multi

-}
t_multi : Typedef
t_multi =
    47


{-| Alchemy when clicked ?
-}
t_reagent : Typedef
t_reagent =
    48


{-| This is a ship multi.

  - MORE1 is the UID of the player that created/owns the multi
  - MORE2 contains the speed, anchor flag, direction of movement, and facing direction in each byte respectively

-}
t_ship : Typedef
t_ship =
    49


{-| Ship plank for players to get on a boat.

  - TDATA1 = is the itemID of the next open/closed state.
  - MORE1 = the lock code. normally this is the same as the uid (magic lock=non UID)
  - MORE2= 0-1000 = How hard to pick or magic unlock. (conflict with door ?)
  - MOREX = type to become (IT\_SHIP\_SIDE or IT\_SHIP\_SIDE\_LOCKED)

-}
t_ship_plank : Typedef
t_ship_plank =
    50


{-| Should extend to make a plank - TDATA1 is the itemID of the next open/closed state.

  - MORE1 = the lock code. normally this is the same as the uid (magic lock=non UID)
  - MORE2= 0-1000 = How hard to pick or magic unlock. (conflict with door ?)

-}
t_ship_side : Typedef
t_ship_side =
    51


{-|

  - TDATA1 is the itemID of the next open/closed state.
      - MORE1 = the lock code. normally this is the same as the uid (magic lock=non UID)
      - MORE2= 0-1000 = How hard to pick or magic unlock. (conflict with door ?)

-}
t_ship_side_locked : Typedef
t_ship_side_locked =
    52


{-| Tiller man on the ship.

  - MORE1 = the lock code. Normally this is the UID, except if uid - LINK is set.
  - LINK = If this is set to the UID of a "multi" object (like a house) the key can open all doors/containers in that multi?

Note: Keys, containers, and doors are interesting. If both a key and a door/container contain the same arbitrary - MORE1 value, the key can be used to lock or unlock the door/container. That action changes the TYPE of the door/container to indicate whether it is locked or not. It also seems like - LINK on the key can be set to the UID of a multi so that it can be used to open all doors/containers inside that multi.

-}
t_ship_tiller : Typedef
t_ship_tiller =
    53


{-| Container for the trade window.
-}
t_eq_trade_window : Typedef
t_eq_trade_window =
    54


{-| Fish can be cut up. Yields 4 \* <Amount> when a bladed object is used on it.
-}
t_fish : Typedef
t_fish =
    55


{-| This type is used for simple signs (and things like grave stones). It leverages the following properties:

  - TDATA2 = The gumpID
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size
  - MORE1 = the lock code. Normally this is the UID, except if uid - LINK is set.
  - LINK = If this is set to the UID of a "multi" object (like a house) the key can open all doors/containers in that multi?

Note: Keys, containers, and doors are interesting. If both a key and a door/container contain the same arbitrary - MORE1 value, the key can be used to lock or unlock the door/container. That action changes the TYPE of the door/container to indicate whether it is locked or not. It also seems like - LINK on the key can be set to the UID of a multi so that it can be used to open all doors/containers inside that multi.

-}
t_sign_gump : Typedef
t_sign_gump =
    56


{-| This type is used for guild stones. It leverages the following properties:

  - MORE1 = The alignment of the guild (chaos, neutral, order)
  - MORE2 = The amount of gold in the guild account

-}
t_stone_guild : Typedef
t_stone_guild =
    57


{-| = active anium that will recycle when done.
-}
t_anim_active =
    58


{-| = sand on the beach
-}
t_sand =
    59


{-| = bolt or folded cloth
-}
t_cloth =
    60


{-| -}
t_hair =
    61


{-| = just for grouping purposes.
-}
t_beard =
    62


{-| This type is used for ingots (when a blacksmith smelts ore, it turns into ingots. It leverages the following properties:

  - TDATA1 = The skill required to smelt this
  - TDATA2 = The skill required to get the maximum yield when smelting

-}
t_ingot : Typedef
t_ingot =
    63


{-| This types is used for coins, gold or otherwise.
-}
t_coin : Typedef
t_coin =
    64


{-| This type is used to grow plants that likely bear - FRUIT. Double clicking a t\_crop item will harvest the - FRUIT if it is ripe. It leverages the following properties:

  - MORE1 = Time in seconds before this item will grow to the next stage (this overrides the default server defined number)
  - TDATA1 = Is the ID of the first stage of the crop (the sprout), it is the ID that the crop will be reset to regrow from (0=nothing, which means this plant will not regrow once harvested)
  - TDATA2 = Is the ID of the next stage of the crop (or zero if this is the final mature crop which will bear the - FRUIT)
  - TDATA3 = Is the ID of the - FRUIT that this plant will grow and should only be set on the ripe plant (0 means the plant is not mature)

Note This type has unusual TIMER behavior in that regardless of the ATTR flags, the timer will restart when it reaches zero.

-}
t_crops : Typedef
t_crops =
    65


{-| This type is used for non-alcoholic drinks. It leverages the following properties:

  - TDATA1 = A flag that indicates whether the container is empty or not.

Note: There is an INI flag OF\_DrinkIsFood (0x10000) that, if set, will increase FOOD level when the drink is consumed (like T\_FOOD does)

-}
t_drink : Typedef
t_drink =
    66


{-| for repair.
-}
t_anvil =
    67


{-| this portcullis must be triggered.
-}
t_port_locked =
    68


{-| spawn other items.
-}
t_spawn_item =
    69


{-| big telescope pic.
-}
t_telescope =
    70


{-| This type is used to indicate the item is a bed. I am not sure how it is used exactly, but it leverages the following properties:

  - TDATA1 = The direction it occupies

-}
t_bed : Typedef
t_bed =
    71


{-| This type is used to indicate the object is a gold coin and can be used to purchase stuff.
-}
t_gold : Typedef
t_gold =
    72


{-| This type is used for cartography maps. It has the following properties:

  - MORE1L = The top coordinate
  - MORE1H = The left coordinate
  - MORE2L = The bottom coordinate
  - MORE2H = The right coordinate
  - MOREZ = A flag that indicates whether the map has pins or not
  - MOREX and - MOREY = The coordinates of the pin (I think)

-}
t_map : Typedef
t_map =
    73


{-| This type is used for character memories, and it really depends on the type of memory to know what each property really means, but here is a relatively good guide:

  - MORE1L = The action type this is a memory for
  - MORE1H = The skill involved
  - MORE2 = The start time of the memory
  - MOREP = The map coordinates at which the memory occurred.

-}
t_eq_memory_obj : Typedef
t_eq_memory_obj =
    74


{-| staff type of mace. or just other type of mace.
-}
t_weapon_mace_staff =
    75


{-| This type is used for equipped horse object. Essentially it represents a riding horse to the client. It leverages the following properties:

  - MORE1 = The creature ID
  - MORE2 = The UID of the offline creature (in "stable master" inventory)
  - TDATA2 = The required strength to mount it
  - TDATA3 = The base creature ID

-}
t_eq_horse : Typedef
t_eq_horse =
    76


{-| This type is used for communication crystals.
-}
t_comm_crystal : Typedef
t_comm_crystal =
    77


{-| This type is used as a container for game pieces (t\_game\_piece). It leverages the following properties:

  - MORE1 = The type of pieces to use (0=chess, 1=checkers, 2=none... presumably this is hard-coded)
  - TDATA2 = The gumpID of the container (this is not an ITEMDEF)
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

-}
t_game_board : Typedef
t_game_board =
    78


{-| This type is used as a trash can container, and it deletes any object placed into it. It leverages the following properties:

  - TDATA2 = The gumpID of the container (this is not an ITEMDEF)
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

-}
t_trash_can : Typedef
t_trash_can =
    79


{-| This type is used for the business end of the cannon. It leverages the following properties:

  - MORE2 = A mask of what is currently loaded in it. (0 = none, 1=powder, 2=shot)

-}
t_cannon_muzzle : Typedef
t_cannon_muzzle =
    80


{-| This type is used for the cannon control.
-}
t_cannon : Typedef
t_cannon =
    81


{-| This is ammo for a t\_cannon.
-}
t_cannon_ball : Typedef
t_cannon_ball =
    82


{-| non metallic armor (t\_clothing)
-}
t_armor_leather : Typedef
t_armor_leather =
    83


{-| This type is used for seeds. A seed can be created by using a dagger on a - FRUIT (assuming the - FRUIT is setup to have a seed.) A seed can be planted by double clicking it and targeting the ground (specifically t\_dirt items). It leverages the following properties:

  - TDATA1 = The ID of a t\_crop item that will grow the - FRUIT that this seed comes from. 0 is Nothing.
  - TDATA2 = The art asset to use as the seed art asset. A copper coin is default.

-}
t_seed : Typedef
t_seed =
    84


{-| never used
-}
t_junk =
    85


{-| Has no internal use.
-}
t_crystal_ball =
    86


{-| swamp (smelly)
-}
t_swamp =
    87


{-| This type is used for bulletin board messages. It leverages the following properties:

  - TDATA2 = The gumpID
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

-}
t_message : Typedef
t_message =
    88


{-| Freshly grown reagents...not processed yet. A seed can be created by using a dagger on a raw reagent (assuming the raw reagent is setup to have a seed.) A seed can be planted by double clicking it and targeting the ground (specifically t\_dirt items). It leverages the following properties:

  - TDATA1 = The ID of a t\_crop item that will grow the - FRUIT that this seed comes from. 0 is Nothing.
  - TDATA2 = The art asset to use as the seed art asset. A copper coin is default.

-}
t_reagent_raw : Typedef
t_reagent_raw =
    89


{-| Change player to npc for a while.
-}
t_eq_client_linger : Typedef
t_eq_client_linger =
    90


{-| Snow
-}
t_snow : Typedef
t_snow =
    91


{-| This type is an "item stone" that is used to generate items when the object is double clicked. It has the following properties:

  - MORE1 = The item or template ID to generate
  - MORE2 = The price (or Plotflags to set?)
  - MOREX = The regen time (0 = instant)
  - MOREY = The total amount to deliver (0 = infinite, 0xFFFF = none left)

-}
t_it_stone : Typedef
t_it_stone =
    92


{-| This has no use.
-}
t_unused_93 : Typedef
t_unused_93 =
    93


{-| This type is used for explosion animations. It leverages the following properties:

  - MOREX = The damage that the explosion will cause
  - MOREY = The type of damage (fire, magic, etc)
  - MOREZ = The distance range for the damage

-}
t_explosion : Typedef
t_explosion =
    94


{-| This type is used to script NPC actions (in the form of a book). The sphere\_defs.scp file says "get rid of this in favor of waiting on m\_events" but it may still exist... if so, it leverages the following properties:

  - MORE1 = The same as for other books
  - MORE2L = The current script page
  - MORE2H = The current offset
  - MOREZ = The priority for this script (as a percent, this is the chance they want to "do" this task)

-}
t_eq_npc_script : Typedef
t_eq_npc_script =
    95


{-| Walk on this and transform into some other object. - MORE1 is the amount of hits the web can take.
-}
t_web : Typedef
t_web =
    96


{-| Can be eaten by grazing animals

  - MORE1 = The regiontype ID that determines what sorts of resources (fish etc) that it can produce.

-}
t_grass : Typedef
t_grass =
    97


{-| A rock or boulder. can be thrown by giants.
-}
t_arock : Typedef
t_arock =
    98


{-| Points to a - LINKed object.
-}
t_tracker : Typedef
t_tracker =
    99


{-| This type is used to play sounds. It uses the following properties:

  - MORE1 = The sound ID
  - MORE2 = A flag to indicate repetition

-}
t_sound : Typedef
t_sound =
    100


{-| This type is used for town stones. It leverages the following properties:

  - MORE1 = The alignment of the town (chaos, neutral, order)
  - MORE2 = The amount of gold in the town bank account

-}
t_stone_town : Typedef
t_stone_town =
    101


t_weapon_mace_crook : Typedef
t_weapon_mace_crook =
    102


t_weapon_mace_pick : Typedef
t_weapon_mace_pick =
    103


{-| leather or skins of some sort.(not wearable)
-}
t_leather : Typedef
t_leather =
    104


{-| some other part of a ship.
-}
t_ship_other : Typedef
t_ship_other =
    105


{-| This type is a bulleting board container that holds t\_message items. It leverages the following properties:

  - TDATA2 = The gumpID of the container
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

-}
t_bboard : Typedef
t_bboard =
    106


{-| This type is used for the Magery spellbook. It leverages the following properties:

  - MORE1 = A bit mask of available spells in circles 0-4, so to add all those spells: set - MORE1=0fffffff
  - MORE2 = A bit mask of available spells in circles 5-8, so to add all those spells: set - MORE2=0fffffff

Note: In older sphere versions, - MOREX, - MOREY, and - MOREZ could be set to add additional spells (necro, etc), but recently these concepts may have been removed... same with these TDATA settings:

  - TDATA2 = Required Strength to equip the book
  - TDATA3 = Type of light pattern it will cast
  - TDATA4 = A flag to indicate what happens when the light burns out (0=nothing, 1=delete the object)

-}
t_spellbook : Typedef
t_spellbook =
    107


{-| This type is a container used for all dead corpses. It leverages the following properties:

  - MORE1 = The time of death TIMESTAMP seems to hold the time of death.
  - MORE1 = Corpse is already carved? (0=not carved, 1=carved)
  - MORE2 = The UID of the individual character that landed the killing blow
  - MOREX & - MOREY = Combined, these make up a single DWORD which specifies what type of creature this was
  - MOREZ = The direction it is facing
  - TDATA2 = The gumpID of the container
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

There are two special TAGs for corpses:

TAG.BLOOD = This is the number of times you can carve the corpse and cause blood to come out (default 5)
TAG.MAXBLOOD = Not certain about this one, but it is likely related... perhaps it is set on the CHARDEF?

-}
t_corpse : Typedef
t_corpse =
    108


{-| track a id or type of item.
-}
t_track_item =
    109


{-| track a char or range of char id's
-}
t_track_char =
    110


{-| -}
t_weapon_arrow =
    111


{-| -}
t_weapon_bolt =
    112


{-| an equipped vendor box
-}
t_eq_vendor_box =
    113


{-| This type is a container that is used for the character bank. It leverages the following properties:

  - MORE1 = The amount of gold in the account (is this still true?)
  - MORE2 = The amount to restock to (for NPCs vendors who can buy stuff from players?)
  - MOREP = The location in the world (x, y, and z) where the bank box was opened
  - TDATA2 = The gumpID for the bank box container
  - TDATA3 = The minimum gump size
  - TDATA4 = the maximum gump size

-}
t_eq_bank_box : Typedef
t_eq_bank_box =
    114


{-| This type is used to create something else when double clicked. It is perhaps the best solution for a player to place a multi part item like a house. When double clicked, it will prompt for a target location. It leverages the following properties:

  - MORE1 = The ID of the item that will be created at the target location
  - MORE2 = The previous key ID (ideally this is set when a house or ship are re-deeded so that all the existing keys will still work)

-}
t_deed : Typedef
t_deed =
    115


{-| This type of device is used by weavers who turn wool or thread into bolts of cloth. It leverages the following properties:

  - MORE1 = The ID of the currently loaded resource (wool or cotton/flax) that is being woven
  - MORE2 = The amount of resources currently in the loom

-}
t_loom : Typedef
t_loom =
    116


{-| This type is used for beehives. It leverages the following properties:

  - MORE1 = The amount of honey which has accumulated in the hive

-}
t_bee_hive : Typedef
t_bee_hive =
    117


{-| This type is used for practice archery targets. When double clicked, the target will first check if you have an archery weapon equipped and if so, it will return some ammo. It leverages the following properties:

  - MORE1 = The ID for the type of ammo currently stuck in the target
  - MORE2 = The amount of items stuck in the target

-}
t_archery_butte : Typedef
t_archery_butte =
    118


{-| my murder count flag. - MORE1 contains the amount of time before it expires.
-}
t_eq_murder_count =
    119


{-| we are stuck in a web
-}
t_eq_stuck =
    120


{-| a safe trap.
-}
t_trap_inactive =
    121


{-| -}
t_unused_122 =
    122


{-| can be used for healing.
-}
t_bandage =
    123


{-| this is a fire but a small one.
-}
t_campfire =
    124


{-| -}
t_map_blank =
    125


{-| -}
t_spy_glass =
    126


{-| -}
t_sextant =
    127


{-| -}
t_scroll_blank =
    128


{-| This type is used for - FRUIT. When double clicked, - FRUIT will be eaten. - FRUIT can be grown from crops (t\_crop). It leverages the following properties:

  - TDATA1 = The ID of a t\_crop item that this - FRUIT comes from (If not set, this - FRUIT may not have a seed, use zero to be certain)
  - MOREM = Is the amount (0 to 127) of "food units" that will be gained when the item is used (eaten)
  - MOREZ = Is the poison level of the - FRUIT

-}
t_fruit : Typedef
t_fruit =
    129


{-| water that will not contain fish. (for washing or drinking) - TDATA1 is a flag that indicates whether the container is empty or not
-}
t_water_wash =
    130


{-| not the same as a sword. but uses swordsmanship skill
-}
t_weapon_axe =
    131


{-| This type is used for crossbow weapons. It is essentially identical to t\_weapon\_bow.
-}
t_weapon_xbow : Typedef
t_weapon_xbow =
    132


{-| -}
t_spellicon =
    133


{-| -}
t_door_open =
    134


{-| just a meaty part of a corpse. (uncooked meat)
-}
t_meat_raw =
    135


{-| -}
t_garbage =
    136


{-| This type is a container used to store keys. It leverages the following properties:

  - TDATA2 = The gumpID
  - TDATA3 = The minimum gump size
  - TDATA4 = The maximum gump size

-}
t_keyring : Typedef
t_keyring =
    137


{-| doesn't really do anything.
-}
t_table : Typedef
t_table =
    138


{-| -}
t_floor : Typedef
t_floor =
    139


{-| -}
t_roof : Typedef
t_roof =
    140


{-| a birds feather
-}
t_feather : Typedef
t_feather =
    141


{-| wool cut from a sheep.
-}
t_wool : Typedef
t_wool =
    142


{-| -}
t_fur : Typedef
t_fur =
    143


{-| blood of some creature
-}
t_blood : Typedef
t_blood =
    144


{-| This type is very similar to t\_crops, the difference being the foliage does not disappear when the - FRUIT is harvested. It leverages the following properties:

  - MORE1 = Time in seconds before this item will grow to the next stage (this overrides the default server defined number)
  - TDATA1 = Is the ID of the first stage of the crop (the sprout)
  - TDATA2 = Is the ID of the next stage of the crop (or zero if this is the final mature crop which will bear the - FRUIT)
  - TDATA3 = Is the ID of the - FRUIT that this plant will grow and should only be set on the ripe plant

Note This type has unusual TIMER behavior in that regardless of the ATTR flags, the timer will restart when it reaches zero.

-}
t_foliage : Typedef
t_foliage =
    145


{-| -}
t_grain =
    146


{-| -}
t_scissors =
    147


{-| -}
t_thread =
    148


{-| -}
t_yarn =
    149


{-| -}
t_spinwheel =
    150


{-| can't be used for healing.
-}
t_bandage_blood =
    151


{-| -}
t_fish_pole =
    152


{-| bolt or arrow.
-}
t_shaft =
    153


{-| -}
t_lockpick =
    154


{-| -}
t_kindling =
    155


{-| -}
t_train_dummy =
    156


{-| -}
t_train_pickpocket =
    157


{-| -}
t_bedroll =
    158


{-| -}
t_bellows =
    159


{-| Made into leather.

  - TDATA1 = Hold ID or DEFNAME of custom cut leather (or any item).

-}
t_hide : Typedef
t_hide =
    160


{-| A bolt of cloth.
-}
t_cloth_bolt : Typedef
t_cloth_bolt =
    161


{-| Logs are plained into decent lumber
-}
t_board : Typedef
t_board =
    162


{-| A pitcher holding a liquid of some kind.

  - TDATA1 is a flag that indicates whether the container is empty or not.

-}
t_pitcher : Typedef
t_pitcher =
    163


{-| An empty pitcher that can or did hold a liquid.

  - TDATA1 is a flag that indicates whether the container is empty or not.

-}
t_pitcher_empty : Typedef
t_pitcher_empty =
    164


{-| For dyeing items with.
-}
t_dye_vat : Typedef
t_dye_vat =
    165


{-| Dyes to set colors on a t\_dye\_vat
-}
t_dye : Typedef
t_dye =
    166


{-| Empty bottle.
-}
t_potion_empty : Typedef
t_potion_empty =
    167


{-| Alchemists mortar and pestle.
-}
t_mortar : Typedef
t_mortar =
    168


{-| Hair dye.
-}
t_hair_dye : Typedef
t_hair_dye =
    169


{-| Tailoring sewing kit.
-}
t_sewing_kit : Typedef
t_sewing_kit =
    170


{-| Tinker's tools.
-}
t_tinker_tools : Typedef
t_tinker_tools =
    171


{-| Wall of a structure.
-}
t_wall : Typedef
t_wall =
    172


{-| Window for a structure. - MOREZ is the light pattern
-}
t_window : Typedef
t_window =
    173


{-| Cotton from the plant
-}
t_cotton : Typedef
t_cotton =
    174


{-| A bone from a corpse.
-}
t_bone : Typedef
t_bone =
    175


{-| This type can have tags and can be equipped. Possibly used for memory objects that leverage @Equip and @UnEquip triggers.
-}
t_eq_script : Typedef
t_eq_script =
    176


{-| A ships hold.

  - TDATA2 is the gumpID
  - TDATA3 is the minimum gump size
  - TDATA4 is the maximum gump size
  - MORE1 = the lock code. normally this is the same as the uid (magic lock=non UID)
  - MORE2= 0-1000 = How hard to pick or magic unlock. (conflict with door ?)

-}
t_ship_hold : Typedef
t_ship_hold =
    177


{-| A locked ship's hold.

  - MORE1 = the lock code. normally this is the same as the uid (magic lock=non UID)
  - MORE2= 0-1000 = How hard to pick or magic unlock. (conflict with door ?)

-}
t_ship_hold_lock : Typedef
t_ship_hold_lock =
    178


{-| -}
t_lava : Typedef
t_lava =
    179


{-| This type is used to indicate the object is an equipable shield. It has the following properties:

  - MORE1L = The current amount of hitpoints the item has
  - MORE1H = The maximum hitpoints for the item
  - MORE2 = The number of remaining charges (if magical)
  - MOREX = The spell type (if magical)
  - MOREY = The spell strength (0-1000)

-}
t_shield : Typedef
t_shield =
    180


{-| This type is used for equpable jewelry. It leverages the following properties:

  - MORE1L = The current amount of hitpoints the item has
  - MORE1H = The maximum hitpoints for the item
  - MORE2 = The number of remaining charges (if magical)
  - MOREX = The spell type (if magical)
  - MOREY = The spell strength (0-1000)
  - TDATA2 = Required Strength to equip the item
  - TDATA3 = Light pattern
  - TDATA4 = A flag to indicate what happens when the light burns out (0=nothing, 1=delete the object)

-}
t_jewelry : Typedef
t_jewelry =
    181


{-| This type is used to represent a patch of dirt where something can be planted.
-}
t_dirt : Typedef
t_dirt =
    182


{-| This type can have tags, but can NOT be equipped.
-}
t_script : Typedef
t_script =
    183


{-| AOS Necromancy spellbook (should have - MOREZ=100 by default)
-}
t_spellbook_necro : Typedef
t_spellbook_necro =
    184


{-| AOS Paladin spellbook (should have - MOREZ=200 by default)
-}
t_spellbook_pala : Typedef
t_spellbook_pala =
    185


{-| some spellbook for script purposes ( - MOREZ=basic offset)
-}
t_spellbook_extra : Typedef
t_spellbook_extra =
    186


{-| SE Bushido spellbook (should have - MOREZ=400 by default)
-}
t_spellbook_bushido : Typedef
t_spellbook_bushido =
    187


{-| SE Ninjitsu spellbook (should have - MOREZ=500 by default)
-}
t_spellbook_ninjitsu : Typedef
t_spellbook_ninjitsu =
    188


{-| ML Spellweaver spellbook (should have - MOREZ=600 by default)
-}
t_spellbook_arcanist : Typedef
t_spellbook_arcanist =
    189


{-| Customisable multi
-}
t_multi_custom : Typedef
t_multi_custom =
    190


{-| SA Mysticism spellbook (should have - MOREZ=677 by default)
-}
t_spellbook_mystic : Typedef
t_spellbook_mystic =
    191


{-| Hover-over item (CAN\_C\_HOVER can hover over blocking items)
-}
t_hoverover : Typedef
t_hoverover =
    192


{-| SA Bard spellbook (should have - MOREZ=700 by default)
-}
t_spellbook_bard : Typedef
t_spellbook_bard =
    193
