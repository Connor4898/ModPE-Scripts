/*
Single Player Commands Saving Beta

    © Copyright 2013 Connor4898
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/

var homeX;
var homeY;
var homeZ;
var warpMode = 0;
var warpSetA1 = 0;
var warpA1X;
var warpA1Y;
var warpA1Z;
var warpSetA2 = 0;
var warpA2X;
var warpA2Y;
var warpA2Z;
var warpSetB1;
var warpB1X;
var warpB1Y;
var warpB1Z;
var warpSetB2;
var warpB2X;
var warpB2Y;
var warpB2Z;

function useItem(x,y,z,itemId,blockId,side) {
    if(getTile(0,127,0) == 7) {
        if(warpMode == 1) {
            if(itemId == 293 || itemId == 292) {//Diamond and Iron hoe
                if(blockId == 57) {
                    if(getTile(255,0,5) == 7) {
                        for(clrWarpA1=0;clrWarpA1<=255;clrWarpA1++) {
                            setTile(clrWarpA1,0,4,0);
                            setTile(clrWarpA1,0,5,0);
                            setTile(clrWarpA1,0,6,0);
                        }
                    } warpSetA1 = 1;
                    setTile(255,0,5,7);
                    warpA1X = x;
                    setTile(warpA1X,0,4,7);
                    warpA1Y = y;
                    setTile(warpA1Y,0,5,7);
                    warpA1Z = z;
                    setTile(warpA1Z,0,6,7);
                    clientMessage("A1 set!");
                } if(blockId == 41) {
                    for(clrWarpA1=0;clrWarpA1<=255;clrWarpA1++) {
                            setTile(clrWarpA1,0,10,0);
                            setTile(clrWarpA1,0,11,0);
                            setTile(clrWarpA1,0,12,0);
                        }
                    } warpSetB1 = 1;
                    setTile(255,0,11,7);
                    warpB1X = x;
                    setTile(warpB1X,0,10,7);
                    warpB1Y = y;
                    setTile(warpB1Y,0,11,7);
                    warpB1Z = z;
                    setTile(warpB1Z,0,12,7);
                    clientMessage("B1 set!");
                }
            } if(itemId == 294 || itemId == 261) {//Gold hoe and Bow
                if(blockId == 57) {
                    for(clrWarpA1=0;clrWarpA1<=255;clrWarpA1++) {
                            setTile(clrWarpA1,0,7,0);
                            setTile(clrWarpA1,0,8,0);
                            setTile(clrWarpA1,0,9,0);
                        }
                    } warpSetA2 = 1;
                    setTile(255,0,8,7);
                    warpA2X = x;
                    setTile(warpA2X,0,7,7);
                    warpA2Y = y;
                    setTile(warpA2Y,0,8,7);
                    warpA2Z = z;
                    setTile(warpA2Z,0,9,7);
                    clientMessage("A2 set!");
                } if(blockId == 41) {
                    for(clrWarpA1=0;clrWarpA1<=255;clrWarpA1++) {
                            setTile(clrWarpA1,0,13,0);
                            setTile(clrWarpA1,0,14,0);
                            setTile(clrWarpA1,0,15,0);
                        }
                    } warpSetB2 = 1;
                    setTile(255,0,14,7);
                    warpB2X = x;
                    setTile(warpB2X,0,13,7);
                    warpB2Y = y;
                    setTile(warpB2Y,0,14,7);
                    warpB2Z = z;
                    setTile(warpB2Z,0,15,7);
                    clientMessage("B2 set!");
                }
            } if(itemId == 341 || itemId == 267) {//Slimeball and Iron sword
                if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 57) {
                    if(getTile(255,0,5) == 7) {
                        for(cWarpA1X=0;cWarpA1X<=255;cWarpA1X++) {
                            if(getTile(cWarpA1X,0,4) == 7) {
                                warpA1X = cWarpA1X;
                            }
                        } for(cWarpA1Y=0;cWarpA1Y<=127;cWarpA1Y++) {
                            if(getTile(cWarpA1Y,0,5) == 7) {
                                warpA1Y = cWarpA1Y;
                            }
                        } for(cWarpA1Z=0;cWarpA1Z<=255;cWarpA1Z++) {
                            if(getTile(cWarpA1Z,0,6) == 7) {
                                warpA1Z = cWarpA1Z;
                            }
                        } if(Math.floor(getPlayerX()) == warpA2X && Math.floor(getPlayerY()) - 2 == warpA2Y && Math.floor(getPlayerZ()) == warpA2Z) {
                            setPosition(getPlayerEnt(), warpA1X + 0.5, warpA1Y + 3, warpA1Z + 0.5);
                        }
                    } if(getTile(255,0,8) == 7) {
                        for(cWarpA2X=0;cWarpA2X<=255;cWarpA2X++) {
                            if(getTile(cWarpA2X,0,4) == 7) {
                                warpA2X = cWarpA2X;
                            }
                        } for(cWarpA2Y=0;cWarpA2Y<=127;cWarpA2Y++) {
                            if(getTile(cWarpA2Y,0,5) == 7) {
                                warpA2Y = cWarpA2Y;
                            }
                        } for(cWarpA2Z=0;cWarpA2Z<=255;cWarpA2Z++) {
                            if(getTile(cWarpA2Z,0,6) == 7) {
                                warpA2Z = cWarpA2Z;
                            }
                        } if(Math.floor(getPlayerX()) == warpA1X && Math.floor(getPlayerY()) - 2 == warpA1Y && Math.floor(getPlayerZ()) == warpA1Z) {
                            setPosition(getPlayerEnt(), warpA2X + 0.5, warpA2Y + 3, warpA2Z + 0.5);
                        }
                    }
                } if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 41) {
                    if(getTile(255,0,11) == 7) {
                        for(cWarpB1X=0;cWarpB1X<=255;cWarpB1X++) {
                            if(getTile(cWarpB1X,0,10) == 7) {
                                warpB1X = cWarpB1X;
                            }
                        } for(cWarpB1Y=0;cWarpB1Y<=127;cWarpB1Y++) {
                            if(getTile(cWarpB1Y,0,11) == 7) {
                                warpB1Y = cWarpB1Y;
                            }
                        } for(cWarpB1Z=0;cWarpB1Z<=255;cWarpB1Z++) {
                            if(getTile(cWarpB1Z,0,12) == 7) {
                                warpB1Z = cWarpB1Z;
                            }
                        } if(Math.floor(getPlayerX()) == warpB2X && Math.floor(getPlayerY()) - 2 == warpB2Y && Math.floor(getPlayerZ()) == warpB2Z) {
                            setPosition(getPlayerEnt(), warpB1X + 0.5, warpB1Y + 3, warpB1Z + 0.5);
                        }
                    } if(getTile(255,0,14) == 7) {
                        for(cWarpB2X=0;cWarpB2X<=255;cWarpB2X++) {
                            if(getTile(cWarpB2X,0,13) == 7) {
                                warpB2X = cWarpB2X;
                            }
                        } for(cWarpB2Y=0;cWarpB2Y<=127;cWarpB2Y++) {
                            if(getTile(cWarpB2Y,0,14) == 7) {
                                warpB2Y = cWarpB2Y;
                            }
                        } for(cWarpB2Z=0;cWarpB2Z<=255;cWarpB2Z++) {
                            if(getTile(cWarpB2Z,0,15) == 7) {
                                warpB2Z = cWarpB2Z;
                            }
                        } if(Math.floor(getPlayerX()) == warpB1X && Math.floor(getPlayerY()) - 2 == warpB1Y && Math.floor(getPlayerZ()) == warpB1Z) {
                            setPosition(getPlayerEnt(), warpB2X + 0.5, warpB2Y + 3, warpB2Z + 0.5);
                        }
                    }
                }
            }
        }
    }
}

function procCmd(c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'setup': {
            setTile(0,127,0,7);
            for(i=0;i<=255;i++) {
                for(j=0;j<=255;j++) {
                    setTile(i,0,j,0);
                    setTile(i,1,j,7);
                }
            } clientMessage("\nSetup complete!")
            break;
        } case 'sethome': {
            if(getTile(0,127,0) == 7) {
                for(clrHome=0;clrHome<=255;clrHome++) {
                    setTile(clrHome,0,0);
                    setTile(clrHome,0,1);
                    setTile(clrHome,0,2);
                } homeX = Math.floor(getPlayerX());
                setTile(homeX,0,0,7);
                homeY = Math.floor(getPlayerY());
                if(homeY <= 127) {
                    setTile(homeY,0,1,7);
                } homeZ = Math.floor(getPlayerZ());
                setTile(homeZ,0,2,7);
                setTile(255,0,1,7);
                clientMessage("\nHome set to x: " + homeX + ", y: " + homeY + ", z: " + homeZ);
            } if(getTile(0,127,0) == 0) {
                clientMessage("\nType /setup");
            }
            break;
        } case 'delhome': {
            if(getTile(0,127,0) == 7) {
                clientMessage("\nHome cleared!")
                for(clrHome=0;clrHome<=255;clrHome++) {
                    setTile(clrHome,0,0);
                    setTile(clrHome,0,1);
                    setTile(clrHome,0,2);
                }
                break;
            } if(getTile(0,127,0) == 0) {
                clientMessage("\nType /setup");
            }
            break;
        } case 'home': {
            if(getTile(0,127,0) == 7) {
                if(getTile(255,0,1) == 7) {
                    for(cHomeX=0;cHomeX<=255;cHomeX++) {
                        if(getTile(cHomeX,0,0) == 7) {
                            homeX = cHomeX;
                        }
                    } for(cHomeY=0;cHomeY<=127;cHomeY++) {
                        if(getTile(cHomeY,0,1) == 7) {
                            homeY = cHomeY;
                        }
                    } for(cHomeZ=0;cHomeZ<=255;cHomeZ++) {
                        if(getTile(cHomeZ,0,2) == 7) {
                            homeZ = cHomeZ;
                        }
                    } setPosition(getPlayerEnt(), homeX + 0.5, homeY + 1, homeZ + 0.5);
                    clientMessage("\nTeleported to home!");
                    break;
                } if(getTile(255,0,1) == 0) {
                    clientMessage("\nSet a home first!");
                }
                break;
            } if(getTile(0,127,0) == 0) {
                clientMessage("\nType /setup");
            }
            break;
        } case 'warp': {
            if(p[1] == 'on') {
                if(getTile(0,127,0) == 7) {
                    if(warpMode == 0) {
                        warpMode = 1;
                        clientMessage("Warp Mode activated!");
                        break;
                    } if(warpMode == 1) {
                        clientMessage("Warp Mode is already active!");
                        break;
                    }
                } if(getTile(0,127,0) == 0) {
                    clientMessage("Type /setup");
                }
            } if(p[1] == 'off') {
                if(getTile(0,127,0) == 7) {
                    if(warpMode == 1) {
                        warpMode = 0;
                        clientMessage("Warp Mode deactivated!");
                        break;
                    } if(warpMode == 0) {
                        clientMessage("Warp Mode is already off!");
                        break;
                    }
                } if(getTile(0,127,0) == 0) {
                    clientMessage("Type /setup");
                }
            }
        }
    }
}
