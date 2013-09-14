/*
InstaPixelArt
Made by Connor4898, assisted by Intyre (Thanks!)

    © Copyright 2013 Connor4898
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/


function useItem(x,y,z,itemId,blockId)
{
    getTile(x,y,z);
    if(itemId==267) {
        for(j=1;j<=31;j++) {
            for(i=-15; i<=15; i++) {
                if(j == 1) {
                    if(i >= -2 && i<= 2) {
                        setTile(x+i, y+j, z, 49);
                    }
                } if(j == 2) {
                    if((i >= -5 && i <= -3) || (i >= 3 && i <= 5)) {
                        setTile(x+i, y+j, z, 49);
                    } else if ((i >= -2 && i <= 2)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 3) {
                    if((i >= -5 && i <= 5)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -7 && i <= -6) || (i >= 6 && i <= 7)) {
                        setTile(x+i, y+j, z, 49);
                    }
                } if(j == 4) {
                    if((i >= -9 && i <= -8) || (i >= -2 && i <= 2) || (i >= 8 && i <= 9)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -7 && i <= -3) || (i >= 3 && i <= 7)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 5) {
                    if((i == -10) || (i >= -5 && i <= -3) || (i >= 3 && i <= 5) || (i == 10)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -9 && i <= -6) || (i >= 6 && i <= 9)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i == -2)) {
                        setTile(x+i, y+j, z, 112);
                    } else if((i >= -1 && i <= 2)) {
                        setTile(x+i, y+j, z, 246);
                    }
                } if(j == 6) {
                    if((i == -11) || (i >= -7 && i <= -6) || (i >= 6 && i <= 7) || (i == 11)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -10 && i <= -8) || (i >= 8 && i <= 10)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -5 && i <= -1)) {
                        setTile(x+i, y+j, z, 112);
                    } else if((i >= 0 && i <= 5)) {
                        setTile(x+i, y+j, z, 246);
                    }
                } if(j == 7) {
                    if((i == -12) || (i == -8) || (i == 8) || (i == 12)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -11 && i <= -9) || (i >= 9 && i <= 11)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -7 && i <= -1)) {
                        setTile(x+i, y+j, z, 112);
                    } else if((i >= 0 && i <= 7)) {
                        setTile(x+i, y+j, z, 246);
                    }
                } if(j == 8) {
                    if((i == -12) || (i == -9) || (i == 9) || (i == 12)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -11 && i <= -10) || (i >= 10 && i <= 11)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -8 && i <= 0)) {
                        setTile(x+i, y+j, z, 112);
                    } else if((i >= 1 && i <= 8)) {
                        setTile(x+i, y+j, z, 246);
                    }
                } if(j == 9) {
                    if((i == -13) || (i == -10) || (i == 10) || (i == 13)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -12 && i <= -11) || (i >= 11 && i <= 12)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -9 && i <= 1)) {
                        setTile(x+i, y+j, z, 112);
                    } else if((i >= 2 && i <= 9)) {
                        setTile(x+i, y+j, z, 246);
                    }
                } if(j == 10) {
                    if((i == -13) || (i == -10) || (i == 10) || (i == 13)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -12 && i <= -11) || (i >= 11 && i <= 12)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -9 && i <= 9)) {
                        setTile(x+i, y+j, z, 112);
                    }
                } if(j == 11) {
                    if((i == -14) || (i == -11) || (i == 11) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -12) || (i >= 12 && i <= 13)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -11 && i <= 11)) {
                        setTile(x+i, y+j, z, 112);
                    }
                } if(j == 12) {
                    if((i == -14) || (i == -11) || (i == 11) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -12) || (i >= 12 && i <= 13)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -11 && i <= 11)) {
                        setTile(x+i, y+j, z, 112);
                    }
                } if(j == 13) {
                    if((i == -14) || (i >= -11 && i <= 11) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -12) || (i >= 12 && i <= 13)) {
                        setTile(x+i, y+j, z, 41)
                    }
                } if(j == 14) {
                    if((i == -15) || (i == 15)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -14 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 15) {
                    if((i == -15) || (i == 15)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -14 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 16) {
                    if((i == -15) || (i == 15)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -14 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 17) {
                    if((i == -15) || (i >= -11 && i <= -2) || (i >= 1 && i <= 11) || (i == 15)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -14 && i <= -12) || (i >= -1 && i <= 0) || (i >= 12 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 18) {
                    if((i == -15) || (i == -11) || (i == -2) || (i == 1) || (i == 11) || (i == 15)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -14 && i <= -12) || (i >= -1 && i <= 0) || (i >= 12 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -11 && i <= -2) || (i >= 2 && i <= 10)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 19) {
                    if((i == -14) || (i == -11) || (i == -2) || (i == 1) || (i == 11) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -12) || (i >= -1 && i <= 0) || (i >= 12 && i <= 13)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -11 && i <= -2) || (i >= 2 && i <= 10)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 20) {
                    if((i == -14) || (i == -11) || (i == -2) || (i == 1) || (i == 11) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -12) || (i >= -1 && i <= 0) || (i >= 12 && i <= 13)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -11 && i <= -2) || (i >= 2 && i <= 10)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 21) {
                    if((i == -14) || (i >= -10 && i <= -7) || (i == -3) || (i >= 2 && i <= 5) || (i == 10) || (i == 14)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -13 && i <= -11) || (i >= -2 && i <= 1) || (i >= 10 && i <= 14)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -6 && i <= -4) || (i >= 6 && i <= 9)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 22) {
                    if((i == -13) || (i >= -10 && i <= -6) || (i == -3) || (i >= 2 && i <= 6) || (i == 10) || (i == 13)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -12 && i <= -11) || (i >= -2 && i <= 1) || (i >= 11 && i <= 12)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -5 && i <= -4) || (i >= 7 && i <= 9)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 23) {
                    if((i == -13) || (i >= -10 && i <= -6) || (i == -3) || (i >= 2 && i <= 6) || (i == 10) || (i == 13)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -12 && i <= -11) || (i >= -2 && i <= 1) || (i >= 11 && i <= 12)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i >= -5 && i <= -4) || (i >= 7 && i <= 9)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 24) {
                    if((i == -12) || (i >= -9 && i <= -6) || (i == -4) || (i >= 3 && i <= 6) || (i == 9) || (i == 12)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -11 && i <= -10) || (i >= -3 && i <= 2) || (i >= 10 && i <= 11)) {
                        setTile(x+i, y+j, z, 41);
                    } else if((i == -5) || (i >= 7 && i <= 8)) {
                        setTile(x+i, y+j, z, 155);
                    }
                } if(j == 25) {
                    if((i == -12) || (i >= -8 && i <= -5) || (i >= 4 && i <= 8) || (i == 12)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -11 && i <= -9) || (i >= -4 && i <= 3) || (i >= 9 && i <= 11)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 26) {
                    if((i == -11) || (i == 11)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -10 && i <= 10)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 27) {
                    if((i == -10) || (i == 10)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -9 && i <= 9)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 28) {
                    if((i >= -9 && i <= -8) || (i >= 8 && i <= 9)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -7 && i <= 7)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 29) {
                    if((i >= -7 && i <= -6) || (i >= 6 && i <= 7)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -5 && i <= 5)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 30) {
                    if((i >= -5 && i <= -3) || (i >= 3 && i <= 5)) {
                        setTile(x+i, y+j, z, 49);
                    } else if((i >= -2 && i <= 2)) {
                        setTile(x+i, y+j, z, 41);
                    }
                } if(j == 31) {
                    if((i >= -2 && i <= 2)) {
                        setTile(x+i, y+j, z, 49);
                    }
                }
            }
        }
    }
    clientMessage("ModPE Script made by Connor4898, assisted by Intyre")
}
