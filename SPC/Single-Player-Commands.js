/*
Single Player Commands
Made by Connor4898 & CheesyFriedBacon
Sprint script made by WhyToFu, modified by Connor4898 (Used with permission)

    © Copyright 2013 Connor4898 & CheesyFriedBacon
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/

var setHomeData = 0, bombMode = 0, bombSet = 0, portableDoorMode = 0, portableDoorActive = 0, pDoor, pDoor1, magicCarpet = 0, sprintMode = 0, Xpos = 0, Zpos = 0, sprintTick = 1, Xdiff = 0, Zdiff = 0, countdownMode = 0, countdown = 0, spawnTouch = 0, spawnTouchMob = null, spawnTouchMobID, instabreakMode = 0, instabreakBlock, warpMode = 0, nextYaw = 0, panoramaMode = 0, panCountdown = 0, msg, msgTick = 100;

function useItem(x,y,z,itemId,blockId) {
    if(bombMode == 1) {
        if((itemId == 280) || (itemId == 267)) {//stick or Iron sword
            bombX = x;
            bombY = y;
            bombZ = z;
            bombSet = 1;
            clientMessage("Set bomb at x: " + bombX + " y:" + bombY + " z:" + bombZ);
        }
    } if(portableDoorMode == 1) {
        if((itemId == 280) || (itemId == 292)) {//stick or Iron hoe
            bl_saveData("pDoorX",parseInt(x));
            bl_saveData("pDoorY",parseInt(y));
            bl_saveData("pDoorY1",parseInt(y) + 1);
            bl_saveData("pDoorZ",parseInt(z));
            bl_saveData("portableDoorSet",1);
            clientMessage("Portable Door set to x: " + bl_readData("pDoorX") + " y: " + bl_readData("pDoorY") + "/" + bl_readData("pDoorY1") + " z: " + bl_readData("pDoorZ"));
        }
    } if(spawnTouch == 1) {
        if(spawnTouchMob != null) {
            bl_spawnMob(x,y+1,z,spawnTouchMobID,spawnTouchMob);
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
                if(Math.floor(getPlayerX()) == bl_readData("warpA2X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpA2Y") && Math.floor(getPlayerZ()) == bl_readData("warpA2Z")) {
                    if(bl_readData("warpSetA1") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpA1X")) + 0.5, parseInt(bl_readData("warpA1Y")) + 3, parseInt(bl_readData("warpA1Z")) + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == bl_readData("warpA1X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpA1Y") && Math.floor(getPlayerZ()) == bl_readData("warpA1Z")) {
                    if(bl_readData("warpSetA2") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpA2X")) + 0.5, parseInt(bl_readData("warpA2Y")) + 3, parseInt(bl_readData("warpA2Z")) + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 41) {
                if(Math.floor(getPlayerX()) == bl_readData("warpB2X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpB2Y") && Math.floor(getPlayerZ()) == bl_readData("warpB2Z")) {
                    if(bl_readData("warpSetB1") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpB1X")) + 0.5, parseInt(bl_readData("warpB1Y")) + 3, parseInt(bl_readData("warpB1Z")) + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == bl_readData("warpB1X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpB1Y") && Math.floor(getPlayerZ()) == bl_readData("warpB1Z")) {
                    if(bl_readData("warpSetB2") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpB2X")) + 0.5, parseInt(bl_readData("warpB2Y")) + 3, parseInt(bl_readData("warpB2Z")) + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 42) {
                if(Math.floor(getPlayerX()) == bl_readData("warpC2X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpC2Y") && Math.floor(getPlayerZ()) == bl_readData("warpC2Z")) {
                    if(bl_readData("warpSetC1") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpC1X")) + 0.5, parseInt(bl_readData("warpC1Y")) + 3, parseInt(bl_readData("warpC1Z")) + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == bl_readData("warpC1X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpC1Y") && Math.floor(getPlayerZ()) == bl_readData("warpC1Z")) {
                    if(bl_readData("warpSetC2") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpC2X")) + 0.5, parseInt(bl_readData("warpC2Y")) + 3, parseInt(bl_readData("warpC2Z")) + 0.5);
                    }
                }
            } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 22) {
                if(Math.floor(getPlayerX()) == bl_readData("warpD2X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpD2Y") && Math.floor(getPlayerZ()) == bl_readData("warpD2Z")) {
                    if(bl_readData("warpSetD1") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpD1X")) + 0.5, parseInt(bl_readData("warpD1Y")) + 3, parseInt(bl_readData("warpD1Z")) + 0.5);
                    }
                } if(Math.floor(getPlayerX()) == bl_readData("warpD1X") && Math.floor(getPlayerY()) - 2 == bl_readData("warpD1Y") && Math.floor(getPlayerZ()) == bl_readData("warpD1Z")) {
                    if(bl_readData("warpSetD2") == 1) {
                        setPosition(getPlayerEnt(), parseInt(bl_readData("warpD2X")) + 0.5, parseInt(bl_readData("warpD2Y")) + 3, parseInt(bl_readData("warpD2Z")) + 0.5);
                    }
                }
            }
        } if(itemId == 293 || itemId == 292) {//Diamond or Iron hoe
            if(blockId == 57) {
                bl_saveData("warpSetA1",1);
                bl_saveData("warpA1X",parseInt(x));
                bl_saveData("warpA1Y",parseInt(y));
                bl_saveData("warpA1Z",parseInt(z));
                clientMessage("A1 set!");
            } if(blockId == 41) {
                bl_saveData("warpSetB1",1);
                bl_saveData("warpB1X",parseInt(x));
                bl_saveData("warpB1Y",parseInt(y));
                bl_saveData("warpB1Z",parseInt(z));
                clientMessage("B1 set!");
            } if(blockId == 42) {
                bl_saveData("warpSetC1",1);
                bl_saveData("warpC1X",parseInt(x));
                bl_saveData("warpC1Y",parseInt(y));
                bl_saveData("warpC1Z",parseInt(z));
                clientMessage("C1 set!");
            } if(blockId == 22) {
                bl_saveData("warpSetD1",1);
                bl_saveData("warpD1X",parseInt(x));
                bl_saveData("warpD1Y",parseInt(y));
                bl_saveData("warpD1Z",parseInt(z));
                clientMessage("D1 set!");
            }
        } if(itemId == 294 || itemId == 261) {//Gold hoe or Bow
            if(blockId == 57) {
                bl_saveData("warpSetA2",1);
                bl_saveData("warpA2X",parseInt(x));
                bl_saveData("warpA2Y",parseInt(y));
                bl_saveData("warpA2Z",parseInt(z));
                clientMessage("A2 set!");
            } if(blockId == 41) {
                bl_saveData("warpSetB2",1);
                bl_saveData("warpB2X",parseInt(x));
                bl_saveData("warpB2Y",parseInt(y));
                bl_saveData("warpB2Z",parseInt(z));
                clientMessage("B2 set!");
            } if(blockId == 42) {
                bl_saveData("warpSetC2",1);
                bl_saveData("warpC2X",parseInt(x));
                bl_saveData("warpC2Y",parseInt(y));
                bl_saveData("warpC2Z",parseInt(z));
                clientMessage("C2 set!");
            } if(blockId == 22) {
                bl_saveData("warpSetD2",1);
                bl_saveData("warpD2X",parseInt(x));
                bl_saveData("warpD2Y",parseInt(y));
                bl_saveData("warpD2Z",parseInt(z));
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
            clientMessage("Type /help");
            break;
        } case 'help': {
            switch(p[1]) {
                case 'explode': {
                    clientMessage("Type /explode <radius> to blow up. WARNING: It may hurt/nExample: /explode 5");
                    break;
                } case 'give': {
                    clientMessage("Type /give <ID> <amount> to add any item to your inventory.\nExample: /give 57 64");
                    break;
                } case 'ignite': {
                    clientMessage("Type /ignite to set the ground underneath you on fire. WARNING: High chance of burning.\nExample: /ignite");
                    break;
                } case 'tp': {
                    clientMessage("Type /tp <x> <y> <z>, where x, y, and z are your desired coordinates.\n Example: /tp 128 70 128)");
                    break;
                } case 'coords': {
                    clientMessage("Type /coords to get the current coordinates at your feet.\nExample: /coords");
                    break;
                } case 'sethome': {
                    clientMessage("Type /sethome to set coordinates you can easily tp back to, using /home.\n Example: /sethome");
                    break;
                } case 'home': {
                    clientMessage("Type /home to tp to your home (Use /sethome first)\nExample: /home");
                    break;
                } case 'delhome': {
                    clientMessage("Type /delhome to delete your current home coordinates.\nExample: /delhome");
                    break;
                } case 'bomb': {
                    clientMessage("Type /bomb <on|off|detonate>. Use a Stick or Iron sword as the bomb setter, when Bomb Mode is on. WARNING: May be explosive!\n Example: /bomb on");
                    break;
                } case 'pdoor': {
                    clientMessage("Type /pdoor <on|off|open>. Use a stick or Iron hoe to set the position of the door.\nExample: /pdoor on");
                    break;
                } case 'mc': {
                    clientMessage("Type /mc <on|off> to activate or deactivate the Magic Carpet.\nExample: /mc on");
                    break;
                } case 'sprint': {
                    clientMessage("Type /sprint <on|off> to activate or deactivate Sprint Mode.\nExample: /sprint on\nOriginal Sprint Script made by WhyToFu.");
                    break;
                } case 'bounce': {
                    clientMessage("Type /bounce <power> to get launched into the air\nExample: /bounce 2");
                    break;
                } case 'hole': {
                    clientMessage("Type /hole to commit suicide. WARNING: USE WITH CAUTION!\n Example: /hole");
                    break;
                } case 'rain': {
                    clientMessage("Type /rain <mobname> to make it rain animals!\nExample: /rain chicken");
                    break;
                } case 'spawntouch': {
                    clientMessage("Type /spawntouch <mobname|off> to make that mob spawn when you tap a block.\nExample: /spawntouch chicken");
                    break;
                } case 'nuke': {
                    clientMessage("Type /nuke to cause a MAHOOSIVE explosion!\nExample: /nuke");
                    break;
                } case 'instabreak': {
                    clientMessage("Type /instabreak <on|off> to turn InstaBreak on or off.\nExample: /instabreak on");
                    break;
                } case 'warp': {
                    clientMessage("Type /warp <on|off> to turn Warp Panels on or off.\nExample: /warp on");
                    break;
                } case 'surface': {
                    clientMessage("Type /surface to teleport to the surface above you.\nExample: /surface");
                    break;
                } case 'ascend': {
                    clientMessage("Type /ascend to teleport to the platform above you.\nExample: /ascend");
                    break;
                } case 'descend': {
                    clientMessage("Type /descend to teleport to the platform below you.\nExample: /descend");
                    break;
                } case 'refresh': {
                    clientMessage("Type /refresh to regain all items required for currently active commands.\nExample: /refresh");
                    break;
                } case 'panorama': {
                    clientMessage("Type /panorama <on|off> to activate or deactivate Panorama Mode.\nExample: /panorama on");
                    break;
                } case '1': {
                    clientMessage("Showing help page 1 of 4 (/help page)\n /ascend\n /bomb <on|detonate|off>\n /delhome\n /descend \n /explode <radius>");
                    break;
                } case '2': {
                    clientMessage("Showing help page 2 of 4 (/help page)\n /give <ID> <amount>\n /help <page|command>\n /hole\n /home\n /ignite");
                    break;
                } case '3': {
                    clientMessage("Showing help page 3 of 4 (/help page)\n /instabreak <on|off>\n /mc <on|off>\n /nuke\n /panorama <on|off>\n /pdoor <on|open|off>");
                    break;
                } case '4': {
                    clientMessage("Showing help page 4 of 4 (/help page)\n /rain <mobname>\n /sethome\n /spawntouch <mobname|off>\n /sprint <on|off> \n /tp <x> <y> <z>");
                    break;
                } default: {
                    clientMessage("Showing help page 1 of 4 (/help page)\n /ascend\n /bomb <on|detonate|off>\n /delhome\n /descend \n /explode <radius>");
                    break;
                }
            }
            break;
        } case 'give': {
            addItemInventory(parseInt(p[1]),parseInt(p[2]));
            clientMessage("Spawned " + parseInt(p[2]) + " of " + parseInt(p[1]) + "!");
            break;
        } case 'ignite': {
            setTile(getPlayerX(), getPlayerY()-1, getPlayerZ(), 51);
            break;
        } case 'tp': {
            setPosition(getPlayerEnt(), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
            clientMessage("Teleported to x: " + parseInt(p[1]) + ", y: " + parseInt(p[2]) + ", z: " + parseInt(p[3]));
            break;
        } case 'surface': {
            for(i=1;i<=128;i++) {
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
            for(i=-1;i>=-128;i--) {
                surfaceFloor = (Math.floor(getPlayerY()) - 2) + i;
                if(getTile(getPlayerX(),surfaceFloor,getPlayerZ()) != 0 && getTile(getPlayerX(),surfaceFloor + 1,getPlayerZ()) == 0 && getTile(getPlayerX(),surfaceFloor + 2,getPlayerZ()) == 0) {
                    setPosition(getPlayerEnt(),getPlayerX(),surfaceFloor + 3,getPlayerZ());
                }
            } clientMessage("Teleported to the floor beneath you!");
            break;
        } case 'coords': {
            clientMessage("Current coordinates are:\nHead: x: " + Math.floor(getPlayerX()) + " y: " + Math.floor(getPlayerY()) + " z: " + Math.floor(getPlayerZ()) + "\nFeet: x: " + Math.floor(getPlayerX()) + " y: " + Math.floor(getPlayerY() - 1) + " z: " + Math.floor(getPlayerZ()));
            break;
        } case 'explode': {
            explode(getPlayerX(), getPlayerY(), getPlayerZ(), p[1]);
            clientMessage("KAPLOOEY!!!");
            break;
        } case 'sethome': {
            bl_saveData("homeX",parseInt(getPlayerX()));
            bl_saveData("homeY",parseInt(getPlayerY()));
            bl_saveData("homeZ",parseInt(getPlayerZ()));
            bl_saveData("setHomeData",1);
            clientMessage("Home set to x: " + Math.floor(bl_readData("homeX")) + ", y: " + Math.floor(bl_readData("homeY")) + ", z: " + Math.floor(bl_readData("homeZ")));
            break;
        } case 'delhome': {
            if(bl_readData("setHomeData") == 1) {
                bl_saveData("setHomeData",0);
                clientMessage("Home successfully deleted!");
                break;
            } if(bl_readData("setHomeData") == 0) {
                clientMessage("No home is set!");
            }
            break;
        } case 'home': {
            if(bl_readData("setHomeData") == 0) {
                clientMessage("No home has been set!");
                break;
            } if(bl_readData("setHomeData") == 1) {
                setPosition(getPlayerEnt(), parseInt(bl_readData("homeX")) + 0.5, parseInt(bl_readData("homeY")) + 2, parseInt(bl_readData("homeZ")) + 0.5);
                clientMessage("Teleported to home!");
            }
            break;
        } case 'mc': {
            if(p[1] == 'on') {
                if(magicCarpet == 1) {
                    clientMessage("Magic carpet is already active!");
                    break;
                } if(magicCarpet == 0) {
                    magicCarpet = 1;
                    clientMessage("Magic carpet activated!");
                }
            } if(p[1] == 'off') {
                if(magicCarpet == 0) {
                    clientMessage("Magic carpet is already off!");
                    break;
                } if(magicCarpet == 1) {
                    magicCarpet = 0;
                    clientMessage("Magic carpet disappeared!");
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
                clientMessage("Usage: /bounce <power>");
            } else if(p[1] >= 1) {
                setVelY(getPlayerEnt(),parseInt(p[1]));
            } else {
                clientMessage("The bounce power must be a number!");
            }
            break;
        } case 'sprint': {
            if(p[1] == 'on') {
                if(sprintMode == 1) {
                    clientMessage("Sprint Mode is already active!");
                    break;
                } if(sprintMode == 0) {
                    sprintMode = 1;
                    clientMessage("Sprint Mode activated! Original Sprint Script made by WhyTuFu.");
                }
            } if(p[1] == 'off') {
                if(sprintMode == 0) {
                    clientMessage("Sprint Mode is already off!");
                    break;
                } if(sprintMode == 1) {
                    sprintMode = 0;
                    clientMessage("Sprint Mode deactivated!");
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
            clientMessage("Goodbye World");
            break;
        } case 'rain': {
            for(rainX=-21;rainX<=21;rainX = rainX + 3) {
                for(rainZ=-21;rainZ<=21;rainZ = rainZ + 3) {
                    if(p[1] == 'chicken') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+10,getPlayerZ()+rainZ,10,'mob/chicken.png');
                    } if(p[1] == 'cow') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+10,getPlayerZ()+rainZ,11,'mob/cow.png');
                    } if(p[1] == 'pig') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+10,getPlayerZ()+rainZ,12,'mob/pig.png');
                    } if(p[1] == 'sheep') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+8,getPlayerZ()+rainZ,13,'mob/sheep.png');
                    } if(p[1] == 'zombie') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,32,'mob/zombie.png');
                    } if(p[1] == 'creeper') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+17,getPlayerZ()+rainZ,33,'mob/creeper.png');
                    } if(p[1] == 'skeleton') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,34,'mob/skeleton.png');
                    } if(p[1] == 'spider') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+9,getPlayerZ()+rainZ,35,'mob/spider.png');
                    } if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
                        bl_spawnMob(getPlayerX()+rainX,getPlayerY()+15,getPlayerZ()+rainZ,36,'mob/pigzombie.png');
                    }
                }
            }
            break;
        } case 'spawntouch': {
            if(p[1] == 'chicken') {
                spawnTouchMob = 'mob/chicken.png';
                spawnTouchMobID = 10;
                spawnTouch = 1;
                clientMessage("Chicken SpawnTouch activated!");
            } if(p[1] == 'cow') {
                spawnTouchMob = 'mob/cow.png';
                spawnTouchMobID = 11;
                spawnTouch = 1;
                clientMessage("Cow SpawnTouch activated!");
            } if(p[1] == 'pig') {
                spawnTouchMob = 'mob/pig.png';
                spawnTouchMobID = 12;
                spawnTouch = 1;
                clientMessage("Pig SpawnTouch activated!");
            } if(p[1] == 'sheep') {
                spawnTouchMob = 'mob/sheep.png';
                spawnTouchMobID = 13;
                spawnTouch = 1;
                clientMessage("Sheep SpawnTouch activated!");
            } if(p[1] == 'zombie') {
                spawnTouchMob = 'mob/zombie.png';
                spawnTouchMobID = 32;
                spawnTouch = 1;
                clientMessage("Zombie SpawnTouch activated!");
            } if(p[1] == 'creeper') {
                spawnTouchMob = 'mob/creeper.png';
                spawnTouchMobID = 33;
                spawnTouch = 1;
                clientMessage("Creeper SpawnTouch activated!");
            } if(p[1] == 'skeleton') {
                spawnTouchMob = 'mob/skeleton.png';
                spawnTouchMobID = 34;
                spawnTouch = 1;
                clientMessage("Skeleton SpawnTouch activated!");
            } if(p[1] == 'spider') {
                spawnTouchMob = 'mob/spider.png';
                spawnTouchMobID = 35;
                spawnTouch = 1;
                clientMessage("Spider SpawnTouch activated!");
            } if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
                spawnTouchMob = 'mob/pigzombie.png';
                spawnTouchMobID = 36;
                spawnTouch = 1;
                clientMessage("Zombie Pigman SpawnTouch activated!");
            } if(p[1] == 'off') {
                spawnTouch = 0;
                spawnTouchMob = null;
            }
            break;
        } case 'pdoor': {
            if(p[1] == 'on') {
                if(portableDoorMode == 1) {
                    clientMessage("Portable Door mode is already on!");
                } if(portableDoorMode == 0) {
                    portableDoorMode = 1;
                    addItemInventory(280,1);
                    clientMessage("Portable Door mode has been turned on!");
                }
            } if(p[1] == 'off') {
                if(portableDoorMode == 0) {
                    clientMessage("Portable Door mode is already off!");
                } if(portableDoorMode == 1) {
                    portableDoorMode = 0;
                    portableDoorSet = 0;
                    addItemInventory(280,-1);
                    clientMessage("Portable Door mode has been turned off!");
                }
            } if(p[1] == 'open') {
                if(portableDoorMode == 0) {
                    clientMessage("Portable Door mode is off!");
                } if(bl_readData("portableDoorSet") == 0) {
                    clientMessage("No Portable Door is set!");
                } if((portableDoorMode == 1) && (bl_readData("portableDoorSet") == 1) && (portableDoorActive == 0)) {
                    pDoor = getTile(bl_readData("pDoorX"),bl_readData("pDoorY"),bl_readData("pDoorZ"));
                    pDoor1 = getTile(bl_readData("pDoorX"),bl_readData("pDoorY1"),bl_readData("pDoorZ"));
                    setTile(bl_readData("pDoorX"),bl_readData("pDoorY"),bl_readData("pDoorZ"),0);
                    setTile(bl_readData("pDoorX"),bl_readData("pDoorY1"),bl_readData("pDoorZ"),0);
                    clientMessage("Portable Door active for 5 seconds!");
                    portableDoorActive = 1;
                    countdown = 100;
                    countdownMode = 1;
                }
            }
            break;
        } case 'bomb': {
            if(p[1] == 'on') {
                if(bombMode == 1) {
                    clientMessage("Bomb detonation mode is already on!");
                } if(bombMode == 0) {
                    bombMode = 1;
                    addItemInventory(280,1);
                    clientMessage("Bomb detonation mode has been turned on!");
                }
            } if(p[1] == 'off') {
                if(bombMode == 0) {
                    clientMessage("Bomb detonation mode is already off!");
                } if(bombMode == 1) {
                    bombMode = 0;
                    addItemInventory(280,-1);
                    clientMessage("Bomb detonation mode has been turned off!");
                }
            } if(p[1] == 'detonate') {
                if(bombMode == 0) {
                    clientMessage("Bomb detonation mode is off!");
                } if(bombMode == 1) {
                    if(bombSet == 0) {
                        clientMessage("Set a bomb first!");
                } if(bombSet == 1) {
                        explode(bombX, bombY, bombZ, 5);
                        clientMessage("Detonated!");
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
                    clientMessage("Instabreak is already on!");
                    break;
                } if(instabreakMode == 0) {
                    instabreakMode = 1;
                    clientMessage("Instabreak has been turned on!");
                    addItemInventory(285,1);
                }
            } if(p[1] == 'off') {
                if(instabreakMode == 0) {
                    clientMessage("Instabreak is already on!");
                    break;
            } if(instabreakMode == 1) {
                    instabreakMode = 0;
                    addItemInvntory(285,-1);
                    clientMessage("Instabreak has been turned off!");
                }
            }
            break;
        } case 'warp': {
            if(p[1] == 'on') {
                if(warpMode == 1) {
                    clientMessage("Warp Mode is already on!");
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
                    clientMessage("Warp Panels activated!");
                }
            } if(p[1] == 'off') {
                if(warpMode == 0) {
                    clientMessage("Warp mode is already off!");
                    break;
                } if(warpMode == 1) {
                    warpMode = 0;
                    addItemInventory(341,-1);
                    addItemInventory(293,-1);
                    addItemInventory(294,-1);
                    clientMessage("Warp Panels deactivated!");
                }
            }
            break;
        } case 'refresh': {
            clientMessage("Refreshed all command items in your inventory!");
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
                    clientMessage("Panorama Mode is already active!");
                    break;
                } if(panoramaMode == 0) {
                    panoramaMode = 1;
                    clientMessage("Panorama Mode activated!");
                }
            } if(p[1] == 'off') {
                if(panoramaMode == 0) {
                    clientMessage("Panorama Mode is already off!");
                    break;
                } if(panoramaMode == 1) {
                    panoramaMode = 0;
                    clientMessage("Panorama Mode deactivated!");
                }
            }
            break;
        } default: {
            clientMessage("Command does not exist!");
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
    } if((portableDoorMode == 1) && (bl_readData("portableDoorSet") == 1) && (portableDoorActive == 1)) {
        if(countdownMode == 1) {
            if(countdown != 0) {
                countdown--;
            } if(countdown == 0) {
                setTile(bl_readData("pDoorX"),bl_readData("pDoorY"),bl_readData("pDoorZ"),pDoor);
                setTile(bl_readData("pDoorX"),bl_readData("pDoorY1"),bl_readData("pDoorZ"),pDoor1);
                clientMessage("Portable Door closed!");
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
    }
}
