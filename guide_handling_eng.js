
DATA[DATA.length] = { section: "Progression and scaling" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_0_1", text: "Gothic 1 and 2 had scaling of all attributes and talents up to 100, with limited ways of increasing them besides using trainers. In Night of the Raven there are many more ways to bloat the numbers besides training, all the way up to 200. This makes the game harder to balance throughout an entire playthrough. One of the main changes in this mod is changing the hero, equipment, consumable, spell and monster progression back to pre-addon progression, while still keeping the addon in the game in its entirety." };
DATA[DATA.length] = { id: "handling_0_2", text: "Because the addon adds many new sources of experience and the mods addition of Gothic 1 areas to Valley of Mines also adds more monsters to fight, the level progression must be slowed down somehow. This is accomplished by reducing the experience gained from combat and by making training attributes and talents become expensive quicker. Additionally to stretch this pre-addon progression to its limits, the hero starts with no strength, dexterity or talents." };
DATA[DATA.length] = { id: "handling_0_4", text: "Because the level progression is slowed down, using consumables before reaching high numbers in attributes and talents feels even more punishing due to the increasing training costs. This is overcome by separating training costs and limits from the actual attribute or talent value. Related to this, because of these changes the stone tablets of the addon become too powerful. The learning cost for reading them is increased and the amount of attributes and talents they grant is greatly reduced." };
DATA[DATA.length] = { id: "handling_0_3", text: "The purpose of these changes is not to make the game easier nor too punishing, but rather to make the game feel challenging from start to finish. Usually in Night of the Raven the game becomes easier towards the end. Reducing combat experience already makes the late game more challenging, but an option is given for more experienced players to reduce the amount of hitpoints gained per level. This option cannot be changed for a started playthrough." };
DATA[DATA.length] = { headline: "Summary" };
DATA[DATA.length] = { id: "handling_0_4", text: "<li>Equipment, consumables, spells and monsters are scaled to pre-addon levels.</li><li>Experience gain from combat is reduced by 50%.</li><li>Attributes and talents cost 1 more LP for every 20 points trained (instead of 30).</li><li>Hero starts with no strength, dexterity or talents (instead of 10).</li><li>Training costs and limits are not influenced by consumable or equipment bonuses.</li><li>Stone tablets bonuses are greatly reduced and learning to read them is more costly.</li><li>Hitpoints per level can be reduced from game options.</li>" };



DATA[DATA.length] = { section: "Alchemy" };
DATA[DATA.length] = { headline: "Alchemy changes" };
DATA[DATA.length] = { id: "handling_1", text: "<li>Alchemist's bench does not automatically kick you out of the dialog, unless completely out of Lab Water Bottles.</li><li>It is possible to create Double Apple tobacco.</li>" };
DATA[DATA.length] = { pic: "guide_handling/Alchemietisch_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/Alchemietischbenutzung_eng.jpg" };

DATA[DATA.length] = { section: "Smithing" };
DATA[DATA.length] = { headline: "Smithing changes" };
DATA[DATA.length] = { id: "handling_14", text: "<li>Anvil does not kick you out of the dialog, unless out of Red Hot Steel.</li><li>Ore weapon forging option is visible only learning the skill.</li><li>When missing production items and failing to craft something, the anvil gives back Red Hot Steel instead of Raw Steel.</li><li>You don´t need the bucket and the grindstone anymore like in Gothic 1.</li>" };
DATA[DATA.length] = { pic: "guide_handling/schmiedefeuer_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/schmiedenamboss_eng.jpg" };

DATA[DATA.length] = { section: "Magic" };
DATA[DATA.length] = { id: "handling_2_1", text: "Magic and spells have had extensive changes made to them. Spells had many unused and broken mechanics as well as interactions that were often not obvious to the player. The general changes aim to make these interactions more intuitive and also to bring back some of the unused and broken mechanics, as well as to introduce some new mechanics to the game. Additional changes were made to improve balance between spells, to ensure no spells are completely pointless and to improve quality of life for spell use. Spell properties are more clearly noted in the items used to cast them. Specific spell changes and the few new spells can be seen in Magic tab (left menu)." };
DATA[DATA.length] = { headline: "Monster weaknesses and strengths" };
DATA[DATA.length] = { id: "handling_2_2", text: "In the base game a few monsters received double or halved damage from spells of certain elements. This mechanic is revised so they instead have halved or doubled magic protection against those spells. Most monsters have had increased magic protection and added a weakness, so having a larger variety of spells is now key to playing a mage efficiently." };
DATA[DATA.length] = { headline: "Fire spells" };
DATA[DATA.length] = { id: "handling_2_3", text: "Ice based and furred monsters are weak, while fire based monsters are resistant against fire spells. There were unused mechanics dating back to Gothic I that set creatures on fire dealing damage over time, while also freezing them. This mechanic has been revised so that the spells deal half of their damage over time, but without freezing the target." };
DATA[DATA.length] = { headline: "Ice spells" };
DATA[DATA.length] = { id: "handling_2_4", text: "Fire based and furless monsters are weak, while ice based monsters are resistant against ice spells. These spells in the base game tended to deal more damage at a slightly higher mana cost. This design stills holds true and given the changes to fire spells the ice spells now also have the advantage of dealing all of their damage instantly. And yes, the two freezing spells are not nearly as powerful as before." };
DATA[DATA.length] = { headline: "Lightning spells" };
DATA[DATA.length] = { id: "handling_2_5", text: "Water based, plated and armored monsters are weak against lightning spells. Additionally any creature wading, swimming or diving are considered weak against them. There were also unused mechanics for stunning enemies from lightning spells. This was too powerful, so instead lightning spells now briefly stagger enemies." };
DATA[DATA.length] = { headline: "Water spells" };
DATA[DATA.length] = { id: "handling_2_6", text: "Fire based and flying monsters are weak, while large monsters are resistant against water spells. This niche spell type was not properly implemented, its interactions should work as expected now. The two spells have been rebalanced to make them worthwhile." };
DATA[DATA.length] = { pic: "guide_handling/Runenbenutzung_eng.jpg" };
DATA[DATA.length] = { headline: "Damage over time mechanics" };
DATA[DATA.length] = { id: "handling_2_7", text: "Damage over time from spells no longer ignores magic protection. The instant damage portion of a spell is reduced by magic protection first, while any damage over time portion is reduced by the remaining magic protection (if any). Each spell dealing damage over time has either a static duration or static damage per second. If magic protection reduces the damage to be dealt over time, the spell either deals damage slower or has less duration, depending on which part is static." };
DATA[DATA.length] = { headline: "Chargeable spells" };
DATA[DATA.length] = { id: "handling_2_8", text: "Chargeable spells start at tier 1 and immediately begin charging the next tier. The spell is automatically cast off when trying to advance a tier without having enough mana or by trying to advance to a tier above the maximum. Mana is removed and damage increased only upon reaching a tier. Chargeable spells cannot be cast without having enough mana for at least tier 1. Scrolls use scroll mana cost per tier." };
DATA[DATA.length] = { headline: "Summoning spells" };
DATA[DATA.length] = { id: "handling_2_9", text: "Summoned creatures can be summoned at a specific position further away from the hero. Summoned creatures now have a degenerative effect on them that eventually kills them, replacing the base games time limit of 1 minute. They will generally last shorter time now unless they are healed. These changes aim to make usage of summons more dynamic and offensive. Additionally summons can be charged up a tier once for a more powerful summon." };
DATA[DATA.length] = { headline: "Spell scrolls" };
DATA[DATA.length] = { id: "handling_2_10", text: "In Gothic II classic the scroll mana cost was equal to rune mana cost, but in the Night of the Raven it is always 5. Both approaches have their merits so scrolls now cost roughly half as much mana to cast as the runes." };
DATA[DATA.length] = { pic: "guide_handling/Zauber_eng.jpg" };
DATA[DATA.length] = { headline: "Beliar spells" };
DATA[DATA.length] = { id: "handling_2_11", text: "Beliar spells are no longer mage exclusive nor somehow created from the Claw of Beliar without any explanation. They can now be found in the world in place of regular runes and can be used by anyone, but their mana cost is also reduced from caster life. Wielding the Claw of Beliar negates this downside." };
DATA[DATA.length] = { headline: "Paladin spells" };
DATA[DATA.length] = { id: "handling_2_12", text: "" };
DATA[DATA.length] = { headline: "Teleport spells" };
DATA[DATA.length] = { id: "handling_2_13", text: "Valley of Mines teleportation stones are now more difficult to reach before Chapter 4. This makes Chapter 2 more intense and makes the beginning of Chapter 4 flow a bit better." };
DATA[DATA.length] = { headline: "Transformation spells" };
DATA[DATA.length] = { id: "handling_2_14", text: "Transformation scrolls now have different mana costs similar to Gothic II classic. The spells are no longer be targeted. The players weapon talents are not messed up during transformation and hitpoints are updated appropriately in the case of level up during transformation." };

DATA[DATA.length] = { section: "Rune crafting and magic staves" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_3", text: "Rune crafting mechanics have not been changed, but few related bugs have been fixed:<li>Failing to create runes for Ice Block and Destroy Undead properly returns the runestone to inventory.</li><li>Magic Runes are removed from frozen corpses.</li>" };
DATA[DATA.length] = { headline: "Magic staves" };
DATA[DATA.length] = { id: "handling_3_1", text: "The addon added some \"Wands\" that were just normal melee weapons, one giving a decent mana boost. All of the Wands are now called Staves and they each grant a bonus to certain types of spells when equipped. In addition, they can be infused at a shrine of Innos with a recipe, blank runestones and certain materials for a second powerful bonus. The bonuses are described with the weapons in the Weapon tab (left menu). <br>The mana bonus from the first wand can instead be found on the Novice' Quarterstaff." };
DATA[DATA.length] = { headline: "Blank runes" };
DATA[DATA.length] = { id: "handling_3_2", text: "While the blank runes are still found in their usual places, they are more valuable since:<br><li>There are more spells available and having different types of spells is more important.</li><li>There are no free runes in the world anymore (other than Beliar runes).</li><li>Infusing magic staves consumes blank runes.</li>" };

DATA[DATA.length] = { section: "Pray changes" };
DATA[DATA.length] = { headline: "Shrine of Innos" };
DATA[DATA.length] = { pic: "guide_handling/beten_eng.jpg" };
DATA[DATA.length] = { id: "handling_8", text: "<b>Goal</b>: Get rid of exploiting, randomness, pressure from guild affiliation and daily prayers.<br><br>Specific gold amounts cannot be donated anymore. Instead for every level gained a donation can be made for an attribute bonus. The amount of gold required depends on shrine donations made and hero level. This means there is no need not visit the Shrine every day, but it is still encouraged to visit the shrines often to save gold. The bonus is not tied to guilds in any way and the different attributes get bonuses inline with each other (pseudo random).<ul><li>20% chance: +1 Strength (max 10)<li>20% chance: +1 Dexterity (max 10)<li>20% chance: +2 Mana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(max 10)<li>40% chance: +3 Hitpoints (max 20)</ul>Additionally, the hero can pray for full health or mana once per day." };
DATA[DATA.length] = { headline: "Shrine of Beliar" };
DATA[DATA.length] = { pic: "guide_handling/beten_beliar.jpg" };
DATA[DATA.length] = { id: "handling_8", text: "Praying on shrines of Beliar is like praying on shrines of Innos. Praying:<ul><ul><li><b>- 1 life energy:</b> 50 gold <li><b>- 5 life energy:</b> 250 gold <li><b>- 10 life energy:</b> 500 gold </ul>You can donate maximum 60 life energy. Or you can donate<ul><li><b>- 1 mana:</b> 500 gold </ul>But you can donate maximum 11 mana. <ul><li><b>- if you donate nothing:</b> the hero get damage (20% of the current life energy) </ul></ul>If you donate more than one time a day then the hero takes damage (20% of the current life energy) and you lost your donation. When you have only 2 life energy praying will be aborted (you do not lose the donation; hero does not take damage)." };

DATA[DATA.length] = { section: "Bed & Sleeping" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_9", text: "<li>If prevented from resting properly time will not be fast forwarded.</li><li>Wounds will also prevent resting (below 50% life).</li><li>Lying down creates a fade to black effect, as originally intended.</li>" };
DATA[DATA.length] = { pic: "guide_handling/schlafen_eng.jpg" };

DATA[DATA.length] = { section: "Keys and lockpicking" };
DATA[DATA.length] = { headline: "Lockpicking noise" };
DATA[DATA.length] = { id: "handling_4", pic: "guide_handling/Schluessel_eng.jpg", text: "Turning a lockpick too frequently causes noise and too much noise will be noticed. Breaking a lockpick causes more noise and has a chance to always be noticed. Having the Sneak talent halves both the amount of noise created and the chance of being noticed if the lockpick breaks." };
DATA[DATA.length] = { pic: "guide_handling/Truhe_eng.jpg" };

DATA[DATA.length] = { section: "Torches" };
DATA[DATA.length] = { headline: "How can I use a torch?" };
DATA[DATA.length] = { id: "handling_5", text: "You must select a torch in your inventory and activate it with your *action-button*. Now it burns and you have it in your hand. If you equip a weapon then you throw the torch on the ground. But you can pick it up again after the fight." };
DATA[DATA.length] = { pic: "guide_handling/Fackelbenutzung_eng.jpg" };

DATA[DATA.length] = { section: "Books" };
DATA[DATA.length] = { headline: "How can I read a book on a bookstand?" };
DATA[DATA.length] = { id: "handling_6", text: "You must have the bookstand in your focus and press then the *action-button* (STRG or Ctrl). You can turn the pages with your *forward-button*. If you want to leave the bookstand then you must press your *action-button*." };
DATA[DATA.length] = { pic: "guide_handling/buchstaender_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/buch_eng.jpg" };

DATA[DATA.length] = { section: "Trade" };
DATA[DATA.length] = { headline: "How can I trade?" };
DATA[DATA.length] = { id: "handling_10", text: "If you trade, all things are *changed* into gold which you can buy or sell. There is an inventory monitor - the merchant´s goods are on the left side, yours on the right side. Now you can take those goods from the inventory of the merchant which you want - choose your product and press your *action-button* (to get all products of the same kind press *action-button* + *Alt-button* or *jump-button*). But you must have enough gold to buy something. It´s the same in your inventory but you get gold for goods now and don´t need to pay. <br>ATTENTION!!! <br>You get only one third of the value of the goods when you sell something. But if you buy something you must pay the full costs. That means that you must be careful when you trade because you can sell something which you don´t want to sell and must buy back for the higher value. All the names of the merchants are shown in the \"Trader\" section." };
DATA[DATA.length] = { pic: "guide_handling/handeln_eng.jpg" };

DATA[DATA.length] = { section: "Throw away things" };
DATA[DATA.length] = { headline: "How can I throw away things?" };
DATA[DATA.length] = { id: "handling_11", text: "You can throw away things when you choose the right thing (weapon, armor etc.) in your inventory and press the *jump-button*." };
DATA[DATA.length] = { pic: "guide_handling/sachenwegwerfen_eng.jpg" };

DATA[DATA.length] = { section: "Weapons/Rings/Amulets/Spells" };
DATA[DATA.length] = { headline: "How can I activate/deactivate a weapon/ring/amulet/spell?" };
DATA[DATA.length] = { id: "handling_12", pic: "guide_handling/sachenanlegen_eng.jpg", text: "Go into your inventory and choose the weapon, armor, ring or amulet which you want to put on. Now press your *action-button* (Ctrl or STRG). The particular object is colored now and there is a number (only at weapons and runes/scrolls). Pay attention to the weapons/runes/scrolls that you have enough strength, dexterity or mana to use it. If you don´t have enough attributes then you can´t use it. Weapons and runes/scrolls always are given a number. <br>1 - Melee weapon (sword etc.) <br>2 - Ranged weapon (bow, crossbow) <br>4-0 - Spells (runes or scrolls) <br>3 - Last used spell is activated/deactivated. <br>You can take off objects just like you put them on. But the difference is that the object isn´t colored any more and doesn't have a number anymore." };
DATA[DATA.length] = { pic: "guide_handling/amulettanlegen_eng.jpg" };

DATA[DATA.length] = { section: "Hunting trophies" };
DATA[DATA.length] = { headline: "How can I take animals trophies?" };
DATA[DATA.length] = { id: "handling_13", text: "Take the dead animal/monster into your focus and press the *action-button* to see the inventory of the creature. Now you can take all things into your inventory just like in trade mode. You can only take animals trophies of an animal or a monster when you have learned the correct hunting skill." };
DATA[DATA.length] = { pic: "guide_handling/jagdtrophae_eng.jpg" };

DATA[DATA.length] = { section: "Laddern" };
DATA[DATA.length] = { headline: "How can I use a ladder?" };
DATA[DATA.length] = { id: "handling_15", text: "To use a ladder you must be very close to it. Then you must use your action-button (STRG and/or right mouse button). If you stand at the top of the ladder then you must do the same. You must use your action-button and W or direction key to climb up and S or direction key to climb down until you have reached the end of the ladder. If you want to change the direction then press the opposite direction key and you will climb up or down." };
DATA[DATA.length] = { pic: "guide_handling/Leiter_eng.jpg" };

DATA[DATA.length] = { section: "Treasure" };
DATA[DATA.length] = { headline: "How can I dig out treasures?" };
DATA[DATA.length] = { id: "handling_16", text: "Go to a red cross which is on the ground and have it in your focus. This marked a treasure place. Now you must press your action button and the hero will dig out the treasure with a pick-axe.<br>You need a pick-axe in your inventory to dig out! <br>After some seconds the treasure appears and you can take the items." };
DATA[DATA.length] = { pic: "guide_handling/Graben_eng.jpg" };

DATA[DATA.length] = { section: "Dig gold" };
DATA[DATA.length] = { headline: "How can I dig the gold in the mine?" };
DATA[DATA.length] = { id: "handling_17", text: "To dig gold in the mine you must be sure that you understand something about digging. You should talk about digging with the diggers before Snaf's tavern. You get some good advices about digging. When you have killed <b>Esteban</b> you can go to <b>Thorus</b> with Esteban's red stone tablets. You need 3 diggers now who you must send into the mine. Everyone of these 3 diggers tells you something more about digging gold. If you go into the mine now then you can get a pick-axe from <b>Scatty</b> who can improve your digging skill (2LP for 10%). You get experience, too, when you picking gold. <br>To picking gold you must have the gold into your focus and use the action button on it. You can also make a really good whack. With a little luck, you'll get several chunks at once that way. After several hacks the lump of gold is empty and you must search a new one. You can trade the gold nuggets with the goldsmith in the mine." };
DATA[DATA.length] = { pic: "guide_handling/Goldhacken_eng.jpg" };

DATA[DATA.length] = { section: "Diving" };
DATA[DATA.length] = { headline: "How can I dive?" };
DATA[DATA.length] = { id: "handling_18", text: "You must be in water which is a little bit deeper than normal. Press your action-button or jump button (ALT). There is now a green display which shows you how long the hero can dive. If the color change to yellow then you lost hitpoints until you are dead. To move you must press the jump button (ALT). Use arrow keys to change your direction. If you want to leave the water you must press the jump button + arrow key top." };
DATA[DATA.length] = { pic: "guide_handling/Tauchen_eng.jpg" };

DATA[DATA.length] = { section: "Teleporter" };
DATA[DATA.length] = { headline: "How can I activate the teleporters?" };
DATA[DATA.length] = { id: "handling_19", pic: "guide_handling/fokusstein.jpg", text: "You need a focus stone to activate a teleporter. You get them from <b>Merdarion</b> (quest <b>'The power of the focus stones'</b>). You must recline the focus stone on a socket which is in the near of each teleporter. If the focus stone is on the socket the teleporter will be activated and you can use the teleporter. There are follow teleporter: <ul><li><b>Teleporter in the portal building</b> <li><b>Teleporter in the canyon</b> <li><b>Teleporter in the swamp</b> <li><b>Teleporter in the bandits camp</b> und <li><b>Teleporter near the Hermit</b></ul>." };
DATA[DATA.length] = { pic: "guide_handling/sockel_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/teleporter_eng.jpg" };
