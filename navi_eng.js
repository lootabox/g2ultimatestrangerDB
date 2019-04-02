var NAVI = new Array();

NAVI[NAVI.length] = {name:'Ultimate Stranger', url:'menu_eng.htm?data=data_guide_eng.js&', data:'data_guide_eng.js'};
//NAVI[NAVI.length] = {name:'Quests', url:'menu_eng.htm?data=data_quest_eng.js&', data:'data_quest_eng.js'};
//NAVI[NAVI.length] = {name:'Persons', url:'menu_eng.htm?data=data_npc_eng.js&', data:'data_npc_eng.js'};
//NAVI[NAVI.length] = {name:'Locations', url:'menu_eng.htm?data=data_orte_eng.js&', data:'data_orte_eng.js'};
//NAVI[NAVI.length] = {name:'Maps', url:'menu_eng.htm?data=data_map_eng.js&', data:'data_map_eng.js'};


function GetNavIndex()
{
	if (PARAM.data)
	{
		for (i=0; i < NAVI.length; ++i)
		{
			if (PARAM.data == NAVI[i].data)
			{
				return i;
			}
		};
	}

	return 0;
}

var g_NavIndex = GetNavIndex();