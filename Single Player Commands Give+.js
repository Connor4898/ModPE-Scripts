/*
Single Player Commands Give+
Made by Connor4898 & CheesyFriedBacon
Sprint script made by WhyToFu, modified by Connor4898 (Used with permission)

    © Copyright 2013 Connor4898 & CheesyFriedBacon
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/

var setHomeData = 0, bombMode = 0, bombSet = 0, portableDoorMode = 0, portableDoorSet = 0, portableDoorActive = 0, pDoorX, pDoorY, pDoorZ, pDoor, pDoor1, magicCarpet = 0, sprintMode = 0, Xpos = 0, Zpos = 0, sprintTick = 1, Xdiff = 0, Zdiff = 0, countdownMode = 0, countdown = 0, spawnTouch = 0, instabreakMode = 0, instabreakBlock, warpMode = 0, warpSetA1 = 0, warpA1X, warpA1Y, warpA1Z, warpSetA2 = 0, warpA2X, warpA2Y, warpA2Z, warpSetB1 = 0, warpB1X, warpB1Y, warpB1Z, warpSetB2 = 0, warpB2X, warpB2Y, warpB2Z, warpSetC1 = 0, warpC1X, warpC1Y, warpC1Z, warpSetC2 = 0, warpC2X, warpC2Y, warpC2Z, warpSetD1 = 0, warpD1X, warpD1Y, warpD1Z, warpSetD2 = 0, warpD2X, warpD2Y, warpD2Z, nextYaw = 0, panoramaMode = 0, panCountdown = 0, msg, msgTick = 100;

function useItem(x,y,z,itemId,blockId) {
    if(bombMode == 1) {
        if((itemId == 280) || (itemId == 267)) {//stick or Iron sword
            bombX = x;
            bombY = y;
            bombZ = z;
            bombSet = 1;
            msg = "\nSet bomb at x: " + bombX + " y:" + bombY + " z:" + bombZ;
            msgTime();
        }
    } if(portableDoorMode == 1) {
        if((itemId == 280) || (itemId == 292)) {//stick or Iron hoe
            pDoorX = x;
            pDoorY = y;
            pDoorY1 = y + 1;
            pDoorZ = z;
            portableDoorSet = 1;
            msg = "\nPortable Door set to x: " + pDoorX + "y: " + pDoorY + "/" + pDoorY1 + "z: " + pDoorZ;
            msgTime();
        }
    } if(spawnTouch == 1) {
        if(itemId == 295) {//Wheat seeds
            spawnChicken(x,y+1,z,'mob/chicken.png');
        } if(itemId == 296) {//Wheat
            spawnCow(x,y+1,z,'mob/cow.png');
        } if(itemId == 406) {//Quartz item
            spawnPigZombie(x,y+1,z,283,'mob/pigzombie.png');
        }
    } if(instabreakMode == 1) {
        if(itemId == 285) {//Gold pickaxe
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
        if(itemId == 341 || itemId == 267) {//Slimeball or Iron sword
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
        } if(itemId == 293 || itemId == 292) {//Diamond or Iron hoe
            if(blockId == 57) {
                warpSetA1 = 1;
                warpA1X = x;
                warpA1Y = y;
                warpA1Z = z;
                msg = "\nA1 set!";
                msgTime();
            } if(blockId == 41) {
                warpSetB1 = 1;
                warpB1X = x;
                warpB1Y = y;
                warpB1Z = z;
                msg = "\nB1 set!";
                msgTime();
            } if(blockId == 42) {
                warpSetC1 = 1;
                warpC1X = x;
                warpC1Y = y;
                warpC1Z = z;
                msg = "\nC1 set!";
                msgTime();
            } if(blockId == 22) {
                warpSetD1 = 1;
                warpD1X = x;
                warpD1Y = y;
                warpD1Z = z;
                msg = "\nD1 set!";
                msgTime();
            }
        } if(itemId == 294 || itemId == 261) {//Gold hoe or Bow
            if(blockId == 57) {
                warpSetA2 = 1;
                warpA2X = x;
                warpA2Y = y;
                warpA2Z = z;
                msg = "\nA2 set!";
                msgTime();
            } if(blockId == 41) {
                warpSetB2 = 1;
                warpB2X = x;
                warpB2Y = y;
                warpB2Z = z;
                msg = "\nB2 set!";
                msgTime();
            } if(blockId == 42) {
                warpSetC2 = 1;
                warpC2X = x;
                warpC2Y = y;
                warpC2Z = z;
                msg = "\nC2 set!";
                msgTime();
            } if(blockId == 22) {
                warpSetD2 = 1;
                warpD2X = x;
                warpD2Y = y;
                warpD2Z = z;
                msg = "\nD2 set!";
                msgTime();
            }
        }
    }
}

function procCmd(c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'commands': {
            msg = "\nCommands: /commands, /help <command>, /explode <raduis>, /give <ID> <amount>, /ignite, /tp <x> <y> <z>, /sethome, /home, /delhome, /bomb <on|detonate|off>, /pdoor <on|open|off>, /mc <on|off>, /sprint <on|off>, /hole, /spawn <on|off>, /rain <chicken|cow|zombiepigman>, /nuke, /instabreak <on|off>, /surface, /ascend, /descend, /panorama <on|off>.\nMade by Connor4898 & CheesyFriedBacon";
            msgTime();
            break;
        } case 'help': {
            switch(p[1]) {
                case 'commands': {
                    msg = "\nType /commands or /help to show all of the available commands./nExample: /commands";
                    msgTime();
                    break;
                } case 'explode': {
                    msg = "\nType /explode <radius> to blow up. WARNING: It may hurt/nExample: /explode 5";
                    msgTime();
                    break;
                } case 'give': {
                    msg = "\nType /give <ID|Item/Block Name> <amount> to add any item to your inventory.\nExample: /give 57 64";
                    msgTime();
                    break;
                } case 'ignite': {
                    msg = "\nType /ignite to set the ground underneath you on fire. WARNING: High chance of burning.\nExample: /ignite";
                    msgTime();
                    break;
                } case 'tp': {
                    msg = "\nType /tp <x> <y> <z>, where x, y, and z are your desired coordinates.\n Example: /tp 128 70 128";
                    msgTime();
                    break;
                } case 'coords': {
                    msg = "\nType /coords to get the current coordinates at your feet.\nExample: /coords";
                    msgTime();
                    break;
                } case 'sethome': {
                    msg = "\nType /sethome to set coordinates you can easily tp back to, using /home.\n Example: /sethome";
                    msgTime();
                    break;
                } case 'home': {
                    msg = "\nType /home to tp to your home (Use /sethome first)\nExample: /home";
                    msgTime();
                    break;
                } case 'delhome': {
                    msg = "\nType /delhome to delete your current home coordinates.\nExample: /delhome";
                    msgTime();
                    break;
                } case 'bomb': {
                    msg = "\nType /bomb <on|off|detonate>. Use a Stick or Iron sword as the bomb setter, when Bomb Mode is on. WARNING: May be explosive!\n Example: /bomb on";
                    msgTime();
                    break;
                } case 'pdoor': {
                    msg = "\nType /pdoor <on|off|open>. Use a stick or Iron hoe to set the position of the door.\nExample: /pdoor on";
                    msgTime();
                    break;
                } case 'mc': {
                    msg = "\nType /mc <on|off> to activate or deactivate the Magic Carpet.\nExample: /mc on";
                    msgTime();
                    break;
                } case 'sprint': {
                    msg = "\nType /sprint <on|off> to activate or deactivate Sprint Mode.\nExample: /sprint on\nOriginal Sprint Script made by WhyToFu.";
                    msgTime();
                    break;
                } case 'bounce': {
                    msg = "\nType /bounce <power> to get launched into the air\nExample: /bounce 2";
                    msgTime();
                    break;
                } case 'hole': {
                    msg = "\nType /hole to commit suicide. WARNING: USE WITH CAUTION!\n Example: /hole";
                    msgTime();
                    break;
                } case 'rain': {
                    msg = "\nType /rain <chicken|cow|zombiepigman> to make it rain animals!\nExample: /rain chicken";
                    msgTime();
                    break;
                } case 'spawn': {
                    msg = "\nType /spawn <on|off> to turn Spawn Touch on or off.\nExample: /spawn on";
                    msgTime();
                    break;
                } case 'nuke': {
                    msg = "\nType /nuke to cause a MAHOOSIVE explosion!\nExample: /nuke";
                    msgTime();
                    break;
                } case 'instabreak': {
                    msg = "\nType /instabreak <on|off> to turn InstaBreak on or off.\nExample: /instabreak on";
                    msgTime();
                    break;
                } case 'warp': {
                    msg = "\nType /warp <on|off> to turn Warp Panels on or off.\nExample: /warp on";
                    msgTime();
                    break;
                } case 'surface': {
                    msg = "\nType /surface to teleport to the surface above you.\nExample: /surface";
                    msgTime();
                } case 'ascend': {
                    msg = "\nType /ascend to teleport to the platform above you.\nExample: /ascend";
                    msgTime();
                    break;
                } case 'descend': {
                    msg = "\nType /descend to teleport to the platform below you.\nExample: /descend";
                    msgTime();
                    break;
                } case 'refresh': {
                    msg = "\nType /refresh to regain all items required for currently active commands.\nExample: /refresh";
                } case 'panorama': {
                    msg = "\nType /panorama <on|off> to activate or deactivate Panorama Mode.\nExample: /panorama on";
                    msgTime();
                    msgTime();
                } default: {
                    msg = "\nCommands: /commands, /help <command>, /explode <raduis>, /give <ID> <amount>, /ignite, /tp <x> <y> <z>, /sethome, /home, /delhome, /bomb <on|detonate|off>, /pdoor <on|open|off>, /mc <on|off>, /sprint <on|off>, /hole, /spawn <on|off>, /rain <chicken|cow|zombiepigman>, /nuke, /instabreak <on|off>, /surface, /ascend, /descend, /panorama <on|off>.\nMade by Connor4898 & CheesyFriedBacon";
                    msgTime();
                    break;
                }
            }
            break;
        } case 'give': {
if(p[1] == 'stone') {
                addItemInventory(1,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'grass') {
                addItemInventory(2,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'dirt') {
                addItemInventory(3,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cobblestone' || p[1] == 'cobble') {
                addItemInventory(4,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'plank' || p[1] == 'planks' || p[1] == 'wooden_plank' || p[1] == 'wooden_planks') {
                addItemInventory(5,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sapling' || p[1] == 'saplings') {
                addItemInventory(6,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bedrock') {
                addItemInventory(7,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'water') {
                addItemInventory(8,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'still_water') {
                addItemInventory(9,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'lava') {
                addItemInventory(10,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'still_lava') {
                addItemInventory(11,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sand') {
                addItemInventory(12,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gravel') {
                addItemInventory(13,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_ore') {
                addItemInventory(14,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_ore') {
                addItemInventory(15,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'coal_ore') {
                addItemInventory(16,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wood' || p[1] == 'trunk') {
                addItemInventory(17,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'leave' || p[1] == 'leaves') {
                addItemInventory(18,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glass') {
                addItemInventory(20,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'lapis_ore') {
                addItemInventory(21,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'lapis_block') {
                addItemInventory(22,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sandstone') {
                addItemInventory(24,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bed_block') {
                addItemInventory(26,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cobweb') {
                addItemInventory(30,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'tall_grass') {
                addItemInventory(31,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bush' || p[1] == 'dead_bush') {
                addItemInventory(32,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wool') {
                addItemInventory(35,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'dandelion') {
                addItemInventory(37,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'rose' || p[1] == 'cyan_flower') {
                addItemInventory(38,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'brown_mushroom') {
                addItemInventory(39,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'red_mushroom') {
                addItemInventory(40,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_block') {
                addItemInventory(41,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_block') {
                addItemInventory(42,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'double_slab' || p[1] == 'double_slabs') {
                addItemInventory(43,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'slab' || p[1] == 'slabs') {
                addItemInventory(44,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bricks' || p[1] == 'bricks_block') {
                addItemInventory(45,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'tnt') {
                addItemInventory(46,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bookshelf') {
                addItemInventory(47,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'moss_stone' || p[1] == 'mossy_stone') {
                addItemInventory(48,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'obsidian') {
                addItemInventory(49,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'torch') {
                addItemInventory(50,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'fire') {
                addItemInventory(51,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wood_stairs' || p[1] == 'wooden_stairs') {
                addItemInventory(53,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'chest') {
                addItemInventory(54,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_ore') {
                addItemInventory(56,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_block') {
                addItemInventory(57,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'crafting_table' || p[1] == 'workbench') {
                addItemInventory(58,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wheat_block') {
                addItemInventory(58,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'farmland') {
                addItemInventory(60,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'furnace') {
                addItemInventory(61,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'burning_furnace' || p[1] == 'lit_furnace') {
                addItemInventory(62,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sign_post') {
                addItemInventory(63,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'door_block' || p[1] == 'wood_door_block' || p[1] == 'wooden_door_block') {
                addItemInventory(64,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'ladder') {
                addItemInventory(65,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cobble_stairs' || p[1] == 'cobblestone_stairs') {
                addItemInventory(67,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wall_sign') {
                addItemInventory(68,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_door_block') {
                addItemInventory(71,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'redstone_ore') {
                addItemInventory(73,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glowing_redstone_ore' || p[1] == 'lit_redstone_ore') {
                addItemInventory(74,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'snow' || p[1] == 'snow_layer') {
                addItemInventory(78,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'ice') {
                addItemInventory(79,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'snow_block') {
                addItemInventory(80,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cactus') {
                addItemInventory(81,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'clay_block') {
                addItemInventory(82,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'reeds' || p[1] == 'sugarcane_block') {
                addItemInventory(83,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'fence') {
                addItemInventory(85,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'netherrack') {
                addItemInventory(87,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glowstone' || p[1] == 'glowstone_block') {
                addItemInventory(89,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cake_block') {
                addItemInventory(92,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'invisible_bedrock') {
                addItemInventory(95,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'trapdoor') {
                addItemInventory(96,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_brick' || p[1] == 'stone_bricks') {
                addItemInventory(98,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glass_pane' || p[1] == 'glass_panel') {
                addItemInventory(102,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'melon_block') {
                addItemInventory(103,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'melon_stem') {
                addItemInventory(105,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'fence_gate') {
                addItemInventory(107,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'brick_stairs' || p[1] == 'stone_brick_stairs') {
                addItemInventory(109,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'nether_bricks' || p[1] == 'nether_brick_block' || p[1] == 'nether_bricks_block') {
                addItemInventory(112,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'nether_brick_stairs' || p[1] == 'nether_bricks_stairs') {
                addItemInventory(114,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sandstone_stairs') {
                addItemInventory(128,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'quartz_block') {
                addItemInventory(155,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'quartz_stairs') {
                addItemInventory(156,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stonecutter') {
                addItemInventory(245,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glowing_obsidian') {
                addItemInventory(246,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'nether_reactor') {
                addItemInventory(247,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'update_block') {
                addItemInventory(248,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == '.name') {
                addItemInventory(255,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_shovel') {
                addItemInventory(256,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_pickaxe') {
                addItemInventory(257,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_axe') {
                addItemInventory(258,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'flint_steel' || p[1] == 'flint_and_steel') {
                addItemInventory(259,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'apple') {
                addItemInventory(260,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bow') {
                addItemInventory(261,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'arrow') {
                addItemInventory(262,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'coal') {
                addItemInventory(263,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond') {
                addItemInventory(264,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_ingot') {
                addItemInventory(265,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_ingot') {
                addItemInventory(266,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_sword') {
                addItemInventory(267,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wooden_sword' || p[1] == 'wood_sword') {
                addItemInventory(268,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wooden_shovel' || p[1] == 'wood_shovel') {
                addItemInventory(269,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wooden_axe' || p[1] == 'wood_axe') {
                addItemInventory(271,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_sword') {
                addItemInventory(272,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_shovel') {
                addItemInventory(273,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_pickaxe') {
                addItemInventory(274,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_axe') {
                addItemInventory(275,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_sword') {
                addItemInventory(276,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_shovel') {
                addItemInventory(277,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_pickaxe') {
                addItemInventory(278,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_axe') {
                addItemInventory(279,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stick') {
                addItemInventory(280,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bowl') {
                addItemInventory(281,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'mushroom_stew') {
                addItemInventory(282,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_sword' || p[1] == 'golden_sword') {
                addItemInventory(283,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_shovel' || p[1] == 'golden_shovel') {
                addItemInventory(284,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_pickaxe' || p[1] == 'golden_pickaxe') {
                addItemInventory(285,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_axe' || p[1] == 'golden_axe') {
                addItemInventory(286,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'string') {
                addItemInventory(287,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'feather') {
                addItemInventory(288,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gunpowder') {
                addItemInventory(289,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wood_hoe' || p[1] == 'wooden_hoe') {
                addItemInventory(290,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'stone_hoe') {
                addItemInventory(291,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_hoe') {
                addItemInventory(292,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_hoe' || p[1] == 'golden_hoe') {
                addItemInventory(294,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'seeds' || p[1] == 'wheat_seeds') {
                addItemInventory(295,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wheat') {
                addItemInventory(296,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bread') {
                addItemInventory(297,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'leather_cap' || p[1] == 'leather_hat' || p[1] == 'leather_helmet') {
                addItemInventory(298,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'leather_tunic' || p[1] == 'leather_chestplate') {
                addItemInventory(299,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'leather_pants' || p[1] == 'leather_leggings') {
                addItemInventory(300,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'leather_boots' || p[1] == 'leather_shoes') {
                addItemInventory(301,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'chain_helmet' || p[1] == 'chain_hat') {
                addItemInventory(302,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'chain_chestplate') {
                addItemInventory(303,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'chain_pants' || p[1] == 'chain_leggings') {
                addItemInventory(304,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'chain_boots' || p[1] == 'chain_shoes') {
                addItemInventory(305,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_helmet' || p[1] == 'iron_hat') {
                addItemInventory(306,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_chestplate') {
                addItemInventory(307,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_pants' || p[1] == 'iron_leggings') {
                addItemInventory(308,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_boots' || p[1] == 'iron_shoes') {
                addItemInventory(309,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_helmet' || p[1] == 'diamond_hat') {
                addItemInventory(310,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_chestplate') {
                addItemInventory(311,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_pants' || p[1] == 'diamond_leggings') {
                addItemInventory(312,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'diamond_boots' || p[1] == 'diamond_shoes') {
                addItemInventory(313,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_helmet' || p[1] == 'golden_helmet' || p[1] == 'gold_hat' || p[1] == 'gplden_hat') {
                addItemInventory(314,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_chestplate' || p[1] == 'golden_chestplate') {
                addItemInventory(315,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_pants' || p[1] == 'golden_pants' || p[1] == 'gold_leggings' || p[1] == 'golden_leggings') {
                addItemInventory(316,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'gold_boots' || p[1] == 'golden_boots' || p[1] == 'gold_shoes' || p[1] == 'golden_shoes') {
                addItemInventory(317,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'flint') {
                addItemInventory(318,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'raw_porkchop') {
                addItemInventory(319,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cooked_porkchop') {
                addItemInventory(320,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'painting') {
                addItemInventory(321,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sign') {
                addItemInventory(323,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'wood_door' || p[1] == 'wooden_door') {
                addItemInventory(324,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bucket') {
                addItemInventory(325,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'iron_door') {
                addItemInventory(330,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'snowball') {
                addItemInventory(332,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'brick') {
                addItemInventory(336,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'clay') {
                addItemInventory(337,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sugarcane' || p[1] == 'sugar_cane' || p[1] == 'sugar_canes') {
                addItemInventory(338,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'paper') {
                addItemInventory(339,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'slimeball') {
                addItemInventory(341,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'egg') {
                addItemInventory(344,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'compass') {
                addItemInventory(345,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'clock') {
                addItemInventory(347,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'glowstone_dust') {
                addItemInventory(348,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'dye') {
                addItemInventory(351,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bone') {
                addItemInventory(352,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'sugar') {
                addItemInventory(353,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cake') {
                addItemInventory(354,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'bed') {
                addItemInventory(355,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'shears') {
                addItemInventory(359,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'melon' || p[1] == 'melon_slice') {
                addItemInventory(360,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'melon_seeds') {
                addItemInventory(362,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'raw_beef') {
                addItemInventory(363,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'steak' || p[1] == 'cooked_beef') {
                addItemInventory(364,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'raw_chicken') {
                addItemInventory(365,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'cooked_chicken') {
                addItemInventory(366,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'spawn_egg') {
                addItemInventory(383,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'nether_brick') {
                addItemInventory(405,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
            } if(p[1] == 'quartz' || p[1] == 'nether_quartz') {
                addItemInventory(406,p[2]);
                msg = "\nSpawned " + p[2] + " of " + p[1] + "!";
                msgTime();
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
            msg = "\nTeleported to x: " + parseInt(p[1]) + ", y: " + parseInt(p[2]) + ", z: " + parseInt(p[3]);
            msgTime();
            break;
        } case 'surface': {
            for(i=1;i<=128;i++) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } msg = "\nTeleported to the surface!";
            msgTime();
            break;
        } case 'ascend': {
            for(i=1;i<=128;i++) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } msg = "\nTeleported to the floor above you!";
            msgTime();
            break;
        } case 'descend': {
            for(i=-1;i>=-128;i--) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } msg = "\nTeleported to the floor beneath you!";
            msgTime();
            break;
        } case 'coords': {
            msg = "\nCurrent coordinates are:\nHead: x: " + Math.floor(getPlayerX()) + " y: " + Math.floor(getPlayerY()) + " z: " + Math.floor(getPlayerZ()) + "\nFeet: x: " + Math.floor(getPlayerX()) + " y: " + Math.floor(getPlayerY() - 1) + " z: " + Math.floor(getPlayerZ());
            msgTime();
            break;
        } case 'explode': {
            explode(getPlayerX(), getPlayerY(), getPlayerZ(), p[1]);
            break;
        } case 'sethome': {
            homeX = getPlayerX();
            homeY = getPlayerY();
            homeZ = getPlayerZ();
            setHomeData = 1;
            msg = "\nHome set to x: " + Math.floor(homeX) + ", y: " + Math.floor(homeY) + ", z: " + Math.floor(homeZ);
            msgTime();
            break;
        } case 'delhome': {
            if(setHomeData == 1) {
                setHomeData = 0;
                msg = "\nHome successfully deleted!";
                msgTime();
                break;
            } if(setHomeData == 0) {
                msg = "\nNo home is set!";
                msgTime();
            }
            break;
        } case 'home': {
            if(setHomeData == 0) {
                msg = "\nNo home has been set!";
                msgTime();
                break;
            } if(setHomeData == 1) {
                setPosition(getPlayerEnt(), homeX, homeY, homeZ);
                msg = "\nTeleported to home!";
                msgTime();
            }
            break;
        } case 'mc': {
            if(p[1] == 'on') {
                if(magicCarpet == 1) {
                    msg = "\nMagic carpet is already active!";
                    msgTime();
                    break;
                } if(magicCarpet == 0) {
                    magicCarpet = 1;
                    msg = "\nMagic carpet activated!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(magicCarpet == 0) {
                    msg = "\nMagic carpet is already off!";
                    msgTime();
                    break;
                } if(magicCarpet == 1) {
                    magicCarpet = 0;
                    msg = "\nMagic carpet disappeared!";
                    msgTime();
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
                msg = "\nUsage: /bounce <power>";
                msgTime();
            } else if(p[1] >= 1) {
                setVelY(getPlayerEnt(),parseInt(p[1]));
            } else {
                msg = "\nThe bounce power must be a number!";
                msgTime();
            }
            break;
        } case 'sprint': {
            if(p[1] == 'on') {
                if(sprintMode == 1) {
                    msg = "\nSprint Mode is already active!";
                    msgTime();
                    break;
                } if(sprintMode == 0) {
                    sprintMode = 1;
                    msg = "\nSprint Mode activated! Original Sprint Script made by WhyTuFu.";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(sprintMode == 0) {
                    msg = "\nSprint Mode is already off!";
                    msgTime();
                    break;
                } if(sprintMode == 1) {
                    sprintMode = 0;
                    msg = "\nSprint Mode deactivated!";
                    msgTime();
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
            msg = "\nGoodbye World";
            msgTime();
            break;
        } case 'rain': {
            if(p[1] == 'chicken') {
                for(rainX=-21;rainX<=21;rainX = rainX + 3) {
                    for(rainZ=-21;rainZ<=21;rainZ = rainZ + 3) {
                        spawnChicken(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,'mob/chicken.png');
                    }
                }
                msg = "\nIT'S RAINING CHICKENS!!";
                msgTime();
            } if(p[1] == 'cow') {
                for(rainX=-21;rainX<=21;rainX = rainX + 3) {
                    for(rainZ=-21;rainZ<=21;rainZ = rainZ + 3) {
                        spawnCow(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,'mob/cow.png');
                    }
                }
                msg = "\nIT'S RAINING COWS!!";
                msgTime();
            } if(p[1] == 'zombiepigman') {
                for(rainX=-21;rainX<=21;rainX = rainX + 3) {
                    for(rainZ=-21;rainZ<=21;rainZ = rainZ + 3) {
                        spawnPigZombie(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,283,'mob/pigzombie');
                    }
                }
                msg = "\nIT'S RAINING ZOMBIE PIGMEN!!";
                msgTime();
            }
            break;
        } case 'spawn': {
            if(p[1] == 'on') {
                if(spawnTouch == 1) {
                    msg = "\nSpawn Touch is already on!";
                    msgTime();
                    break;
                } if(spawnTouch == 0) {
                    spawnTouch = 1;
                    addItemInventory(295,1);
                    addItemInventory(296,1);
                    addItemInventory(406,1);
                    msg = "\nSpawn Touch turned on!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(spawnTouch == 0) {
                    msg = "\nSpawn Touch is already off!";
                    msgTime();
                    break;
                } if(spawnTouch == 1) {
                    spawnTouch = 0;
                    addItemInventory(295,-1);
                    addItemInventory(296,-1);
                    addItemInventory(406,-1);
                    msg = "\nSpawn Touch turned off!";
                    msgTime();
                }
            }
            break;
        } case 'pdoor': {
            if(p[1] == 'on') {
                if(portableDoorMode == 1) {
                    msg = "\nPortable Door mode is already on!";
                    msgTime();
                } if(portableDoorMode == 0) {
                    portableDoorMode = 1;
                    addItemInventory(280,1);
                    msg = "\nPortable Door mode has been turned on!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(portableDoorMode == 0) {
                    msg = "\nPortable Door mode is already off!";
                    msgTime();
                } if(portableDoorMode == 1) {
                    portableDoorMode = 0;
                    portableDoorSet = 0;
                    addItemInventory(280,-1);
                    msg = "\nPortable Door mode has been turned off!";
                    msgTime();
                }
            } if(p[1] == 'open') {
                if(portableDoorMode == 0) {
                    msg = "\nPortable Door mode is off!";
                    msgTime();
                } if(portableDoorSet == 0) {
                    msg = "\nNo Portable Door is set!";
                    msgTime();
                } if((portableDoorMode == 1) && (portableDoorSet == 1) && (portableDoorActive == 0)) {
                    pDoor = getTile(pDoorX,pDoorY,pDoorZ);
                    pDoor1 = getTile(pDoorX,pDoorY1,pDoorZ);
                    setTile(pDoorX,pDoorY,pDoorZ,0);
                    setTile(pDoorX,pDoorY1,pDoorZ,0);
                    msg = "\nPortable Door active for 5 seconds!";
                    msgTime();
                    portableDoorActive = 1;
                    countdown = 100;
                    countdownMode = 1;
                }
            }
            break;
        } case 'bomb': {
            if(p[1] == 'on') {
                if(bombMode == 1) {
                    msg = "\nBomb detonation mode is already on!";
                    msgTime();
                } if(bombMode == 0) {
                    bombMode = 1;
                    addItemInventory(280,1);
                    msg = "\nBomb detonation mode has been turned on!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(bombMode == 0) {
                    msg = "\nBomb detonation mode is already off!";
                    msgTime();
                } if(bombMode == 1) {
                    bombMode = 0;
                    addItemInventory(280,-1);
                    msg = "\nBomb detonation mode has been turned off!";
                    msgTime();
                }
            } if(p[1] == 'detonate') {
                if(bombMode == 0) {
                    msg = "\nBomb detonation mode is off!";
                    msgTime();
                } if(bombMode == 1) {
                    if(bombSet == 0) {
                        msg = "\nSet a bomb first!";
                        msgTime();
                } if(bombSet == 1) {
                        explode(bombX, bombY, bombZ, 5);
                        msg = "\nDetonated!";
                        msgTime();
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
                    msg = "\nInstabreak is already on!";
                    msgTime();
                    break;
                } if(instabreakMode == 0) {
                    instabreakMode = 1;
                    msg = "\nInstabreak has been turned on!";
                    msgTime();
                    addItemInventory(285,1);
                }
            } if(p[1] == 'off') {
                if(instabreakMode == 0) {
                    msg = "\nInstabreak is already on!";
                    msgTime();
                    break;
            } if(instabreakMode == 1) {
                    instabreakMode = 0;
                    addItemInvntory(285,-1);
                    msg = "\nInstabreak has been turned off!";
                    msgTime();
                }
            }
            break;
        } case 'warp': {
            if(p[1] == 'on') {
                if(warpMode == 1) {
                    msg = "\nWarp Mode is already on!";
                    msgTime();
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
                    msg = "\nWarp Panels activated!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(warpMode == 0) {
                    msg = "\nWarp mode is already off!";
                    msgTime();
                    break;
                } if(warpMode == 1) {
                    warpMode = 0;
                    addItemInventory(341,-1);
                    addItemInventory(293,-1);
                    addItemInventory(294,-1);
                    msg = "\nWarp Panels deactivated!";
                    msgTime();
                }
            }
            break;
        } case 'refresh': {
            msg = "\nRefreshed all command items in your inventory!";
            msgTime();
            if(bombMode == 1) {
                addItemInventory(280,1);
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
        } case 'panorama': {
            if(p[1] == 'on') {
                if(panoramaMode == 1) {
                    msg = "\nPanorama Mode is already active!";
                    msgTime();
                    break;
                } if(panoramaMode == 0) {
                    panoramaMode = 1;
                    msg = "\nPanorama Mode activated!";
                    msgTime();
                }
            } if(p[1] == 'off') {
                if(panoramaMode == 0) {
                    msg = "\nPanorama Mode is already off!";
                    msgTime();
                    break;
                } if(panoramaMode == 1) {
                    panoramaMode = 0;
                    msg = "\nPanorama Mode deactivated!";
                    msgTime();
                }
            }
            break;
        } default: {
            msg = "\nCommand does not exist!";
            msgTime();
            break;
        }
    }
}

function msgTime() {
    msgTick = 0;
    print(msg);
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
            if(countdown != 0) {
                countdown--;
            } if(countdown == 0) {
                setTile(pDoorX,pDoorY,pDoorZ,pDoor);
                setTile(pDoorX,pDoorY1,pDoorZ,pDoor1);
                msg = "\nPortable Door closed!";
                msgTime();
                portableDoorActive = 0;
                countdownMode = 100;
            }
        }
    } if(panoramaMode == 1) {
        panCountdown++;
        if(panCountdown == 1) {
            nextYaw = getYaw() + 0.33;
            setRot(getPlayerEnt(),nextYaw,getPitch());
            if(nextYaw >= 360) {
                setRot(getPlayerEnt(),0,getPitch());
            } if(nextYaw < 0) {
                setRot(getPlayerEnt(),359,getPitch());
            } panCountdown = 0;
        }
    } msgTick++;
    if(msgTick == 1) {
        if(msg.length > 25) {
            print(msg);
        }
    } if(msgTick == 2) {
        if(msg.length > 50) {
            print(msg);
        }
    } if(msgTick == 3) {
        if(msg.length > 75) {
            print(msg);
        }
    } if(msgTick == 4) {
        if(msg.length > 100) {
            print(msg);
        }
    }
}
