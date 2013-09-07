/*
Single Player Commands Give+
Made by Connor4898 & CheesyFriedBacon
Sprint script made by WhyToFu, modified by Connor4898

    © Copyright 2013 Connor4898 & CheesyFriedBacon
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/

var setHomeData = 0, bombMode = 0, bombSet = 0, portableDoorMode = 0, portableDoorSet = 0, portableDoorActive = 0, pDoorX, pDoorY, pDoorZ, pDoor, pDoor1, magicCarpet = 0, sprintMode = 0, Xpos = 0, Zpos = 0, sprintTick = 1, Xdiff = 0, Zdiff = 0, countdownMode = 0, countdown = 0, spawnTouch = 0, instabreakMode = 0, instabreakBlock, warpMode = 0, warpSetA1 = 0, warpA1X, warpA1Y, warpA1Z, warpSetA2 = 0, warpA2X, warpA2Y, warpA2Z, warpSetB1 = 0, warpB1X, warpB1Y, warpB1Z, warpSetB2 = 0, warpB2X, warpB2Y, warpB2Z, warpSetC1 = 0, warpC1X, warpC1Y, warpC1Z, warpSetC2 = 0, warpC2X, warpC2Y, warpC2Z, warpSetD1 = 0, warpD1X, warpD1Y, warpD1Z, warpSetD2 = 0, warpD2X, warpD2Y, warpD2Z;

function useItem(x,y,z,itemId,blockId) {
    if(bombMode == 1) {
        if((itemId == 280) || (itemId == 267)) {//stick and Iron sword
            bombX = x;
            bombY = y;
            bombZ = z;
            bombSet = 1;
            clientMessage("\nSet bomb at x: " + bombX + " y:" + bombY + " z:" + bombZ);
        }
    } if(portableDoorMode == 1) {
        if((itemId == 280) || (itemId == 292)) {//stick and Iron hoe
            pDoorX = x;
            pDoorY = y;
            pDoorY1 = y + 1;
            pDoorZ = z;
            portableDoorSet = 1;
            clientMessage("\nPortable Door set to x: " + pDoorX + "y: " + pDoorY + "/" + pDoorY1 + "z: " + pDoorZ);
        }
    } if(spawnTouch == 1) {
        if(itemId == 295) {
            spawnChicken(x,y+1,z);
        } if(itemId == 296) {
            spawnCow(x,y+1,z);
        }
    } if(instabreakMode == 1) {
        if(itemId == 285) {
            instabreakBlock = getTile(x,y,z);
            if(instabreakBlock != 1 && instabreakBlock != 2 && instabreakBlock != 7 && instabreakBlock != 16 && instabreakBlock != 18 && instabreakBlock != 20 && instabreakBlock != 21 && instabreakBlock != 30 && instabreakBlock != 31 && instabreakBlock != 43 && instabreakBlock != 47 && instabreakBlock != 56 && instabreakBlock != 59 && instabreakBlock != 60 && instabreakBlock != 62 && instabreakBlock != 63 && instabreakBlock != 64 && instabreakBlock != 68 && instabreakBlock != 71 && instabreakBlock != 73 && instabreakBlock != 74 && instabreakBlock != 78 && instabreakBlock != 79 && instabreakBlock != 82 && instabreakBlock != 83 && instabreakBlock != 89 && instabreakBlock != 95 && instabreakBlock != 102 && instabreakBlock != 103 && instabreakBlock != 105 && instabreakBlock != 157 && instabreakBlock != 246) {
                addItemInventory(instabreakBlock,1);
            } if(instabreakBlock == 1) {
                addItemInventory(4,1);
            } if(instabreakBlock == 2) {
                addItemInventory(3,1);
            } if(instabreakBlock == 16) {
                addItemInventory(263,1);
            } if(instabreakBlock == 43) {
                addItemInventory(44,2);
            } if(instabreakBlock == 47) {
                addItemInventory(340,3);
            } if(instabreakBlock == 56) {
                addItemInventory(264,1);
            } if(instabreakBlock == 60) {
                addItemInventory(3,1);
            } if(instabreakBlock == 62) {
                addItemInventory(61,1);
            } if(instabreakBlock == 63) {
                addItemInventory(323,1);
            } if(instabreakBlock == 64) {
                addItemInventory(324,1);
            } if(instabreakBlock == 68) {
                addItemInventory(323,1);
            } if(instabreakBlock == 78) {
                addItemInventory(332,1);
            } if(instabreakBlock == 82) {
                addItemInventory(337,3);
            } if(instabreakBlock == 83) {
                addItemInventory(338,1);
            } if(instabreakBlock == 89) {
                addItemInventory(348,3);
            } if(instabreakBlock == 157) {
                addItemInventory(158,2);
            } if(instabreakBlock == 103) {
                addItemInventory(360,4);
            } if(instabreakBlock == 246) {
                addItemInventory(49,1);
            } if(instabreakBlock != 7) {
                setTile(x,y,z,0);
            }
        }
    } if(warpMode == 1) {
        if(itemId == 341 || itemId == 267) {//Slimeball and Iron sword
            if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 57) {
                if(Math.floor(getPlayerX()) == warpA2X && Math.floor(getPlayerY()) - 2 == warpA2Y && Math.floor(getPlayerZ()) == warpA2Z) {
                    if(warpSetA1 == 1) {
                        setPosition(getPlayerEnt(), warpA1X + 0.5, warpA1Y + 3, warpA1Z + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == warpA1X && Math.floor(getPlayerY()) - 2 == warpA1Y && Math.floor(getPlayerZ()) == warpA1Z) {
                    if(warpSetA2 == 1) {
                        setPosition(getPlayerEnt(), warpA2X + 0.5, warpA2Y + 3, warpA2Z + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 41) {
                if(Math.floor(getPlayerX()) == warpB2X && Math.floor(getPlayerY()) - 2 == warpB2Y && Math.floor(getPlayerZ()) == warpB2Z) {
                    if(warpSetB1 == 1) {
                        setPosition(getPlayerEnt(), warpB1X + 0.5, warpB1Y + 3, warpB1Z + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == warpB1X && Math.floor(getPlayerY()) - 2 == warpB1Y && Math.floor(getPlayerZ()) == warpB1Z) {
                    if(warpSetB2 == 1) {
                        setPosition(getPlayerEnt(), warpB2X + 0.5, warpB2Y + 3, warpB2Z + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 42) {
                if(Math.floor(getPlayerX()) == warpC2X && Math.floor(getPlayerY()) - 2 == warpC2Y && Math.floor(getPlayerZ()) == warpC2Z) {
                    if(warpSetC1 == 1) {
                        setPosition(getPlayerEnt(), warpC1X + 0.5, warpC1Y + 3, warpC1Z + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == warpC1X && Math.floor(getPlayerY()) - 2 == warpC1Y && Math.floor(getPlayerZ()) == warpC1Z) {
                    if(warpSetC2 == 1) {
                        setPosition(getPlayerEnt(), warpC2X + 0.5, warpC2Y + 3, warpC2Z + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 22) {
                if(Math.floor(getPlayerX()) == warpD2X && Math.floor(getPlayerY()) - 2 == warpD2Y && Math.floor(getPlayerZ()) == warpD2Z) {
                    if(warpSetD1 == 1) {
                        setPosition(getPlayerEnt(), warpD1X + 0.5, warpD1Y + 3, warpD1Z + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == warpD1X && Math.floor(getPlayerY()) - 2 == warpD1Y && Math.floor(getPlayerZ()) == warpD1Z) {
                    if(warpSetD2 == 1) {
                        setPosition(getPlayerEnt(), warpD2X + 0.5, warpD2Y + 3, warpD2Z + 0.5);
                    }
                }
            }
        } if(itemId == 293 || itemId == 292) {//Diamond and Iron hoe
            if(blockId == 57) {
                warpSetA1 = 1;
                warpA1X = x;
                warpA1Y = y;
                warpA1Z = z;
                clientMessage("A1 set!");
            } if(blockId == 41) {
                warpSetB1 = 1;
                warpB1X = x;
                warpB1Y = y;
                warpB1Z = z;
                clientMessage("B1 set!");
            } if(blockId == 42) {
                warpSetC1 = 1;
                warpC1X = x;
                warpC1Y = y;
                warpC1Z = z;
                clientMessage("C1 set!");
            } if(blockId == 22) {
                warpSetD1 = 1;
                warpD1X = x;
                warpD1Y = y;
                warpD1Z = z;
                clientMessage("D1 set!");
            }
        } if(itemId == 294 || itemId == 261) {//Gold hoe and Bow
            if(blockId == 57) {
                warpSetA2 = 1;
                warpA2X = x;
                warpA2Y = y;
                warpA2Z = z;
                clientMessage("A2 set!");
            } if(blockId == 41) {
                warpSetB2 = 1;
                warpB2X = x;
                warpB2Y = y;
                warpB2Z = z;
                clientMessage("B2 set!");
            } if(blockId == 42) {
                warpSetC2 = 1;
                warpC2X = x;
                warpC2Y = y;
                warpC2Z = z;
                clientMessage("C2 set!");
            } if(blockId == 22) {
                warpSetD2 = 1;
                warpD2X = x;
                warpD2Y = y;
                warpD2Z = z;
                clientMessage("D2 set!");
            }
        }
    }
}


function procCmd(c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'commands': {
            clientMessage("\nCommands:n/commands, /help <command>, /explode, /give, /ignite, /tp, /sethome, /home, /delhome, /bomb, /pdoor, /mc, /sprint, /hole, /spawn, /rain, /nuke, /instabreak, /warp, /surface, /refresh\nMade by CheesyFriedBacon and Connor4898");
            break;
        } case 'help': {
            switch(p[1]) {
                case 'commands': {
                    clientMessage("\nType /commands to show all of the available commands");
                    break;
                } case 'explode': {
                    clientMessage("\nType /explode Radius to blow up. WARNING: It may hurt");
                    break;
                } case 'give': {
                    clientMessage("\nType /give ItemID Amount. eg: /give 57 1");
                    break;
                } case 'ignite': {
                    clientMessage("\nType /ignite to set the ground underneath you on fire. WARNING: High chance of burning");
                    break;
                } case 'tp': {
                    clientMessage("\nType /tp x y z, where x, y, and z are your desired coordinates");
                    break;
                } case 'coords': {
                    clientMessage("\nType /coords to get the current coordinates at your feet.");
                    break;
                } case 'sethome': {
                    clientMessage("\nType /sethome to set coordinates you can easily tp back to using /home!");
                    break;
                } case 'home': {
                    clientMessage("\nType /home to tp to your home!");
                    break;
                } case 'delhome': {
                    clientMessage("\nType /delhome to delete your current home coordinates");
                    break;
                } case 'bomb': {
                    clientMessage("\nType /bomb on|off|detonate. Use a stick or Iron sword as the bomb setter, when bomb mode is on. WARNING: May be explosive!");
                    break;
                } case 'pdoor': {
                    clientMessage("\nType /pdoor on|off|open|close. Use a stick or Iron hoe to set the position of the door.");
                    break;
                } case 'mc': {
                    clientMessage("\nType /mc on|off to activate or deactivate the Magic Carpet.");
                    break;
                } case 'sprint': {
                    clientMessage("\nType /sprint on|off to activate or deactivate Sprint Mode! Original Sprint Script made by WhyToFu.");
                    break;
                } case 'bounce': {
                    clientMessage("\nTtype /bounce Power to jump really high!")
                    break;
                } case 'hole': {
                    clientMessage("\nType /hole to commit suicide. WARNING: USE WITH CAUTION!");
                    break;
                } case 'rain': {
                    clientMessage("\nType /rain chicken|cow to make it rain animals!");
                    break;
                } case 'spawn': {
                    clientMessage("\nType /spawn on|off to turn Spawn Touch on or off.");
                    break;
                } case 'nuke': {
                    clientMessage("\nType /nuke to cause a MAHOOSIVE explosion!");
                    break;
                } case 'instabreak': {
                    clientMessage("\nType /instabreak on|off to turn InstaBreak on or off.")
                    break;
                } case 'warp': {
                    clientMessage("\nType /warp on|off to turn Warp Panels on or off.");
                    break;
                } case 'surface': {
                    clientMessage("\nType /surface to teleport to the surface above you.");
                    break;
                } case 'refresh': {
                    clientMessage("\nType /refresh to regain all items required for currently active commands.");
                    break;
                } default: {
                    clientMessage("\nCommands:/commands, /help <command>, /explode, /give, /ignite, /tp, /sethome, /home, /delhome, /bomb, /pdoor, /mc, /sprint, /hole, /spawn, /rain, /nuke, /instabreak, /warp, /surface, /refresh\nMade by CheesyFriedBacon and Connor4898");
                    break;
                }
            }
            break;
        } case 'give': {
            if(p[1] == 'stone') {
                addItemInventory(1,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'grass') {
                addItemInventory(2,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'dirt') {
                addItemInventory(3,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cobblestone' || p[1] == 'cobble') {
                addItemInventory(4,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'plank' || p[1] == 'planks' || p[1] == 'wooden_plank' || p[1] == 'wooden_planks') {
                addItemInventory(5,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sapling' || p[1] == 'saplings') {
                addItemInventory(6,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bedrock') {
                addItemInventory(7,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'water') {
                addItemInventory(8,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'still_water') {
                addItemInventory(9,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'lava') {
                addItemInventory(10,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'still_lava') {
                addItemInventory(11,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sand') {
                addItemInventory(12,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gravel') {
                addItemInventory(13,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_ore') {
                addItemInventory(14,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_ore') {
                addItemInventory(15,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'coal_ore') {
                addItemInventory(16,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wood' || p[1] == 'trunk') {
                addItemInventory(17,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'leave' || p[1] == 'leaves') {
                addItemInventory(18,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glass') {
                addItemInventory(20,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'lapis_ore') {
                addItemInventory(21,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'lapis_block') {
                addItemInventory(22,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sandstone') {
                addItemInventory(24,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bed_block') {
                addItemInventory(26,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cobweb') {
                addItemInventory(30,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'tall_grass') {
                addItemInventory(31,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bush' || p[1] == 'dead_bush') {
                addItemInventory(32,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wool') {
                addItemInventory(35,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'dandelion') {
                addItemInventory(37,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'rose' || p[1] == 'cyan_flower') {
                addItemInventory(38,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'brown_mushroom') {
                addItemInventory(39,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'red_mushroom') {
                addItemInventory(40,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_block') {
                addItemInventory(41,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_block') {
                addItemInventory(42,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'double_slab' || p[1] == 'double_slabs') {
                addItemInventory(43,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'slab' || p[1] == 'slabs') {
                addItemInventory(44,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bricks' || p[1] == 'bricks_block') {
                addItemInventory(45,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'tnt') {
                addItemInventory(46,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bookshelf') {
                addItemInventory(47,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'moss_stone' || p[1] == 'mossy_stone') {
                addItemInventory(48,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'obsidian') {
                addItemInventory(49,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'torch') {
                addItemInventory(50,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'fire') {
                addItemInventory(51,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wood_stairs' || p[1] == 'wooden_stairs') {
                addItemInventory(53,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'chest') {
                addItemInventory(54,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_ore') {
                addItemInventory(56,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_block') {
                addItemInventory(57,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'crafting_table' || p[1] == 'workbench') {
                addItemInventory(58,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wheat_block') {
                addItemInventory(58,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'farmland') {
                addItemInventory(60,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'furnace') {
                addItemInventory(61,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'burning_furnace' || p[1] == 'lit_furnace') {
                addItemInventory(62,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sign_post') {
                addItemInventory(63,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'door_block' || p[1] == 'wood_door_block' || p[1] == 'wooden_door_block') {
                addItemInventory(64,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'ladder') {
                addItemInventory(65,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cobble_stairs' || p[1] == 'cobblestone_stairs') {
                addItemInventory(67,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wall_sign') {
                addItemInventory(68,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_door_block') {
                addItemInventory(71,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'redstone_ore') {
                addItemInventory(73,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glowing_redstone_ore' || p[1] == 'lit_redstone_ore') {
                addItemInventory(74,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'snow' || p[1] == 'snow_layer') {
                addItemInventory(78,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'ice') {
                addItemInventory(79,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'snow_block') {
                addItemInventory(80,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cactus') {
                addItemInventory(81,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'clay_block') {
                addItemInventory(82,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'reeds' || p[1] == 'sugarcane_block') {
                addItemInventory(83,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'fence') {
                addItemInventory(85,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'netherrack') {
                addItemInventory(87,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glowstone' || p[1] == 'glowstone_block') {
                addItemInventory(89,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cake_block') {
                addItemInventory(92,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'invisible_bedrock') {
                addItemInventory(95,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'trapdoor') {
                addItemInventory(96,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_brick' || p[1] == 'stone_bricks') {
                addItemInventory(98,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glass_pane' || p[1] == 'glass_panel') {
                addItemInventory(102,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'melon_block') {
                addItemInventory(103,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'melon_stem') {
                addItemInventory(105,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'fence_gate') {
                addItemInventory(107,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'brick_stairs' || p[1] == 'stone_brick_stairs') {
                addItemInventory(109,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'nether_bricks' || p[1] == 'nether_brick_block' || p[1] == 'nether_bricks_block') {
                addItemInventory(112,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'nether_brick_stairs' || p[1] == 'nether_bricks_stairs') {
                addItemInventory(114,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sandstone_stairs') {
                addItemInventory(128,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'quartz_block') {
                addItemInventory(155,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'quartz_stairs') {
                addItemInventory(156,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stonecutter') {
                addItemInventory(245,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glowing_obsidian') {
                addItemInventory(246,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'nether_reactor') {
                addItemInventory(247,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'update_block') {
                addItemInventory(248,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == '.name') {
                addItemInventory(255,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_shovel') {
                addItemInventory(256,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_pickaxe') {
                addItemInventory(257,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_axe') {
                addItemInventory(258,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'flint_steel' || p[1] == 'flint_and_steel') {
                addItemInventory(259,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'apple') {
                addItemInventory(260,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bow') {
                addItemInventory(261,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'arrow') {
                addItemInventory(262,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'coal') {
                addItemInventory(263,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond') {
                addItemInventory(264,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_ingot') {
                addItemInventory(265,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_ingot') {
                addItemInventory(266,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_sword') {
                addItemInventory(267,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wooden_sword' || p[1] == 'wood_sword') {
                addItemInventory(268,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wooden_shovel' || p[1] == 'wood_shovel') {
                addItemInventory(269,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wooden_axe' || p[1] == 'wood_axe') {
                addItemInventory(271,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_sword') {
                addItemInventory(272,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_shovel') {
                addItemInventory(273,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_pickaxe') {
                addItemInventory(274,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_axe') {
                addItemInventory(275,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_sword') {
                addItemInventory(276,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_shovel') {
                addItemInventory(277,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_pickaxe') {
                addItemInventory(278,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_axe') {
                addItemInventory(279,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stick') {
                addItemInventory(280,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bowl') {
                addItemInventory(281,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'mushroom_stew') {
                addItemInventory(282,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_sword' || p[1] == 'golden_sword') {
                addItemInventory(283,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_shovel' || p[1] == 'golden_shovel') {
                addItemInventory(284,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_pickaxe' || p[1] == 'golden_pickaxe') {
                addItemInventory(285,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_axe' || p[1] == 'golden_axe') {
                addItemInventory(286,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'string') {
                addItemInventory(287,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'feather') {
                addItemInventory(288,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gunpowder') {
                addItemInventory(289,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wood_hoe' || p[1] == 'wooden_hoe') {
                addItemInventory(290,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'stone_hoe') {
                addItemInventory(291,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_hoe') {
                addItemInventory(292,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_hoe' || p[1] == 'golden_hoe') {
                addItemInventory(294,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'seeds' || p[1] == 'wheat_seeds') {
                addItemInventory(295,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wheat') {
                addItemInventory(296,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bread') {
                addItemInventory(297,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'leather_cap' || p[1] == 'leather_hat' || p[1] == 'leather_helmet') {
                addItemInventory(298,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'leather_tunic' || p[1] == 'leather_chestplate') {
                addItemInventory(299,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'leather_pants' || p[1] == 'leather_leggings') {
                addItemInventory(300,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'leather_boots' || p[1] == 'leather_shoes') {
                addItemInventory(301,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'chain_helmet' || p[1] == 'chain_hat') {
                addItemInventory(302,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'chain_chestplate') {
                addItemInventory(303,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'chain_pants' || p[1] == 'chain_leggings') {
                addItemInventory(304,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'chain_boots' || p[1] == 'chain_shoes') {
                addItemInventory(305,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_helmet' || p[1] == 'iron_hat') {
                addItemInventory(306,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_chestplate') {
                addItemInventory(307,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_pants' || p[1] == 'iron_leggings') {
                addItemInventory(308,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_boots' || p[1] == 'iron_shoes') {
                addItemInventory(309,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_helmet' || p[1] == 'diamond_hat') {
                addItemInventory(310,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_chestplate') {
                addItemInventory(311,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_pants' || p[1] == 'diamond_leggings') {
                addItemInventory(312,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'diamond_boots' || p[1] == 'diamond_shoes') {
                addItemInventory(313,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_helmet' || p[1] == 'golden_helmet' || p[1] == 'gold_hat' || p[1] == 'gplden_hat') {
                addItemInventory(314,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_chestplate' || p[1] == 'golden_chestplate') {
                addItemInventory(315,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_pants' || p[1] == 'golden_pants' || p[1] == 'gold_leggings' || p[1] == 'golden_leggings') {
                addItemInventory(316,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'gold_boots' || p[1] == 'golden_boots' || p[1] == 'gold_shoes' || p[1] == 'golden_shoes') {
                addItemInventory(317,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'flint') {
                addItemInventory(318,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'raw_porkchop') {
                addItemInventory(319,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cooked_porkchop') {
                addItemInventory(320,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'painting') {
                addItemInventory(321,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sign') {
                addItemInventory(323,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'wood_door' || p[1] == 'wooden_door') {
                addItemInventory(324,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bucket') {
                addItemInventory(325,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'iron_door') {
                addItemInventory(330,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'snowball') {
                addItemInventory(332,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'brick') {
                addItemInventory(336,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'clay') {
                addItemInventory(337,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sugarcane' || p[1] == 'sugar_cane' || p[1] == 'sugar_canes') {
                addItemInventory(338,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'paper') {
                addItemInventory(339,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'slimeball') {
                addItemInventory(341,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'egg') {
                addItemInventory(344,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'compass') {
                addItemInventory(345,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'clock') {
                addItemInventory(347,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'glowstone_dust') {
                addItemInventory(348,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'dye') {
                addItemInventory(351,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bone') {
                addItemInventory(352,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'sugar') {
                addItemInventory(353,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cake') {
                addItemInventory(354,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'bed') {
                addItemInventory(355,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'shears') {
                addItemInventory(359,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'melon' || p[1] == 'melon_slice') {
                addItemInventory(360,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'melon_seeds') {
                addItemInventory(362,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'raw_beef') {
                addItemInventory(363,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'steak' || p[1] == 'cooked_beef') {
                addItemInventory(364,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'raw_chicken') {
                addItemInventory(365,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'cooked_chicken') {
                addItemInventory(366,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'spawn_egg') {
                addItemInventory(383,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'nether_brick') {
                addItemInventory(405,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'quartz' || p[1] == 'nether_quartz') {
                addItemInventory(406,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] == 'camera') {
                addItemInventory(456,p[2]);
                clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
            } if(p[1] >= 1) {
                if(p[1] == 1 || p[1] == 2 || p[1] == 3 || p[1] == 4 || p[1] == 5 || p[1] == 6 || p[1] == 7 || p[1] == 8 || p[1] == 9 || p[1] == 10 || p[1] == 11 || p[1] == 12 || p[1] == 13 || p[1] == 14 || p[1] == 15 || p[1] == 16 || p[1] == 17 || p[1] == 18 || p[1] == 20 || p[1] == 21 || p[1] == 22 || p[1] == 24 || p[1] == 26 || p[1] == 30 || p[1] == 31 || p[1] == 32 || p[1] == 35 || p[1] == 37 || p[1] == 38 || p[1] == 39 || p[1] == 40 || p[1] == 41 || p[1] == 42 || p[1] == 43 || p[1] == 44 || p[1] == 45 || p[1] == 46 || p[1] == 47 || p[1] == 48 || p[1] == 49 || p[1] == 50 || p[1] == 51 || p[1] == 53 || p[1] == 54 || p[1] == 56 || p[1] == 57 || p[1] == 58 || p[1] == 59 || p[1] == 60 || p[1] == 61 || p[1] == 62 || p[1] == 63 || p[1] == 64 || p[1] == 65 || p[1] == 67 || p[1] == 68 || p[1] == 71 || p[1] == 73 || p[1] == 74 || p[1] == 78 || p[1] == 79 || p[1] == 80 || p[1] == 81 || p[1] == 82 || p[1] == 83 || p[1] == 85 || p[1] == 87 || p[1] == 88 || p[1] == 89 || p[1] == 92 || p[1] == 95 || p[1] == 96 || p[1] == 98 || p[1] == 102 || p[1] == 103 || p[1] == 105 || p[1] == 107 || p[1] == 108 || p[1] == 109 || p[1] == 112 || p[1] == 114 || p[1] == 128 || p[1] == 155 || p[1] == 156 || p[1] == 245 || p[1] == 246 || p[1] == 247 || p[1] == 248 || p[1] == 255 || p[1] == 256 || p[1] == 257 || p[1] == 258 || p[1] == 259 || p[1] == 260 || p[1] == 261 || p[1] == 262 || p[1] == 263 || p[1] == 264 || p[1] == 265 || p[1] == 266 || p[1] == 267 || p[1] == 268 || p[1] == 269 || p[1] == 270 || p[1] == 271 || p[1] == 272 || p[1] == 273 || p[1] == 274 || p[1] == 275 || p[1] == 276 || p[1] == 277 || p[1] == 278 || p[1] == 279 || p[1] == 280 || p[1] == 281 || p[1] == 282 || p[1] == 283 || p[1] == 284 || p[1] == 285 || p[1] == 286 || p[1] == 287 || p[1] == 288 || p[1] == 289 || p[1] == 290 || p[1] == 291 || p[1] == 292 || p[1] == 293 || p[1] == 294 || p[1] == 295 || p[1] == 296 || p[1] == 297 || p[1] == 298 || p[1] == 299 || p[1] == 300 || p[1] == 301 || p[1] == 302 || p[1] == 303 || p[1] == 304 || p[1] == 305 || p[1] == 306 || p[1] == 307 || p[1] == 308 || p[1] == 309 || p[1] == 310 || p[1] == 311 || p[1] == 312 || p[1] == 313 || p[1] == 314 || p[1] == 315 || p[1] == 316 || p[1] == 317 || p[1] == 318 || p[1] == 319 || p[1] == 320 || p[1] == 321 || p[1] == 322 || p[1] == 323 || p[1] == 324 || p[1] == 325 || p[1] == 330 || p[1] == 332 || p[1] == 334 || p[1] == 336 || p[1] == 337 || p[1] == 338 || p[1] == 339 || p[1] == 341 || p[1] == 344 || p[1] == 345 || p[1] == 347 || p[1] == 348 || p[1] == 349 || p[1] == 351 || p[1] == 352 || p[1] == 353 || p[1] == 354 || p[1] == 355 || p[1] == 359 || p[1] == 360 || p[1] == 362 || p[1] == 363 || p[1] == 364 || p[1] == 365 || p[1] == 366 || p[1] == 383 || p[1] == 405 || p[1] == 406 || p[1] == 456) {
                    addItemInventory(p[1],p[2]);
                    clientMessage("\nSpawned " + p[2] + " of " + p[1] + "!");
                    break;
                } else {
                    clientMessage("\nItem/Block ID does not exist!")
                }
            }
            break;
        } case 'ignite': {
            setTile(getPlayerX(), getPlayerY()-1, getPlayerZ(), 51);
            break;
        } case 'tp': {
            setPosition(getPlayerEnt(), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
            clientMessage("\nTeleported to x: " + parseInt(p[1]) + ", y: " + parseInt(p[2]) + ", z: " + parseInt(p[3]));
            break;
        } case 'surface': {
            for(i=0;i<=128;i++) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } clientMessage("Teleported to the surface!");
            break;
        } case 'ascend': {
            for(i=1;i<=128;i++) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } clientMessage("Teleported to the floor above you!");
            break;
        } case 'descend': {
            for(i=1;i>=-128;i--) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } clientMessage("Teleported to the floor beneath you!");
            break;
        } case 'coords': {
            clientMessage("\nCurrent coordinates are:\nx: " + Math.floor(getPlayerX()) + " y: " + Math.floor(getPlayerY() - 1) + " z: " + Math.floor(getPlayerZ()));
            break;
        } case 'explode': {
            explode(getPlayerX(), getPlayerY(), getPlayerZ(), p[1]);
            break;
        } case 'sethome': {
            homeX = getPlayerX();
            homeY = getPlayerY();
            homeZ = getPlayerZ();
            setHomeData = 1;
            clientMessage("\nHome set to x: " + Math.floor(homeX) + ", y: " + Math.floor(homeY) + ", z: " + Math.floor(homeZ));
            break;
        } case 'delhome': {
            if(setHomeData == 1) {
                setHomeData = 0;
                clientMessage("\nHome successfully deleted!");
                break;
            } if(setHomeData == 0) {
                clientMessage("\nNo home is set!");
            }
            break;
        } case 'home': {
            if(setHomeData == 0) {
                clientMessage("\nNo home has been set!");
                break;
            } if(setHomeData == 1) {
                setPosition(getPlayerEnt(), homeX, homeY, homeZ);
                clientMessage("\nTeleported to home!");
            }
            break;
        } case 'mc': {
            if(p[1] == 'on') {
                if(magicCarpet == 1) {
                    clientMessage("\nMagic carpet is already active!");
                    break;
                } if(magicCarpet == 0) {
                    magicCarpet = 1;
                    clientMessage("\nMagic carpet activated!");
                }
            } if(p[1] == 'off') {
                if(magicCarpet == 0) {
                    clientMessage("\nMagic carpet is already off!");
                    break;
                } if(magicCarpet == 1) {
                    magicCarpet = 0;
                    clientMessage("\nMagic carpet disappeared!");
                    mcX = Math.floor(getPlayerX());
                    mcY = Math.floor(getPlayerY())-2;
                    mcZ = Math.floor(getPlayerZ());
                    for(j=-3;j<=3;j++) {
                        for(i=-3;i<=3;i++) {
                            if(j >= -2 && j <= 2) {
                                if(i >= -2 && i <= 2) {
                                    if(getTile(mcX+j,mcY,mcZ+i) == 20) {
                                        setTile(mcX+j,mcY,mcZ+i,0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            break;
        } case 'bounce': {
            if((!p[1]) || (p[1] < 1)) {
                clientMessage("\nUsage: /bounce <power>");
            } else if(p[1] >= 1) {
                setVelY(getPlayerEnt(),parseInt(p[1]));
            } else {
                clientMessage("\nThe bounce power must be a number!");
            }
            break;
        } case 'sprint': {
            if(p[1] == 'on') {
                if(sprintMode == 1) {
                    clientMessage("\nSprint Mode is already active!");
                    break;
                } if(sprintMode == 0) {
                    sprintMode = 1;
                    clientMessage("\nSprint Mode activated! Original Sprint Script made by WhyTuFu.");
                }
            } if(p[1] == 'off') {
                if(sprintMode == 0) {
                    clientMessage("\nSprint Mode is already off!");
                    break;
                } if(sprintMode == 1) {
                    sprintMode = 0;
                    clientMessage("\nSprint Mode deactivated!");
                }
            }
            break;
        } case 'hole': {
            holeX = Math.floor(getPlayerX());
            holeZ = Math.floor(getPlayerZ());
            for(a=0;a<=128;a++) {
                for(b=-1;b<=1;b++) {
                    for(c=-1;c<=1;c++) {
                        setTile(holeX+b,a,holeZ+c,0);
                    }
                }
            }
            clientMessage("\nGoodbye World");
            break;
        } case 'rain': {
            if(p[1] == 'chicken') {
                for(chickenX=-21;chickenX<=21;chickenX = chickenX + 3) {
                    for(chickenZ=-21;chickenZ<=21;chickenZ = chickenZ + 3) {
                        spawnChicken(getPlayerX()+chickenX,getPlayerY()+20,getPlayerZ()+chickenZ);
                    }
                }
                clientMessage("\nIT'S RAINING CHICKENS!!");
            } if(p[1] == 'cow') {
                for(cowX=-21;cowX<=21;cowX = cowX + 3) {
                    for(cowZ=-21;cowZ<=21;cowZ = cowZ + 3) {
                        spawnCow(getPlayerX()+cowX,getPlayerY()+15,getPlayerZ()+cowZ);
                    }
                }
                clientMessage("\nIT'S RAINING COWS!!");
            }
            break;
        } case 'spawn': {
            if(p[1] == 'on') {
                if(spawnTouch == 1) {
                    clientMessage("\nSpawn Touch is already on!");
                    break;
                } if(spawnTouch == 0) {
                    spawnTouch = 1;
                    addItemInventory(295,1);
                    addItemInventory(296,1);
                    clientMessage("\nSpawn Touch turned on!");
                }
            } if(p[1] == 'off') {
                if(spawnTouch == 0) {
                    clientMessage("\nSpawn Touch is already off!");
                    break;
                } if(spawnTouch == 1) {
                    spawnTouch = 0;
                    addItemInventory(295,-1);
                    addItemInventory(296,-1);
                    clientMessage("\nSpawn Touch turned off!");
                }
            }
            break;
        } case 'pdoor': {
            if(p[1] == 'on') {
                if(portableDoorMode == 1) {
                    clientMessage("\nPortable Door mode is already on!");
                } if(portableDoorMode == 0) {
                    portableDoorMode = 1;
                    addItemInventory(280,1);
                    clientMessage("\nPortable Door mode has been turned on!");
                }
            } if(p[1] == 'off') {
                if(portableDoorMode == 0) {
                    clientMessage("\nPortable Door mode is already off!");
                } if(portableDoorMode == 1) {
                    portableDoorMode = 0;
                    portableDoorSet = 0;
                    addItemInventory(280,-1);
                    clientMessage("\nPortable Door mode has been turned off!");
                }
            } if(p[1] == 'open') {
                if(portableDoorMode == 0) {
                    clientMessage("\nPortable Door mode is off!");
                } if(portableDoorSet == 0) {
                    clientMessage("\nNo Portable Door is set!");
                } if((portableDoorMode == 1) && (portableDoorSet == 1) && (portableDoorActive == 0)) {
                    pDoor = getTile(pDoorX,pDoorY,pDoorZ);
                    pDoor1 = getTile(pDoorX,pDoorY1,pDoorZ);
                    setTile(pDoorX,pDoorY,pDoorZ,0);
                    setTile(pDoorX,pDoorY1,pDoorZ,0);
                    clientMessage("\nPortable Door active for 5 seconds!");
                    portableDoorActive = 1;
                    countdown = 100;
                    countdownMode = 1;
                }
            }
            break;
        } case 'bomb': {
            if(p[1] == 'on') {
                if(bombMode == 1) {
                    clientMessage("\nBomb detonation mode is already on!");
                } if(bombMode == 0) {
                    bombMode = 1;
                    addItemInventory(280,1);
                    clientMessage("\nBomb detonation mode has been turned on!");
                }
            } if(p[1] == 'off') {
                if(bombMode == 0) {
                    clientMessage("\nBomb detonation mode is already off!");
                } if(bombMode == 1) {
                    bombMode = 0;
                    addItemInventory(280,-1);
                    clientMessage("\nBomb detonation mode has been turned off!");
                }
            } if(p[1] == 'detonate') {
                if(bombMode == 0) {
                    clientMessage("\nBomb detonation mode is off!");
                } if(bombMode == 1) {
                    if(bombSet == 0) {
                        clientMessage("\nSet a bomb first!");
                } if(bombSet == 1) {
                        explode(bombX, bombY, bombZ, 5);
                        clientMessage("\nDetonated!");
                        bombSet = 0;
                    }
                }
            }
            break;
        } case 'nuke': {
            for(nukeX=-21;nukeX<=21;nukeX++) {
                for(nukeZ=-21;nukeZ<=21;nukeZ = nukeZ + 3) {
                    setTile(getPlayerX()+nukeX,getPlayerY()+5,getPlayerZ()+nukeZ,46);
                    explode(getPlayerX()+nukeX,getPlayerY()+5,getPlayerZ()+nukeZ,1);
                }
            }
            break;
        } case 'instabreak': {
            if(p[1] == 'on') {
                if(instabreakMode == 1) {
                    clientMessage("\nInstabreak is already on!");
                    break;
            } if(instabreakMode == 0) {
                    instabreakMode = 1;
                    clientMessage("\nInstabreak has been turned on!");
                addItemInventory(285,1);
                }
            } if(p[1] == 'off') {
                if(instabreakMode == 0) {
                    clientMessage("\nInstabreak is already on!");
                    break;
            } if(instabreakMode == 1) {
                    instabreakMode = 0;
                    addItemInventory(285,-1);
                    clientMessage("\nInstabreak has been turned off!");
                }
            }
            break;
        } case 'warp': {
            if(p[1] == 'on') {
                if(warpMode == 1) {
                    clientMessage("\nWarp Mode is already on!");
                    break;
                } if(warpMode == 0) {
                    warpMode = 1;
                    addItemInventory(341,1);
                    addItemInventory(293,1);
                    addItemInventory(294,1);
                    addItemInventory(57,2);
                    addItemInventory(41,2);
                    addItemInventory(42,2);
                    addItemInventory(22,2);
                    clientMessage("\nWarp Panels activated!");
                }
            } if(p[1] == 'off') {
                if(warpMode == 0) {
                    clientMessage("\nWarp mode is already off!");
                    break;
                } if(warpMode == 1) {
                    warpMode = 0;
                    addItemInventory(341,-1);
                    addItemInventory(293,-1);
                    addItemInventory(294,-1);
                    clientMessage("\nWarp Panels deactivated!");
                }
            }
            break;
        } case 'refresh': {
            clientMessage("Refreshed all command items in your inventory!")
            if(bombMode == 1) {
                addItemInvemtory(280,1);
            } if(portableDoorMode == 1) {
                addItemInventory(280,1);
            } if(spawnTouch == 1) {
                addItemInventory(295,1);
                addItemInventory(296,1);
            } if(instabreakMode == 1) {
                addItemInventory(285,1);
            } if(warpMode == 1) {
                addItemInventory(341,1);
                addItemInventory(293,1);
                addItemInventory(294,1);
            }
            break;
        } default: {
            clientMessage("\nCommand does not exist!");
            break;
        }
    }
}

function modTick() {
    if(magicCarpet == 1) {
    mcX = Math.floor(getPlayerX());
    mcY = Math.floor(getPlayerY()) - 2;
    mcZ = Math.floor(getPlayerZ());
        for(j=-3;j<=3;j++) {
            for(i=-3;i<=3;i++) {
                for(k=-1;k<=1;k++) {
                    if(j >= -2 && j <= 2) {
                        if(i >= -2 && i <= 2) {
                            if(getTile(mcX+j,mcY,mcZ+i) == 0) {
                                setTile(mcX+j,mcY,mcZ+i,20);
                            }
                        }
                } if(j == -3 || j == 3) {
                        if(i >= -3 && i <= 3) {
                            if(getTile(mcX+j,mcY,mcZ+i) == 20) {
                                setTile(mcX+j,mcY,mcZ+i,0);
                            }
                        }
                } if(j >= -3 && j <= 3) {
                        if(i == -3 || i == 3) {
                            if(getTile(mcX+j,mcY,mcZ+i) == 20) {
                                setTile(mcX+j,mcY,mcZ+i,0);
                            }
                        }
                } if(k == -1 || k == 1) {
                        if(j >= -3 && j <= 3) {
                            if(i >= -3 && i <= 3) {
                                if(getTile(mcX+j,mcY+k,mcZ+i) == 20) {
                                    setTile(mcX+j,mcY+k,mcZ+i,0);
                                }
                            }
                        }
                } if(getPitch() >= 75) {
                        if(j >= -2 && j <= 2) {
                            if(i >= -2 && i <= 2) {
                                if(getTile(mcX+j,mcY,mcZ+i) == 20) {
                                    setTile(mcX+j,mcY,mcZ+i,0);
                                }
                            }
                        } if(k == -1) {
                            if(j >= -2 && j <= 2) {
                                if(i >= -2 && i <= 2) {
                                    if(getTile(mcX+j,mcY+k,mcZ+i) == 0) {
                                        setTile(mcX+j,mcY+k,mcZ+i,20);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } if(sprintMode == 1) {
        if(sprintTick == 1) {
            Xpos = getPlayerX();
            Zpos = getPlayerZ();
            sprintTick++;
        } if(sprintTick == 3) {
            sprintTick = 1;
            Xdiff = getPlayerX() - Xpos;
            Zdiff = getPlayerZ() - Zpos;
            setVelX(getPlayerEnt(),Xdiff);
            setVelZ(getPlayerEnt(),Zdiff);
            Xdiff = 0;
            Zdiff = 0;
        } if(sprintTick != 1) {
            sprintTick++;
        }
    } if((portableDoorMode == 1) && (portableDoorSet == 1) && (portableDoorActive == 1)) {
        if(countdownMode == 1) {
            if(countdown !== 0) {
                countdown--;
            } if(countdown == 0) {
                setTile(pDoorX,pDoorY,pDoorZ,pDoor);
                setTile(pDoorX,pDoorY1,pDoorZ,pDoor1);
                clientMessage("\nPortable Door closed!")
                portableDoorActive = 0;
                countdownMode = 100
            }
        }
    }
}
