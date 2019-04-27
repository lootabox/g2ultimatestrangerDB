
DATA[DATA.length] = { section: "General magic mechanics" };
DATA[DATA.length] = { id: "info_1",		teleport: "Damage types", note: "<b>Fire</b>: double damage against ice creatures, halved damage against fire creatures.<br><b>Ice</b>: double damage against fire creatures, halved damage against ice creatures.<br><b>Water</b>: double damage against fire creatures, halved damage against large creatures.<br><b>Lightning</b>: double damage against creatures in water.<br>If a creature is applicable for double and halved damage, normal damage is dealt instead." };
DATA[DATA.length] = { id: "info_2",		teleport: "Chargeable spells", note: "Chargeable spells have 4 charge tiers, each taking some time to reach. When it is time to advance to the next tier, mana is removed and damage is increased. The spell is cast off when trying to advance tier without having enough mana and immediately upon reaching tier 4. Chargeable spells cannot be cast without having enough mana for at least tier 1 and without actually reaching that tier. Scrolls use scroll mana cost per tier." };

DATA[DATA.length] = { section: "Runes 1st Circle of Magic" };
DATA[DATA.length] = { id: "rune_22",	pic: "screens/runen/rn41.jpg",				pic2: "screens/runen/zb_06.jpg",			name: "Fire Arrow",				mana: "5",						value: "500",	value2: "25",	effect: "Damage: 25",																trainer: "<b>Hyglas</b>, <b>Nefarius</b>",									ingred: "Sulfur",																	LP: "5",	note: "1)near <b>Juan</b> in Jharkendar" };
DATA[DATA.length] = { id: "rune_21",	pic: "screens/runen/rn30.jpg",				pic2: "screens/runen/zb_16.jpg",			name: "Heal Light Wounds",		mana: "10",						value: "500",	value2: "25",	effect: "Heals: 200",																trainer: "<b>Parlan</b>, <b>Nefarius</b>",									ingred: "Healing Plant",															LP: "3",	note: "1)orc camp in Khorinis near pass to the Valley of Mines" };
DATA[DATA.length] = { id: "rune_20",	pic: "screens/runen/rn31.jpg",				pic2: "screens/runen/zb_15.jpg",			name: "Light",					mana: "10",						value: "500",	value2: "10",	effect: "",																			trainer: "<b>Parlan</b>, <b>Nefarius</b>",									ingred: "gold piece",																LP: "1",	note: "- Duration: 5 minutes" };
DATA[DATA.length] = { id: "rune_48",	pic: "screens/runen/ru_wurzelschlingen.jpg",											name: "Root Snare",				mana: "50",						value: "2500",					effect: "Roots grows up from the ground and hold the target.",						trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "- Duration: 20 seconds<br><li>Does not work against golems or summoned demons.</li>" };
DATA[DATA.length] = { id: "rune_18",	pic: "screens/runen/rn47.jpg",				pic2: "screens/runen/zb_49.jpg",			name: "Small Lightning",		mana: "15",						value: "500",	value2: "60",	effect: "Damage: 30; stun",															trainer: "<b>Marduk</b>, <b>Nefarius</b>",									ingred: "Rock Chrystal",															LP: "3",	note: "" };
DATA[DATA.length] = { id: "rune_19",	pic: "screens/runen/rn13.jpg",				pic2: "screens/runen/zb_31.jpg",			name: "Summon Goblin Skeleton",	mana: "20",						value: "500",	value2: "75",	effect: "Summons: Goblin Skeleton",													trainer: "<b>Karras</b>, <b>Nefarius</b>",									ingred: "Goblin\'s Bone",															LP: "5",	note: "1)in Xardas� chest in <b>Sekob�s House</b> at <b>Sekob's Farm</b>" };

DATA[DATA.length] = { section: "Runes 2nd Circle of Magic" };
DATA[DATA.length] = { id: "rune_51",	pic: "screens/runen/ru_windhose.jpg",		pic2: "screens/runen/sc_windhose.jpg",		name: "Dust Devil",				mana: "30",						value: "1000",	value2: "200",	effect: "Target is lifted by the devil and is knocked out.",						trainer: "<b>Nefarius</b>",													ingred: "Wings of a bloodfly",														LP: "5",	note: "- Duration: 10 seconds" };
DATA[DATA.length] = { id: "rune_23",	pic: "screens/runen/rn32.jpg",				pic2: "screens/runen/zb_14.jpg",			name: "Fireball",				mana: "15",						value: "1000",	value2: "50",	effect: "Damage: 75",																trainer: "<b>Hyglas</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Pitch",																	LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_24",	pic: "screens/runen/rn35.jpg",				pic2: "screens/runen/zb_11.jpg",			name: "Ice Arrow",				mana: "10",						value: "1000",	value2: "25",	effect: "Damage: 50",																trainer: "<b>Marduk</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Glacier Quartz",															LP: "5",	note: "1)at the stone circle where Angar lost his amulet, <b>beside the barrel</b> guarded by skeletons" };
DATA[DATA.length] = { id: "rune_49",	pic: "screens/runen/ru_eislanze.jpg",		pic2: "screens/runen/sc_eislanze.jpg",		name: "Ice Lance",				mana: "20",						value: "1000",	value2: "100",	effect: "Damage: 100",																trainer: "<b>Nefarius</b>",													ingred: "Glacier Quartz",															LP: "5",	note: "" };
DATA[DATA.length] = { id: "rune_27",	pic: "screens/runen/rn15.jpg",				pic2: "screens/runen/zb_29.jpg",			name: "Sleep",					mana: "30",						value: "1000",	value2: "100",	effect: "Target human is put to sleep.",											trainer: "<b>Parlan</b>, <b>Nefarius</b>",									ingred: "Swampweed",																LP: "5",	note: "- Duration: 30 seconds<br><li>Now affects Cornelius, Judge and Larius.</li><li>Magicians in the city are now immune.</li><li>Player is never immune.</li>" };
DATA[DATA.length] = { id: "rune_50",	pic: "screens/runen/ru_energie_stehlen.jpg",											name: "Steal Energy",			mana: "30",						value: "3500",					effect: "Target is suspended in air and drained of life<br>Damage: 100 per second",	trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "- Duration: 9 seconds<br>- Hero heals for damage caused by the spell<br>- Does not drain below 1 life" };
DATA[DATA.length] = { id: "rune_25",	pic: "screens/runen/rn10.jpg",				pic2: "screens/runen/zb_34.jpg",			name: "Summon Wolf",			mana: "40",						value: "1000",	value2: "75",	effect: "Summons: Wolf",															trainer: "<b>Karras</b>, <b>Nefarius</b>",									ingred: "Wolf Skin",																LP: "5",	note: "" };
DATA[DATA.length] = { id: "rune_26",	pic: "screens/runen/rn48.jpg",				pic2: "screens/runen/zb_48.jpg",			name: "Wind Fist",				mana: "20 per tier (max 80)",	value: "1000",	value2: "60",	effect: "Damage: 50 per tier (max 200)",											trainer: "<b>Parlan</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Coal",																		LP: "5",	note: "- Deals blunt damage" };

DATA[DATA.length] = { section: "Runes 3rd Circle of Magic" };
DATA[DATA.length] = { id: "rune_33",	pic: "screens/runen/rn_kugelblitz.jpg",		pic2: "screens/runen/zb_35.jpg",			name: "Ball Lightning",			mana: "10 per tier (max 40)",	value: "1500",	value2: "75",	effect: "Damage: 30 per tier (max 120); stun",										trainer: "<b>Marduk</b>, <b>Nefarius</b>",									ingred: "Rock Chrystal, Sulfur",													LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_55",	pic: "screens/runen/ru_beliars_zorn.jpg",												name: "Beliar's Wrath",			mana: "100",					value: "3500",					effect: "Damage: 200",																trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "" };
DATA[DATA.length] = { id: "rune_52",	pic: "screens/runen/ru_waechter_erschaffen.jpg",										name: "Create Guardian",		mana: "60",						value: "2000",					effect: "Summons: Stone Guardian",													trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "" };
DATA[DATA.length] = { id: "rune_30",	pic: "screens/runen/rn11.jpg",				pic2: "screens/runen/zb_33.jpg",			name: "Create Skeleton",		mana: "60",						value: "1500",	value2: "75",	effect: "Summons: Skeleton",														trainer: "<b>Karras</b>, <b>Nefarius</b>",									ingred: "Skeleton\'s Bone",															LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_31",	pic: "screens/runen/rn43.jpg",				pic2: "screens/runen/zb_05.jpg",			name: "Fear",					mana: "50",						value: "1500",	value2: "75",	effect: "Creatures flee away from you",												trainer: "<b>Parlan</b>, <b>Nefarius</b>",									ingred: "Black Pearl",																LP: "5",	note: "1)in the cave under <b>Hosh Pak's</b> place <br>2)in the old tower of Xardas on the upper floor.<li>Animals react immediately.</li><li>Can be used without a target.</li><li>No longer can bypasses immunity of magicians, paladins, golems, dragons and trolls.</li>" };
DATA[DATA.length] = { id: "rune_53",	pic: "screens/runen/ru_geysir.jpg",			pic2: "screens/runen/sc_geysir.jpg",		name: "Geyser",					mana: "75",						value: "1500",	value2: "50",	effect: "Damage: 150; stun",														trainer: "<b>Nefarius</b>",													ingred: "Aquamarine",																LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_28",	pic: "screens/runen/rn26.jpg",				pic2: "screens/runen/zb_19.jpg",			name: "Heal Medium Wounds",		mana: "25",						value: "1500",	value2: "60",	effect: "Heals: 400",																trainer: "<b>Parlan</b>, <b>Nefarius</b>",									ingred: "Healing Herb",																LP: "5",	note: "1)in mine at canyon in Jharkendar" };
DATA[DATA.length] = { id: "rune_32",	pic: "screens/runen/rn34.jpg",				pic2: "screens/runen/zb_12.jpg",			name: "Ice Block",				mana: "40",						value: "1500",	value2: "100",	effect: "Damage: 60 + 2 per second",												trainer: "<b>Marduk</b>, <b>Nefarius</b>",									ingred: "Glacier Quartz, Aquamarine",												LP: "10",	note: "- Duration: 19 seconds<br>- Freezes target hit" };
DATA[DATA.length] = { id: "rune_29",	pic: "screens/runen/rn38.jpg",				pic2: "screens/runen/zb_08.jpg",			name: "Small Firestorm ",		mana: "25",						value: "1500",	value2: "100",	effect: "Damage: 100, small area of effect",										trainer: "<b>Hyglas</b>, <b>Nefarius</b>",									ingred: "Pitch, Sulfur",															LP: "15",	note: "" };
DATA[DATA.length] = { id: "rune_54",	pic: "screens/runen/ru_unwetter.jpg",		pic2: "screens/runen/sc_unwetter.jpg",		name: "Storm",					mana: "100",					value: "500",	value2: "200",	effect: "Damage: 250, large area of effect",										trainer: "<b>Nefarius</b>",													ingred: "Glacier Quartz, Wings of a bloodfly",										LP: "5",	note: "" };

DATA[DATA.length] = { section: "Runes 4th Circle of Magic" };
DATA[DATA.length] = { id: "rune_35",	pic: "screens/runen/rn12.jpg",				pic2: "screens/runen/zb_32.jpg",			name: "Create Stone Golem",		mana: "80",						value: "2000",	value2: "150",	effect: "Summons: Stone Golem",														trainer: "<b>Karras</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Heart of a Stone Golem",													LP: "15",	note: "" };
DATA[DATA.length] = { id: "rune_58",	pic: "screens/runen/ru_zombie_erschaffen.jpg",											name: "Create Zombie",			mana: "80",						value: "2000",					effect: "Summons: Zombie",															trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "" };
DATA[DATA.length] = { id: "rune_36",	pic: "screens/runen/rn36.jpg",				pic2: "screens/runen/zb_10.jpg",			name: "Destroy Undead",			mana: "100",					value: "2000",	value2: "75",	effect: "Damage: 1000",																trainer: "<b>Parlan</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Holy Water",																LP: "10",	note: "- Only affects undead" };
DATA[DATA.length] = { id: "rune_56",	pic: "screens/runen/ru_insektenschwarm.jpg",											name: "Insect Swarm",			mana: "20",						value: "1500",					effect: "Target is distracted by a swarm of insects<br>Damage: 80 per second",		trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "- Duration: 6 seconds<br>- Target is not damaged below 1 life" };
DATA[DATA.length] = { id: "rune_37",	pic: "screens/runen/rn44.jpg",				pic2: "screens/runen/zb_03.jpg",			name: "Large Fireball",			mana: "40 per tier (max 160)",	value: "2000",	value2: "300",	effect: "Damage: 75 per tier (max 300)",											trainer: "<b>Hyglas</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Sulfur, Pitch",															LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_34",	pic: "screens/runen/rn29.jpg",				pic2: "screens/runen/zb_17.jpg",			name: "Lightning",				mana: "30",						value: "2000",	value2: "125",	effect: "Damage: 150",																trainer: "<b>Marduk</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Rock Crystal, Glacier Quartz",												LP: "15",	note: "" };
DATA[DATA.length] = { id: "rune_57",	pic: "screens/runen/ru_wasserfaust.jpg",	pic2: "screens/runen/sc_wasserfaust.jpg",	name: "Waterfist",				mana: "25",						value: "2000",	value2: "100",	effect: "Damage: 125; stun",														trainer: "<b>Nefarius</b>",													ingred: "Aquamarine, Rock Crystal",													LP: "10",	note: "" };

DATA[DATA.length] = { section: "Runes 5th Circle of Magic" };
DATA[DATA.length] = { id: "rune_59",	pic: "screens/runen/ru_schrei_der_toten.jpg",											name: "Cry of the Dead",		mana: "250 + all mana",			value: "2000",					effect: "Damage: 666, small area of effect",										trainer: "pray at <b>Shrine of Beliar</b>",									ingred: "-",																		LP: "0",	note: "- Does not affect undead" };
DATA[DATA.length] = { id: "rune_41",	pic: "screens/runen/rn37.jpg",				pic2: "screens/runen/zb_09.jpg",			name: "Heal Heavy Wounds",		mana: "50",						value: "2500",	value2: "200",	effect: "Heals: 800",																trainer: "<b>Parlan</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Healing Root",																LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_39",	pic: "screens/runen/rn33.jpg",				pic2: "screens/runen/zb_13.jpg",			name: "Ice Wave",				mana: "120",					value: "2500",	value2: "200",	effect: "Damage: 60 + 2 per second",												trainer: "<b>Marduk</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Glacier Quartz, Aquamarine",												LP: "20",	note: "-Duration: 19 seconds<br>- Freezes targets hit" };
DATA[DATA.length] = { id: "rune_38",	pic: "screens/runen/rn17.jpg",				pic2: "screens/runen/zb_27.jpg",			name: "Large Firestorm ",		mana: "50 per tier (max 200)",	value: "2500",	value2: "150",	effect: "Damage: 75 per tier (max 300), small area of effect",						trainer: "<b>Hyglas</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Sulfur, Tongue of Fire",													LP: "10",	note: "" };
DATA[DATA.length] = { id: "rune_40",	pic: "screens/runen/rn14.jpg",				pic2: "screens/runen/zb_30.jpg",			name: "Summon Demon",			mana: "120",					value: "2500",	value2: "200",	effect: "Summons: Demon",															trainer: "<b>Karras</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Heart of a Demon",															LP: "20",	note: "" };

DATA[DATA.length] = { section: "Runes 6th Circle of Magic" };
DATA[DATA.length] = { id: "rune_45",	pic: "screens/runen/rn46.jpg",				pic2: "screens/runen/zb_01.jpg",			name: "Army of Darkness",		mana: "150",					value: "3000",	value2: "250",	effect: "Summons: 6 Skeletons",														trainer: "<b>Karras</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Skeleton\'s Bone, Black Pearl, Heart of a Stone Golem, Heart of a Demon",	LP: "20",	note: "" };
DATA[DATA.length] = { id: "rune_43",	pic: "screens/runen/rn45.jpg",				pic2: "screens/runen/zb_02.jpg",			name: "Breath of Death",		mana: "100",					value: "3000",	value2: "250",	effect: "Damage: 500",																trainer: "<b>Pyrokar</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Coal, Black Pearl",														LP: "20",	note: "- Only deals 250 damage???" };
DATA[DATA.length] = { id: "rune_47",	pic: "screens/runen/rn27.jpg",															name: "Holy Missile",			mana: "60",						value: "3000",					effect: "Damage: 300",																trainer: "read <b>almanac</b> in secret library",							ingred: "Holy Water",																LP: "0",	note: "" };
DATA[DATA.length] = { id: "rune_42",	pic: "screens/runen/rn39.jpg",				pic2: "screens/runen/zb_07.jpg",			name: "Rain of Fire",			mana: "150",					value: "3000",	value2: "250",	effect: "Damage: 500, large area of effect",										trainer: "<b>Hyglas</b>, <b>Pyrokar</b>, <b>Nefarius</b>, <b>Milten</b>",	ingred: "Pitch, Sulfur, Tongue of Fire",											LP: "20",	note: "" };
DATA[DATA.length] = { id: "rune_46",	pic: "screens/runen/rn16.jpg",				pic2: "screens/runen/zb_28.jpg",			name: "Shrink Monster",			mana: "300",					value: "3000",	value2: "250",	effect: "Shrinks target, weakening them significantly.",							trainer: "<b>Pyrokar</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Goblin\'s Bone, Troll Tusk",												LP: "20",	note: "- Divides all stats of the monster by 10" };
DATA[DATA.length] = { id: "rune_44",	pic: "screens/runen/rn28.jpg",				pic2: "screens/runen/zb_18.jpg",			name: "Wave of Death",			mana: "150",					value: "3000",	value2: "250",	effect: "Damage: 500, area of effect",												trainer: "<b>Pyrokar</b>, <b>Nefarius</b>, <b>Milten</b>",					ingred: "Skeleton\'s Bone, Black Pearl ",											LP: "20",	note: "Damages twice like rain of fire???" };

DATA[DATA.length] = { section: "Blank Runes" }; //alle runenrohlinge bekommen die selbe id, naemlich "rune_rohling"
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'The Path of Believers'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'Snappers Claws'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'Fernando's business'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'Lurker Hunt'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'I gotta get out of here!'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Quest: <b>'A package of lock picks'</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "You find one blank Rune in <b>Xardas old Tower in the Valley of Mines</b> on a table on the last floor." };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "You get a blank Rune from <b>Milten</b> in the <b>Castle</b> when you ask for Stuff." };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "In the <b>Secret Library</b> on a table where are the Sea Map and the Tears of Innos." };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "You get a blank Rune from <b>Parlan</b> when you become a Mage." };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "A <b>blank rune</b> can be found in the water at the beach in the north of the pirates camp." };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "<b>Hidden blank rune in Jharkendar</b>" };
DATA[DATA.length] = { id: "rune_rohling",	rohling: "Buy it from <b>several Traders</b>" };

DATA[DATA.length] = { section: "Paladin Spells" };
DATA[DATA.length] = { id: "rune_14",	pic: "screens/runen/rn22.jpg",	pic2: "screens/runen/zb_23.jpg",	name: "Holy Light",			mana: "10",	value: "500",	value2: "50",	effect: "light for 5 minutes ",	trainer: "<b>Albrecht</b>",	ingred: "-",	LP: "1",	note: "From the dead paladins at the <b>pass</b> in the valley of mines. <br>You can buy scrolls from <b>Martin</b> in chapter 1 (needs 5 mana)." };
DATA[DATA.length] = { id: "rune_13",	pic: "screens/runen/rn23.jpg",	pic2: "screens/runen/zb_22.jpg",	name: "Holy Arrow",			mana: "10",	value: "500",	value2: "200",	effect: "Damage: 100",			trainer: "<b>Albrecht</b>",	ingred: "-",	LP: "3",	note: "You can buy scrolls from <b>Martin</b> in chapter 1 (needs 5 mana). <br><b>Albrecht</b> teaches you the rune in chapter 3 when the Eye of Innos is repaired." };
DATA[DATA.length] = { id: "rune_11",	pic: "screens/runen/rn19.jpg",	pic2: "screens/runen/zb_26.jpg",	name: "Harm Evil",			mana: "30",	value: "2000",	value2: "600",	effect: "Damage: 300",			trainer: "<b>Albrecht</b>",	ingred: "-",	LP: "5",	note: "You can buy scrolls from <b>Martin</b> in chapter 2 (needs 5 mana). <br><b>Albrecht</b> teaches you the rune in chapter 5." };
DATA[DATA.length] = { id: "rune_12",	pic: "screens/runen/rn25.jpg",	pic2: "screens/runen/zb_20.jpg",	name: "Destroy Evil",		mana: "60",	value: "3000",	value2: "1000",	effect: "Damage: 600",			trainer: "-",				ingred: "-",	LP: "10",	note: "You can buy scrolls from <b>Martin</b> in chapter 4 and 5 (needs 5 mana). There is no rune anymore in the game." };
DATA[DATA.length] = { id: "rune_17",	pic: "screens/runen/rn21.jpg",	pic2: "screens/runen/zb_24.jpg",	name: "Lesser Healing",		mana: "10",	value: "500",	value2: "100",	effect: "200 Healing",			trainer: "<b>Albrecht</b>",	ingred: "-",	LP: "3",	note: "You can buy scrolls from <b>Martin</b> in chapter 1 (needs 5 mana). <br><b>Albrecht</b> teaches you the rune in chapter 3 when the Eye of Innos is repaired." };
DATA[DATA.length] = { id: "rune_16",	pic: "screens/runen/rn20.jpg",	pic2: "screens/runen/zb_25.jpg",	name: "Medium Healing",		mana: "25",	value: "2000",	value2: "400",	effect: "400 Healing",			trainer: "<b>Albrecht</b>",	ingred: "-",	LP: "5",	note: "You can buy scrolls from <b>Martin</b> in chapter 2 (needs 5 mana). <br><b>Albrecht</b> teaches you the rune in chapter 5." };
DATA[DATA.length] = { id: "rune_15",	pic: "screens/runen/rn24.jpg",	pic2: "screens/runen/zb_21.jpg",	name: "Greater Healing",	mana: "50",	value: "3000",	value2: "800",	effect: "800 Healing",			trainer: "-",				ingred: "-",	LP: "10",	note: "You can buy scrolls from <b>Martin</b> in chapter 2 (needs 5 mana). There is no rune anymore in the game." };

DATA[DATA.length] = { section: "Teleport Spells" };
DATA[DATA.length] = { id: "rune_9",		pic: "screens/runen/rn07.jpg",										teleport: "To Castle",												note: "in the house where <b>Milten</b> is on the upper floor." };
DATA[DATA.length] = { id: "rune_1",		pic: "screens/runen/rn03.jpg",										teleport: "To Harbor City",											note: "From <b>Lord Hagen</b> in chapter 3." };
DATA[DATA.length] = { id: "rune_4",		pic: "screens/runen/rn09.jpg",										teleport: "To Landowner",											note: "From <b>Lee</b> in chapter 3." };
DATA[DATA.length] = { id: "rune_3",		pic: "screens/runen/rn08.jpg",										teleport: "To Monastery",											note: "From <b>Pyrokar</b> in chapter 3." };
DATA[DATA.length] = { id: "rune_7",		pic: "screens/runen/rn02.jpg",										teleport: "To Old Demon Tower",										note: "in the <b>old tower</b> of Xardas on the upper floor." };
DATA[DATA.length] = { id: "rune_8",		pic: "screens/runen/rn04.jpg",										teleport: "To Valley of Mines Pass",								note: "1)on a hill left beside of the abandoned mine (where you come out in the valley of mines through the secret tunnel) 2)before the entrance to the ice dragon - it\'s on the right side where are 2 ice golems." };
DATA[DATA.length] = { id: "rune_6",		pic: "screens/runen/rn05.jpg",										teleport: "To Pass of Khorinis",									note: "From the <b>dead Paladin</b> at the pass of Khorinis." };
DATA[DATA.length] = { id: "rune_2",		pic: "screens/runen/rn06.jpg",										teleport: "To Tavern",												note: "From <b>Orlan</b> in chapter 3 (costs 500 gold)." };
DATA[DATA.length] = { id: "rune_5",		pic: "screens/runen/rn40.jpg",										teleport: "To Xardas",												note: "From <b>Lester</b> in chapter 3." };
DATA[DATA.length] = { id: "rune_10",	pic: "screens/runen/rn18.jpg",										teleport: "to the Paladin\'s Armor (secret of the library)",		note: "Ingredients: holy water, instruction is in the almanac in the <b>secret library</b> (only as paladin)." };
DATA[DATA.length] = { id: "rolle_14",	pic: "screens/runen/zb_50.jpg",										teleport: "to a hut on a hill (House of the Guardian's of Death)",	note: "New scroll to get out of the ruins behind the broken bridge. <br>Can be found near the skeleton with the Magic Bow." };

DATA[DATA.length] = { section: "Other Spells" };
DATA[DATA.length] = { id: "info_other_1",		teleport: "Transformation spells", note: "Transformation scrolls now have separate mana cost similar to Gothic II classic. The spells can no longer be targeted. The players weapon talents are not messed up during transformation and hitpoints are updated appropriately in the case of level ups during transformation." };
DATA[DATA.length] = { id: "rolle_2",	pic: "screens/runen/zb_36.jpg",										name: "Transform into Dragon Snapper",	mana: "5",	value2: "200",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Cronos</b>, <b>Isgaroth</b>, <b>Gorax</b> and <b>Karras</b> (chapter 5)" };
DATA[DATA.length] = { id: "rolle_4",	pic: "screens/runen/zb_38.jpg",										name: "Transform into Field Raider",	mana: "5",	value2: "60",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Cronos</b> (chapter 3), <b>Gorax</b> (chapter 3), <b>Karras</b> (chapter 2) and <b>Isgaroth</b> (chapter 4)" };
DATA[DATA.length] = { id: "rolle_3",	pic: "screens/runen/zb_37.jpg",										name: "Transform into Fire Lizard",		mana: "5",	value2: "200",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Sagitta</b> and <b>Karras</b> (chapter 4)" };
DATA[DATA.length] = { id: "rolle_5",	pic: "screens/runen/zb_39.jpg",										name: "Transform into Giant Rat",		mana: "5",	value2: "50",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Sagitta</b> (chapter 3) and <b>Karras</b> (chapter 2)" };
DATA[DATA.length] = { id: "rolle_11",	pic: "screens/runen/zb_45.jpg",										name: "Transform into Lizard",			mana: "5",	value2: "80",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Sagitta</b> and <b>Karras</b> (chapter 3)" };
DATA[DATA.length] = { id: "rolle_6",	pic: "screens/runen/zb_40.jpg",										name: "Transform into Lurker",			mana: "5",	value2: "80",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Gorax</b>, <b>Cronos</b>, <b>Isgaroth</b> and <b>Karras</b> (chapter 5)" };
DATA[DATA.length] = { id: "rolle_7",	pic: "screens/runen/zb_41.jpg",										name: "Transform into Scavenger",		mana: "5",	value2: "50",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Gorax</b>, <b>Cronos</b>, <b>Isgaroth</b>, <b>Karras</b> (chapter 3) and <b>Vatras</b> (in chapter 6)" };
DATA[DATA.length] = { id: "rolle_8",	pic: "screens/runen/zb_42.jpg",										name: "Transform into Shadowbeast",		mana: "5",	value2: "200",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Sagitta</b> and <b>Karras</b> (chapter 5)" };
DATA[DATA.length] = { id: "rolle_9",	pic: "screens/runen/zb_43.jpg",										name: "Transform into Sheep",			mana: "5",	value2: "25",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Cronos</b>, <b>Gorax</b>, <b>Isgaroth</b> and <b>Karras</b> (chapter 3)" };
DATA[DATA.length] = { id: "rolle_10",	pic: "screens/runen/zb_44.jpg",										name: "Transform into Snapper",			mana: "5",	value2: "125",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Karras</b> (chapter 3), <b>Cronos</b>, <b>Gorax</b> and <b>Isgaroth</b> (chapter 4)" };
DATA[DATA.length] = { id: "rolle_12",	pic: "screens/runen/zb_46.jpg",										name: "Transform into Warg",			mana: "5",	value2: "125",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Cronos</b>, <b>Gorax</b>, <b>Isgaroth</b> and <b>Karras</b> (chapter 4)" };
DATA[DATA.length] = { id: "rolle_13",	pic: "screens/runen/zb_47.jpg",										name: "Transform into Wolf",			mana: "5",	value2: "75",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> (chapter 1), <b>Cronos</b>, <b>Gorax</b>, <b>Karras</b> (chapter 3) und <b>Isgaroth</b> (chapter 4); You also find 2 pieces of it in the chest M07 (monastery)." };
DATA[DATA.length] = { id: "rolle_1",	pic: "screens/runen/zb_04.jpg",										name: "Oblivion",						mana: "5",	value2: "100",	effect: "",				note: "Trader who sell it: <b>Ignaz</b> and <b>Lutero</b>; You also find 2 pieces of it in Chest K32 (<b>Zuris House</b>)<br><nobr><li>New model.</li></nobr>" };
