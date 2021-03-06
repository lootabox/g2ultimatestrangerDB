
DATA[DATA.length] = { section: "Progression and scaling" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_0_1", text: "Gothic 1 and 2 had scaling of all attributes and talents up to 100, with limited ways of increasing them besides visiting trainers. In Night of the Raven there are many more ways to bloat the numbers besides training, all the way up to 200. This makes the game harder to balance throughout an entire playthrough. One of the main changes in this mod is changing the hero, equipment, consumable, spell and monster progression back to pre-addon progression, while still keeping the addon in the game in its entirety." };
DATA[DATA.length] = { id: "handling_0_2", text: "Because the addon adds many new sources of experience and the mods addition of Gothic 1 areas to Valley of Mines also adds more monsters to fight, the level progression must be slowed down. This is accomplished by reducing the experience gained from combat." };
DATA[DATA.length] = { id: "handling_0_4", text: "Using consumables granting permanent bonuses before reaching high numbers in those attributes and talents felt punishing. Now consumables and equipment bonuses have no effect on the cost of training anymore. Because of this change, and the addition of stone tablets in the addon, the attribute and talent progression must be slowed down. For strength and dexterity the training costs become expensive more quickly. For combat talents the requirement of training a related talent is brought back. These are balanced around having the level progression also slowed down. In addition, stone tablet bonuses are reduced." };
DATA[DATA.length] = { id: "handling_0_3", text: "The purpose of these changes is to make the game feel challenging from start to finish. Usually in Night of the Raven the game becomes easier towards the end. Slowing down level, attribute and talent progression already makes the late game more challenging, but additional options are given for more experienced players to make the game even more difficult. Changing these options has no effect on existing saves." };
DATA[DATA.length] = { headline: "Summary" };
DATA[DATA.length] = { id: "handling_0_4", text: "<li>Equipment, consumables, spells and monsters are scaled to pre-addon levels.</li><li>Experience gain from combat is reduced by 50%.</li><li>Strength and Dexterity cost 1 more LP for every 20 points trained (instead of 30).</li><li>Talents are learned in relation to each other; one cannot be less than half of the other.</li><li>Training costs and limits are not influenced by consumable or equipment bonuses.</li><li>Stone tablets bonuses are reduced.</li><li>Additional challenge can be toggled in game options, but only for new games.</li>" };



DATA[DATA.length] = { section: "Alchemy" };
DATA[DATA.length] = { headline: "Alchemy changes" };
DATA[DATA.length] = { id: "handling_1", text: "<li>Alchemist's bench does not automatically kick you out of the dialog, unless completely out of Lab Water Bottles.</li><li>It is possible to create Double Apple tobacco.</li>" };
DATA[DATA.length] = { pic: "guide_handling/Alchemietisch_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/Alchemietischbenutzung_eng.jpg" };

DATA[DATA.length] = { section: "Smithing" };
DATA[DATA.length] = { headline: "Smithing changes" };
DATA[DATA.length] = { id: "handling_14", text: "<li>Anvil does not kick you out of the dialog, unless out of Red Hot Steel.</li><li>Ore weapon forging option is visible only after learning the skill.</li><li>When missing production items and failing to craft something, the anvil gives back Red Hot Steel instead of Raw Steel.</li><li>You don´t need the bucket and the grindstone anymore like in Gothic 1.</li>" };
DATA[DATA.length] = { pic: "guide_handling/schmiedefeuer_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/schmiedenamboss_eng.jpg" };

DATA[DATA.length] = { section: "Damage types and protection" };
DATA[DATA.length] = { headline: "Weapons" };
DATA[DATA.length] = { id: "handling_20_1", text: "The damage type for blunt was present in the game, but was not shown on items. Now all weapons clearly note whether they deal blunt, edge or point damage. Point damage is still better against most animals while blunt damage is good against few golems. As an added incentive to use blunt weapons skeletons are weaker against blunt damage now as well." };
DATA[DATA.length] = { id: "handling_20_2", text: "In the base game arrow and weapon protection had almost always identical values on any armor. In addition, protection against arrows had similar presence in jewelry items despite being comparably more situational. Now these two protections are both combined under weapon protection. This protects against any weapon damage, the distinction of blunt/edge/point is only relevant against non-human enemies." };
DATA[DATA.length] = { headline: "Monsters" };
DATA[DATA.length] = { id: "handling_20_3", text: "Simply removing one protection type would take some customization from equipment away, so a new protection type is introduced for protection against Monsters. It protects against any animal or monster attacks, i.e. attacks that were not made with a weapon. Humans using unarmed also deal monster type damage." };
DATA[DATA.length] = { headline: "Magic" };
DATA[DATA.length] = { id: "handling_20_4", text: "In the base game some spells dealt other damage types than magic and spells of certain elements could deal doubled or halved damage against certain few monsters. This made some spells very strong and others nearly useless against those enemies. All spells now deal magic damage and the element mechanic is now revised so that enemies instead have halved or doubled magic protection against these subtypes. In general, monsters have had increased magic protection and most of them now have a weakness, so having a larger variety of spells is now key to playing a mage efficiently. Human enemies have no such weaknesses and their magic protection is simply determined by their armor." };
DATA[DATA.length] = { headline: "Dragon Fire" };
DATA[DATA.length] = { id: "handling_20_5", text: "It was not necessarily clear in the base game as to what does fire protection protect against. Fire protection is renamed to dragon fire protection and fire lizards are classified as dragon's distant cousins. Thus only dragons and fire lizards deal dragon fire damage with their attacks, including the spells dragons cast." };

DATA[DATA.length] = { section: "Weapon damage calculation" };
DATA[DATA.length] = { headline: "Classic melee" };
DATA[DATA.length] = { id: "handling_21_1", text: "Damage calculation in Gothic 2 with or without addon was as follows:<br>Base damage: <i>Weapon damage + Strength</i><br>Normal hits: <i>(Base damage - 1) / 10 - Protection</i><br>Critical hits: <i>Base damage - Protection</i><br>Minimum damage of 5." };
DATA[DATA.length] = { id: "handling_21_1", text: "This calculation has some issues:<br><b>Issue 1:</b> This calculation creates very volatile combat flow where a fight seemingly going well can end in one hit or take forever when fighting an enemy that can only barely be damaged with critical hits.<br><b>Issue 2:</b> Minimum damage allowed taking down strong enemies with weakest weapon of the game at level 1.<br><b>Issue 3:</b> There was no incentive to executing combos given the risk of getting hit. This made side swings superior in almost any situation. " };
DATA[DATA.length] = { headline: "Melee changes" };
DATA[DATA.length] = { id: "handling_21_2", text: "Damage calculation with this mod:<br>Base damage: <i>Weapon damage + Strength - Protection</i><br>Normal hit: <i>Base damage * (10% + 10% per combo) [20%, 30%, 40%, 50%]</i><br>Critical hit: <i>Base damage * (10% + 10% per combo) * 2</i><br>No minimum damage. (note: this applies only for the hero)" };
DATA[DATA.length] = { id: "handling_21_4", text: "With this all issues should be covered:<br><b>Issue 1:</b> Since protection is part of the base damage and critical hits multiply the damage after that combat should be less volatile. The hero should be less likely to get instantly knocked out from full life. Fighting strong opponents the hero should be dealing overall more damage and with a more consistent pace.<br><b>Issue 2:</b> If an enemy is not damaged by the first hit the player knows that they will not be damaged by any following hit. This means that certain enemies must be avoided until the hero is strong enough and better equipped.</b><br><b>Issue 3:</b> Side swings now deal <i>20% / 40%</i> damage (normal / critical hit) compared to previous <i>10% / 100%</i>. Combos are now the main way to deal damage beyond that.</b>" };

DATA[DATA.length] = { section: "Magic" };
DATA[DATA.length] = { id: "handling_2_1", text: "Magic and spells have had extensive changes made to them. Spells had many unused and broken mechanics as well as interactions that were often not obvious to the player. The general changes aim to make these interactions more intuitive and also to bring back some of the unused and broken mechanics, as well as to introduce some new mechanics to the game. Additional changes were made to improve balance between spells, to ensure no spells are completely pointless and to improve quality of life for spell use. Spell properties are more clearly noted in the items used to cast them. Specific spell changes can be seen in Magic tab (left menu)." };
DATA[DATA.length] = { headline: "Fire spells" };
DATA[DATA.length] = { id: "handling_2_3", text: "Ice based and most furred monsters are weak, while fire based monsters are resistant against fire spells. There were unused mechanics dating back to Gothic I that set creatures on fire dealing damage over time, while also freezing them. This mechanic has been revised so that the spells deal half of their damage over time, but without freezing the target." };
DATA[DATA.length] = { headline: "Ice spells" };
DATA[DATA.length] = { id: "handling_2_4", text: "Fire based and most furless monsters are weak, while ice based monsters are resistant against ice spells. These spells in the base game used to deal more damage at a slightly higher mana cost. This design stills holds true and given the changes to fire spells the ice spells now also have the advantage of dealing all of their damage instantly. And no, the two freezing spells are not as powerful due to changes to damage over time mechanics (see below) and large targets cannot be frozen at all." };
DATA[DATA.length] = { headline: "Lightning spells" };
DATA[DATA.length] = { id: "handling_2_5", text: "Water based, plated and armored monsters are weak, while no monsters are resistant against lightning spells. Additionally any creature wading, swimming or diving are considered weak against them. There were also unused mechanics for stunning targets with lightning spells. This is very powerful, so for balance reasons this only occurs against unharmed targets." };
DATA[DATA.length] = { headline: "Water spells" };
DATA[DATA.length] = { id: "handling_2_6", text: "Fire based and flying monsters are weak, while no monsters are resistant against water spells. Dragons are not considered flying monsters. This niche spell type was weak and had no noteworthy mechanics, other than that one of the spells did nothing against large targets. Both spells now work against large targets and have some utility besides dealing damage against non-large targets." };
DATA[DATA.length] = { pic: "guide_handling/Runenbenutzung_eng.jpg" };
DATA[DATA.length] = { headline: "Damage over time mechanics" };
DATA[DATA.length] = { id: "handling_2_7", text: "Damage over time from spells no longer ignores magic protection. The instant damage portion of a spell is reduced by magic protection first, while any damage over time portion is reduced by the remaining magic protection (if any). Each spell dealing damage over time has either a static duration or static damage per second. If magic protection reduces the damage to be dealt over time, the spell either deals damage slower or has less duration, depending on which part is static." };
DATA[DATA.length] = { headline: "Chargeable spells" };
DATA[DATA.length] = { id: "handling_2_8", text: "Chargeable spells start at tier 1 and immediately begin charging the next tier. The spell is automatically cast off when trying to advance a tier without having enough mana or by trying to advance to a tier above the maximum. Mana is removed and damage increased only upon reaching a tier. Chargeable spells cannot be cast without having enough mana for at least tier 1. Scrolls use scroll mana cost per tier." };
DATA[DATA.length] = { headline: "Summoning spells" };
DATA[DATA.length] = { id: "handling_2_9", text: "Summoned creatures can be summoned at a specific position further away from the hero. They cost less mana and last a much shorter time now. These changes aim to make usage of summons more dynamic and offensive. Additionally summons can be charged up one tier for a more powerful summon." };
DATA[DATA.length] = { headline: "Spell scrolls" };
DATA[DATA.length] = { id: "handling_2_10", text: "In Gothic II classic the scroll mana cost was equal to rune mana cost, but in the Night of the Raven it is always 5. Both approaches have their merits so scrolls now cost roughly half as much mana to cast as the runes." };
DATA[DATA.length] = { pic: "guide_handling/Zauber_eng.jpg" };
DATA[DATA.length] = { headline: "Beliar spells" };
DATA[DATA.length] = { id: "handling_2_11", text: "Beliar spells are no longer mage exclusive nor somehow created from the Claw of Beliar without any explanation. They can now be found in the world in place of regular runes and can be used by anyone, but their mana cost is also reduced from caster life. Wielding the Claw of Beliar negates this downside." };
DATA[DATA.length] = { headline: "Paladin spells" };
DATA[DATA.length] = { id: "handling_2_12", text: "Paladin spells now require Learning Points when they are granted by Albrecth. The highest tier healing and combat runes are also available from Albrecth." };
DATA[DATA.length] = { headline: "Teleport spells" };
DATA[DATA.length] = { id: "handling_2_13", text: "Valley of Mines teleportation stones are now more difficult to reach before Chapter 4. This makes Chapter 2 more intense and makes the beginning of Chapter 4 flow a bit better." };
DATA[DATA.length] = { headline: "Transformation spells" };
DATA[DATA.length] = { id: "handling_2_14", text: "Only animals and evil races can be fooled by transformation. In addition to that, orc shamans and seekers see through the transformation. Transformation scrolls now have different mana costs similar to Gothic II classic. The spells are no longer targeted. Player weapon talents are not messed up during transformation and hitpoints are updated correctly in the case of level up during transformation." };

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
DATA[DATA.length] = { id: "handling_8", text: "Specific gold amounts cannot be donated anymore. Instead for every level gained a donation can be made for an attribute bonus. The amount of gold required depends on shrine donations made and hero level. This means there is no need not visit the Shrine every day, but it is still encouraged to visit the shrines often to save gold. The bonus is not tied to guilds in any way and the different attributes get bonuses inline with each other (pseudo random).<ul><li>20% chance: +1 Strength (max 10)<li>20% chance: +1 Dexterity (max 10)<li>20% chance: +2 Mana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(max 10)<li>40% chance: +3 Hitpoints (max 20)</ul>Additionally, the hero can pray for full health or mana once per day." };
DATA[DATA.length] = { headline: "Shrine of Beliar" };
DATA[DATA.length] = { pic: "guide_handling/beten_beliar.jpg" };
DATA[DATA.length] = { id: "handling_8", text: "Praying on shrines of Beliar is like praying on shrines of Innos. Praying:<ul><ul><li><b>- 1 life energy:</b> 50 gold <li><b>- 5 life energy:</b> 250 gold <li><b>- 10 life energy:</b> 500 gold </ul>You can donate maximum 60 life energy. Or you can donate<ul><li><b>- 1 mana:</b> 500 gold </ul>But you can donate maximum 11 mana. <ul><li><b>- if you donate nothing:</b> the hero get damage (20% of the current life energy) </ul></ul>If you donate more than one time a day then the hero takes damage (20% of the current life energy) and you lost your donation. When you have only 2 life energy praying will be aborted (you do not lose the donation; hero does not take damage)." };

DATA[DATA.length] = { section: "Bed & Sleeping" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_9", text: "<li>If prevented from resting properly time will not be fast forwarded.</li><li>Wounds will also prevent resting (below 50% life).</li><li>Lying down creates a fade to black effect, as originally intended.</li><li>Speed herb/potion effects end during sleep.</li>" };
DATA[DATA.length] = { pic: "guide_handling/schlafen_eng.jpg" };

DATA[DATA.length] = { section: "Keys and lockpicking" };
DATA[DATA.length] = { headline: "Lockpicking noise" };
DATA[DATA.length] = { id: "handling_4", pic: "guide_handling/Schluessel_eng.jpg", text: "Turning a lockpick too frequently causes noise and too much noise will be noticed. Breaking a lockpick causes more noise and has a chance to always be noticed. Having the Sneak talent halves both the amount of noise created and the chance of being noticed if the lockpick breaks." };
DATA[DATA.length] = { pic: "guide_handling/Truhe_eng.jpg" };

DATA[DATA.length] = { section: "Gold Mining" };
DATA[DATA.length] = { headline: "Changes" };
DATA[DATA.length] = { id: "handling_17", text: "<ul><li>Reduced maximum gold digging attemps for deposits with many attempts, thus reducing maximum potential gold nugget gain from mining.</li><li>Small chops always have a chance of failing, thus presenting more chances to use big chops even with high gold digging ability.</li><li></li><li></li>" };
DATA[DATA.length] = { pic: "guide_handling/Goldhacken_eng.jpg" };

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

DATA[DATA.length] = { section: "Diving" };
DATA[DATA.length] = { headline: "How can I dive?" };
DATA[DATA.length] = { id: "handling_18", text: "You must be in water which is a little bit deeper than normal. Press your action-button or jump button (ALT). There is now a green display which shows you how long the hero can dive. If the color change to yellow then you lost hitpoints until you are dead. To move you must press the jump button (ALT). Use arrow keys to change your direction. If you want to leave the water you must press the jump button + arrow key top." };
DATA[DATA.length] = { pic: "guide_handling/Tauchen_eng.jpg" };

DATA[DATA.length] = { section: "Teleporter" };
DATA[DATA.length] = { headline: "How can I activate the teleporters?" };
DATA[DATA.length] = { id: "handling_19", pic: "guide_handling/fokusstein.jpg", text: "You need a focus stone to activate a teleporter. You get them from <b>Merdarion</b> (quest <b>'The power of the focus stones'</b>). You must recline the focus stone on a socket which is in the near of each teleporter. If the focus stone is on the socket the teleporter will be activated and you can use the teleporter. There are follow teleporter: <ul><li><b>Teleporter in the portal building</b> <li><b>Teleporter in the canyon</b> <li><b>Teleporter in the swamp</b> <li><b>Teleporter in the bandits camp</b> und <li><b>Teleporter near the Hermit</b></ul>." };
DATA[DATA.length] = { pic: "guide_handling/sockel_eng.jpg" };
DATA[DATA.length] = { pic: "guide_handling/teleporter_eng.jpg" };
