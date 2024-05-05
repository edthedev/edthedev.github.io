---
layout: blog.njk
title: A Nice Set of MineTest Mods
tags: ['blog', 'rss']
date: 2024-05-05
---

## About

The best reason to play `MineGame` on the `MineTest` engine is the diversity of `mods` (game modifications) available. 

Seasoned `MineCraft: Java Edition` server admins will have learned that the practical limit of supported mods on moderated resources multiplayer server may be around one dozen.

But `MineTest` was built from the ground-up with modding in mind. 

My modest `MineTest` server runs smoothly with half a dozen connected players **while running around 80 plugins**.

## Essentials

`Charcoal` allows burning wood blocks to create an alternate coal-like item.
- Allows crafting torches before the players have established their first deep mine.
- Essential because light sources can be hard to come by, early game.
- Essential because requiring a deep mine to generate light of any kind is a significant immersion break in the early game.

`Cleaner` replaces any unrecognized objects from uninstalled mods with a simple red block.
- Essential because you can remove mods that are not working, without worrying too much about unrecognized blocks left behind.
- I believe this is preventing server crashes.
- Unrecognized blocks can be picked up and trashed.
- Gives a server admin freedom to remove mods that are not right for that server.

`Farming Redo` adds so many crops.
- Essential because it makes seeds from all kinds of crops spawn randomly when a player digs in grass
- 

`Legboat` adds a BabaYaga style boat with legs.
- Cheap (four sticks and a boat)
- Practical. Allows traversing difficult terrain much more easily.
- Stylish. Looks like a wooden boat with long wooden legs.
- Adds the normal `boat` mod as a dependency, which I also consider essential.
- This is listed as essential because most people will overlook it otherwise. It takes a difficult part of exploring - getting home afterward, and makes it fun, without onerous costs.
- One could probably get by with only either this or `Movement Essentials`, but I prefer to have both.
- Unlike `Movement Essentials`, the resource costs (a bunch of wood) for this solution can be obtained almost anywhere.

`Mesecons` add `mese` an ore that serves a role like redstone in Minecraft.
- Essential because `Movement Essentials` requires it.
- Also required by every redstone-like mod.

`Mobs Animal` adds animals.

`Mob Horse` adds a horse that you can tame and ride.

`Mobs Monster` adds more monsters
- Gives players tons of interesting monsters to fight.
- Most mobs are aggressively trying to murder your pet sheep (and all other living things).
- The `MineGame` mob AI is much meaner than you might expect.
- Build protections, or lose your sheep / horses / moose / chickens / ostriches / ...
- I like to uncheck `Enable Damage` to allow invincible new players to learn the game without huddling underground at night in terror. Mechanics for vereran players are hardly affected, since great armor is cheap for players who know where to find diamond and mese. 
- Veteran players with player damage disabled still have their work cut out keeping their sheep alive.
- Essential because `MineTest` really shines when mods that add tons of variety, like this one, are enabled.

`Movement Essentials` solves several practial movement challenges in one mod.
- Activate a `mese crystal` to teleport to your bed/spawn
- Throw a `mese shard` to teleport a short distance
- Umbrella caused bugs for us. My players avoid using the Umbrella. It may be a conflict with `Realistic Hang Gliders`. If I figure out the issue, I'll submit a pull request.

`More Blocks` adds more blocks.
- Essential because more is better.

`More Ores` adds more ores.
- Essential because more is better.

`More Trees!` adds more trees.
- Essential because more is better.
- `MineGame` is intentionally minimalist and does not include any trees without a mod.
- These trees are great. You want them.

`i3` rebuilds the inventory panel (`press I`) to add support for many other mods.

`SkinsDB` adds more options for setting player appearance.
- I haven't given a lot of thought to player appearance. 
- On my small server, this allows us all to not look identical.

## Favorites

While I don't consider these mods **essential**, I encourage installing many mods as the server admin has interest in. `MineTest` can handle it.

`Anvil` allows repairing items that wear out, such as tools and clothing.
- This is **not** an essential mod, because `MineGame` wear is tuned quite well with the resource spawn.
- Players can still maintain having excellent tier items without this mod.
- If one of your other mods tunes the resource spawn rate, you might find this mod essential.
- Items enchanted with `X Enchanting` can still be repaired.
- The iron hammer wears out over time, but can be repaired with another iron hammer.
- Ability to repair iron hammers can be turned off, if you want to have an unavoidable cost to doing repairs. I leave it on, because iron is so available, anyway.

`Beautiful Flowers` adds so many kinds of flowers.
- Adds so many different flowers to the game world.
- When running `MineCraft: Java Edition` I had to remove my flowers mod, due to server resource costs. I have not had any resource issues with adding many mods like this one, on `MineTest`.
- Enjoy some guilt-free flowsers.
- It does add a page or two of flowers to the recipe book search.
- I almost marked this as essential, because it highlights for new players why they should bother trying `MineTest` if they already play `MineCraft`.

`Bees` adds bees, honey and crafting recipes for beekeeping.

`Bows` adds bows and arrows.
- Not essential to me, because I have terrible aim.

`Bonemeal` adds bonemeal that makes crops grow faster.
- Cook a `bone` to create `bonemeal`
- I get my bones from roving night time skeleton mobs, added by `Mobs Skeletons`.
- Beware that skeletons will attack your sheep farm with direct malicious intent, and can shoot their arrows around 20 blocks


`Headanim` lets other players see which way you are looking.

`Item Frames and Pedestals` allows you to mount itmes on your walls, or on a stone pillar.
- Compliments to `Storage Drawers` since it stores items that `Storage Drawers` cannot, such as tools.
- A good option for labeling your chests in  a sorting machine built with `Pipeworks`.

`Kart Car` adds a go cart to MineGame.
- Requires perfectly flat ground.
- If you're looking for pragmatic ways to get around, consider `Legboat`, `Movement Essentials`, `Realistic Hangglider` instead.
- Demands a mod that adds sloped blocks to build with.
- If you want to build a cool race track and race around on it, this is the mod!

`LWScratch` adds robots you can craft and program in a graphical language similar to [Scratch](https://scratch.mit.edu/).
- Make a robot do boring repetitive parts of your builds.
- Grab a copy of the [LWScratch Docs](https://github.com/loosewheel/lwscratch/tree/master/docs) to help get started.
- See my [MineTest Robots Guide](/blog/minetest/robots) for more help getting started.

`More Boots` adds boots for jumping high and running fast.
- The fast boots caused us server lag when used for exploring new areas.
- We use the fast boots only to run within explored areas.
- Jumping boots are a great way to start a trip using `Realistic Hang Gliders`.
- Pairs well with `Anvil` to repair your expensive boots.
- The fastest and highest boots are very fast and very high. Inconveniently so, for both.  I believe this is by design, because it's fun.
- For best experience, use 2nd to highest tier of each boot.

`MyDoors` adds lots of new types of doors.
- Add secret doors that look like bookshelves, stone walls, and more!
- Many admins will want one or more door mods, because `MineGame` includes only one plain-looking craftable door, by design.
- Crafting recipes for most doors are comparatively expensive, due to requiring very specific stained woods.
- For some players, ability to add secret doors is going to be their number one reason to try `MineTest`.

`Ore Deposits` causes additional ore to spawn on cleared stone floors.
- Makes ore resources renewable.
- Prevents a stylish quary build from running out of useful ore.
- Solves the classic 'I generated this world before I knew I wanted this interesting new ore' problem.
- Makes a lot of ore spawn.
- Will clutter every cleared stone floor in your builds with fresh ore. I install polished `stone block` floors to get a similar look without ore spawn.

`Pie` adds recipes for pie.
- I don't even run with a stamina mob, and I still want to make pie.
- With `LWScratch` you can teach a robot to make pie. **Everyone wants a robot that makes pie.**

`Pipeworks` adds pipes for moving liquids and tubes for moving items and item stacks.
- Add a `vacuum tube` to suck up dropped items, like `saplings`.
- Use `sorting tubes` to sort items into labeled chests.
- Fill rooms with fast tubes full of items being sorted into rows of carefully organized chests.
- I guess it does water too. I haven't done much with that.

`Realistic Hang Glider` provides a cheap practical MineTest equivalent to MineCraft Elytra.
- Inexpensive recipe (3 wool, 3 sticks)
- Includes rockets for extra boost.
- Fun way to visit friends, do tricks, and get a birds eye view of your builds

`Regrow` allows orchards by causing fruit trees to regrow their fruit.
- Without this mod, fruit only spawn when a tree first spawns.
- Pairs nicely with the `Pie` mod.

`Storage Drawers` provides storage that automatically displays the single stacked item in each drawer.
- Pragmatic storage solution
- Partial block items will not display correctly.
- Cannot store items that can wear out, such as most tools.
- Cannot connect to vacuum tube sorter machine built in `Pipeworks`. So I use reguar chests and `Item Frames` for my sorting machines.
- Adds a delightful ambiance to your workshop

`TavelNet` allows building a network of teleporters, and a practical elevator recipe
- Essential, because the depth in MineTest is 10,000 blocks, and many essential ores seem to only spawn down around 3,000. 
- 3,000 blocks is a lot is when you're digging straight down with a pickaxe, violating the first rule. 
- 3,000 blocks is even more when you're climbing a ladder to check on your sheep farm.
- Elevators are cheap, but finicky to setup. They must be directly vertical of eachother to connect.
- Teleporters are expensive, but can connect to each-other from anywhere.
- Doctor Who fans may wish to dye their teleporters blue.

`Wilhelmines Animal World` adds so many animals.

`Wilhelmines Living Jungle` adds a jungle biome.

`X Bows` adds bows and arrows.
- Not essential, to me, because my aim is terrible.
- Somehow I am running both this and `Bows`. I should look into that.

`X Enchanting` adds a table that can add enchantments to tools, by spending `mese crystals` (redstone).
- Add classic enchantments such as `fortune`, `unbreaking` and `efficiency`.
- Pair with `Anvil` to allow repairing your favorite enchanted pickaxe.
- The crafting recipe requires `obsidian` with can be really hard to obtain in MineGame.


## Honorable Mentions

These are mods that I recommend, but am not currently using.

`Cottonseed Oil Fertilizer` adds an alternative to bonemeal for growing crops faster.
- A nice option for peaceful servers that do not have skeletons to kill for `bonemeal`.
- I removed this mod after adding skeletons.
- I might try tuning the effect of the cottonseed oil fertiziler at some point to make it more potent.

`Doctor Who Tardis` adds a working Tardis, Cybermen and Daleks
- The working Tardis is seriously cool.
- Great way to find a missing biome you need, without using the in-game terminal
- Cybermen will murder all of your animals, burn through the sides of your buildings and mercilessly grief your structurs. 
- Do not go away from keyboard.
- Be prepared.
- Be vigilant.
- I uninstalled this mod, and plan to re-install it after I create a fork with no Cybermen or Daleks. 

> "The Cybermen were never allowed to play Rassilon's Game. They were too good." - The Second Doctor, The Five Doctors


`Hang Glider` adds a cheap hang glider
- Cheap. Same recipe as `Realistic Hang Glider`. (3 wool, 3 sticks)
- Honorable mention because I use `Realistic Hang Glider` instead, because the rockets amuse me.
- For lower powered or higher player count servers, I would recommend this instead of `Realistic Hang Glider`
- Pairs well with `More Boots` to get rocket boots to get a jumping start. 
- I give my players discounted or free rocket boots to help them avoid litering the wilderness with dirt pillars.

`Mapgen with Rivers` replaces the default map generation with beautiful hills and rivers.
- Quite lovely.
- Causes huge elevation jumps when added to an existing map.
- Removed because no other biomes seemed to generate when I was using it.

`Mobs NPC` adds non-player characters to interact with.
- I use this mod, but haven't played with the mechanics enough to have much to say.
- I like it.

`OneBlock` allows playing the classic `One Block` game mode.
- I do not believe this is compatible with any other map generation (for obvious reasons).
- I've hosted this type of game before, and look forward to trying this one for a weekend special map game run.

`Stairs Redo` adds recipes for stairs in so many more materials
- I removed this mod because the recipe inventory is already 28 pages long on our server, and this mod adds even more pages. (Paging is a preferred way to look for recipes on Steamdeck, due to the virual keyboard being harder to access.)
- Great for adding colors and textures to builds 

`Wilhelmes People` add non-player characters to interact with.
- I use this mod, but haven't played with the mechanics enough to have much to say.
- I like it.

`Steampunk Blimp` adds a blimp that multiple players can ride around together
- Pretty epic.
- Be kind, don't park your blimp crashed into another players wall. They cannot move or destroy it.
- This was quite fun.
- I removed this mod because we found more practical ways to explore together. Most notably `Legboat` and `Realistic Hang Gliders`.

## A Mod List Snapshot

The below is presented raw, for your possible further exploration.

Yes, I'm a Cybersecurity guy giving you an inventory of software on a system I host. It's a toy. I'm trying to help you have fun with your own toys. Be civil.

```sh
Issued command: /help mods
/mods: List mods installed on the server
Issued command: /mods
3d_armor, 3d_armor_ip, 3d_armor_sfinv, 3d_armor_stand, 3d_armor_ui, airutils, animalworld, anvil, armor_admin, armor_bronze,
armor_cactus, armor_crystal, armor_diamond, armor_gold, armor_mithril, armor_nether, armor_steel, armor_wood, basic_materials,
beautiflowers, beds, bees, binoculars, biofuel, boats, bonemeal, bones, bows, bucket, butterflies, carts, charcoal, cleaner,
cottonseed_oil, creative, decorations_sea, default, doors, drawers, dungeon_loot, dye, ebiomes, edit_skin, env_sounds, farming,
findbiome, fire, fireflies, flowers, game_commands, give_initial_stuff, glider, headanim, i3, itemframes, kartcar, keys, legboat,
lootchests, lootchests_default, lwscratch, magic_materials, map, mesecons, mesecons_alias, mesecons_blinkyplant, mesecons_button,
mesecons_carts, mesecons_commandblock, mesecons_delayer, mesecons_detector, mesecons_doors, mesecons_extrawires, mesecons_fpga,
mesecons_gamecompat, mesecons_gates, mesecons_hydroturbine, mesecons_insulated, mesecons_lamp, mesecons_lightstone,
mesecons_luacontroller, mesecons_materials, mesecons_microcontroller, mesecons_movestones, mesecons_mvps, mesecons_noteblock,
mesecons_pistons, mesecons_powerplant, mesecons_pressureplates, mesecons_random, mesecons_receiver, mesecons_solarpanel,
mesecons_stickyblocks, mesecons_switch, mesecons_torch, mesecons_walllever, mesecons_wires, mob_horse, mobkit, mobs, mobs_animal,
mobs_monster, mobs_npc, mobs_skeletons, moreblocks, moreores, moretrees, movement_essentials, mtg_craftguide, my_castle_doors,
my_cottage_doors, my_default_doors, my_door_wood, my_fancy_doors, my_future_doors, my_garage_door, my_hidden_doors, my_misc_doors,
my_old_doors, my_saloon_doors, my_sliding_doors, obsidianstuff, ore_deposits, people, pie, pipeworks, player_api, regrow, screwdriver,
sethome, sfinv, shields, shipwrecks, skinsdb, spawn, spectator_mode, speed_boots, stairs, steampunk_blimp, tnt, travelnet, vessels,
walls, weather, wielded_light, wieldview, wool, x_bows, x_enchanting, xpanes
```

## TODO

- [ ] Add a way to allow cats to be tamed on our server
- [ ] Find a fishing mod that I love, or contribute to one until I love it
- [ ] Investigate mods for player appearance and provide some guidance to favorites
- [ ] Investigate more door mods and provide additional guidance
- [ ] Tune my own server NPC mods, and provide guidance on which other admins might choose.
- [ ] Run a `OneBlock` game weekend and add recommendations. Possibly a dedicated mods page.
