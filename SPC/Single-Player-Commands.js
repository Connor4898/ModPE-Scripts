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

var setHomeData = 0, bombMode = 0, bombSet = 0, portableDoorMode = 0, portableDoorSet = 0, portableDoorActive = 0, pDoorX, pDoorY, pDoorZ, pDoor, pDoor1, magicCarpet = 0, sprintMode = 0, Xpos = 0, Zpos = 0, sprintTick = 1, Xdiff = 0, Zdiff = 0, countdownMode = 0, countdown = 0, spawnTouch = 0, spawnTouchMob = null, spawnTouchMobID, instabreakMode = 0, instabreakBlock, warpMode = 0, warpSetA1 = 0, warpA1X, warpA1Y, warpA1Z, warpSetA2 = 0, warpA2X, warpA2Y, warpA2Z, warpSetB1 = 0, warpB1X, warpB1Y, warpB1Z, warpSetB2 = 0, warpB2X, warpB2Y, warpB2Z, warpSetC1 = 0, warpC1X, warpC1Y, warpC1Z, warpSetC2 = 0, warpC2X, warpC2Y, warpC2Z, warpSetD1 = 0, warpD1X, warpD1Y, warpD1Z, warpSetD2 = 0, warpD2X, warpD2Y, warpD2Z, nextYaw = 0, panoramaMode = 0, panCountdown = 0, msg, msgTick = 100;

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
            msg = "\nCommands: /commands, /help <command>, /explode <raduis>, /give <ID> <amount>, /ignite, /tp <x> <y> <z>, /sethome, /home, /delhome, /bomb <on|detonate|off>, /pdoor <on|open|off>, /mc <on|off>, /sprint <on|off>, /hole, /spawntouch <mobname|off>, /rain <mobname>, /nuke, /instabreak <on|off>, /surface, /ascend, /descend, /panorama <on|off>.\nMade by Connor4898 & CheesyFriedBacon";
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
                    msg = "\nType /give <ID> <amount> to add any item to your inventory.\nExample: /give 57 64";
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
                    msg = "\nType /rain <mobname> to make it rain animals!\nExample: /rain chicken";
                    msgTime();
                    break;
                } case 'spawntouch': {
                    msg = "\nType /spawntouch <mobname|off> to make that mob spawn when you tap a block.\nExample: /spawntouch chicken";
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
                    msgTime()
                } case 'panorama': {
                    msg = "\nType /panorama <on|off> to activate or deactivate Panorama Mode.\nExample: /panorama on";
                    msgTime();
                } default: {
                    msg = "\nCommands: /commands, /help <command>, /explode <raduis>, /give <ID> <amount>, /ignite, /tp <x> <y> <z>, /sethome, /home, /delhome, /bomb <on|detonate|off>, /pdoor <on|open|off>, /mc <on|off>, /sprint <on|off>, /hole, /spawntouch <mobname|off>, /rain <mobname>, /nuke, /instabreak <on|off>, /surface, /ascend, /descend, /panorama <on|off>.\nMade by Connor4898 & CheesyFriedBacon";
                    msgTime();
                    break;
                }
            }
            break;
        } case 'give': {
            addItemInventory(parseInt(p[1]),parseInt(p[2]));
            msg = "\nSpawned " + parseInt(p[2]) + " of " + parseInt(p[1]) + "!";
            msgTime();
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
                msg = "\nChicken SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'cow') {
                spawnTouchMob = 'mob/cow.png';
                spawnTouchMobID = 11;
                spawnTouch = 1;
                msg = "\nCow SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'pig') {
                spawnTouchMob = 'mob/pig.png';
                spawnTouchMobID = 12;
                spawnTouch = 1;
                msg = "\nPig SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'sheep') {
                spawnTouchMob = 'mob/sheep.png';
                spawnTouchMobID = 13;
                spawnTouch = 1;
                msg = "\nSheep SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'zombie') {
                spawnTouchMob = 'mob/zombie.png';
                spawnTouchMobID = 32;
                spawnTouch = 1;
                msg = "\nZombie SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'creeper') {
                spawnTouchMob = 'mob/creeper.png';
                spawnTouchMobID = 33;
                spawnTouch = 1;
                msg = "\nCreeper SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'skeleton') {
                spawnTouchMob = 'mob/skeleton.png';
                spawnTouchMobID = 34;
                spawnTouch = 1;
                msg = "\nSkeleton SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'spider') {
                spawnTouchMob = 'mob/spider.png';
                spawnTouchMobID = 35;
                spawnTouch = 1;
                msg = "\nSpider SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
                spawnTouchMob = 'mob/pigzombie.png';
                spawnTouchMobID = 36;
                spawnTouch = 1;
                msg = "\nZombie Pigman SpawnTouch activated!";
                msgTime();
            } if(p[1] == 'off') {
                spawnTouch = 0;
                spawnTouchMob = null;
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
        if(msg.length > 40) {
            print(msg);
        }
    } if(msgTick == 2) {
        if(msg.length > 80) {
            print(msg);
        }
    } if(msgTick == 3) {
        if(msg.length > 120) {
            print(msg);
        }
    } if(msgTick == 4) {
        if(msg.length > 160) {
            print(msg);
        }
    } if(msgTick == 5) {
        if(msg.length > 200) {
            print(msg);
        }
    }
}
