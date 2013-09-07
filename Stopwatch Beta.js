/*
    © Copyright 2013 Connor4898
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/
var stopwatchX, stopwatchY, stopwatchZ, stopwatchMode = 0, stopwatchStart = 0, stopwatchTick, stopwatchTens, stopwatchMins, stopwatchTensActive, stopwatchMinsActive;
var Second1 = function Second1() {
    for(sec1X=8;sec1X<=12;sec1X++) {
        for(sec1Y=1;sec1Y<=7;sec1Y++) {
            setTile(stopwatchX+sec1X,stopwatchY+sec1Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
};
var Second2 = function Second2() {
    for(sec2X=8;sec2X<=12;sec2X++) {
        for(sec2Y=1;sec2Y<=7;sec2Y++) {
            setTile(stopwatchX+sec2X,stopwatchY+sec2Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
};
var Second3 = function Second3() {
    for(sec3X=8;sec3X<=12;sec3X++) {
        for(sec3Y=1;sec3Y<=7;sec3Y++) {
            setTile(stopwatchX+sec3X,stopwatchY+sec3Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second4 = function Second4() {
    for(sec4X=8;sec4X<=12;sec4X++) {
        for(sec4Y=1;sec4Y<=7;sec4Y++) {
            setTile(stopwatchX+sec4X,stopwatchY+sec4Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second5 = function Second5() {
    for(sec5X=8;sec5X<=12;sec5X++) {
        for(sec5Y=1;sec5Y<=7;sec5Y++) {
            setTile(stopwatchX+sec5X,stopwatchY+sec5Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second6 = function Second6() {
    for(sec6X=8;sec6X<=12;sec6X++) {
        for(sec6Y=1;sec6Y<=7;sec6Y++) {
            setTile(stopwatchX+sec6X,stopwatchY+sec6Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+3,stopwatchZ,41)
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second7 = function Second7() {
    for(sec7X=8;sec7X<=12;sec7X++) {
        for(sec7Y=1;sec7Y<=7;sec7Y++) {
            setTile(stopwatchX+sec7X,stopwatchY+sec7Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second8 = function Second8() {
    for(sec8X=8;sec8X<=12;sec8X++) {
        for(sec8Y=1;sec8Y<=7;sec8Y++) {
            setTile(stopwatchX+sec8X,stopwatchY+sec8Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second9 = function Second9() {
    for(sec9X=8;sec9X<=12;sec9X++) {
        for(sec9Y=1;sec9Y<=7;sec9Y++) {
            setTile(stopwatchX+sec9X,stopwatchY+sec9Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var Second0 = function Second0() {
    for(sec0X=8;sec0X<=12;sec0X++) {
        for(sec0Y=1;sec0Y<=7;sec0Y++) {
            setTile(stopwatchX+sec0X,stopwatchY+sec0Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+8,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+8,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+9,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+10,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+11,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+12,stopwatchY+7,stopwatchZ,41);
}
var SecondT1 = function SecondT1() {
    for(secT1X=2;secT1X<=6;secT1X++) {
        for(secT1Y=1;secT1Y<=7;secT1Y++) {
            setTile(stopwatchX+secT1X,stopwatchY+secT1Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+2,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+7,stopwatchZ,41);
};
var SecondT2 = function SecondT2() {
    for(secT2X=2;secT2X<=6;secT2X++) {
        for(secT2Y=1;secT2Y<=7;secT2Y++) {
            setTile(stopwatchX+secT2X,stopwatchY+secT2Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+2,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+7,stopwatchZ,41);
};
var SecondT3 = function SecondT3() {
    for(secT3X=2;secT3X<=6;secT3X++) {
        for(secT3Y=1;secT3Y<=7;secT3Y++) {
            setTile(stopwatchX+secT3X,stopwatchY+secT3Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+2,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+7,stopwatchZ,41);
}
var SecondT4 = function SecondT4() {
    for(secT4X=2;secT4X<=6;secT4X++) {
        for(secT4Y=1;secT4Y<=7;secT4Y++) {
            setTile(stopwatchX+secT4X,stopwatchY+secT4Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+7,stopwatchZ,41);
};
var SecondT5 = function SecondT5() {
    for(secT5X=2;secT5X<=6;secT5X++) {
        for(secT5Y=1;secT5Y<=7;secT5Y++) {
            setTile(stopwatchX+secT5X,stopwatchY+secT5Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+2,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+7,stopwatchZ,41);
};
var SecondT0 = function SecondT0() {
    for(secT0X=2;secT0X<=6;secT0X++) {
        for(secT0Y=1;secT0Y<=7;secT0Y++) {
            setTile(stopwatchX+secT0X,stopwatchY+secT0Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+2,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+1,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+2,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+3,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+4,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+5,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+6,stopwatchZ,41);
    setTile(stopwatchX+2,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+3,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+4,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+5,stopwatchY+7,stopwatchZ,41);
    setTile(stopwatchX+6,stopwatchY+7,stopwatchZ,41);
};
var SecondM1 = function SecondM1() {
    for(secM1X=-6;secM1X<=-2;secM1X++) {
        for(secM1Y=1;secM1Y<=7;secM1Y++) {
            setTile(stopwatchX+secM1X,stopwatchY+secM1Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX+-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
};
var SecondM2 = function SecondM2() {
    for(secM2X=-6;secM2X<=-2;secM2X++) {
        for(secM2Y=1;secM2Y<=7;secM2Y++) {
            setTile(stopwatchX+secM2X,stopwatchY+secM2Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
};
var SecondM3 = function SecondM3() {
    for(secM3X=-6;secM3X<=-2;secM3X++) {
        for(secM3Y=1;secM3Y<=7;secM3Y++) {
            setTile(stopwatchX+secM3X,stopwatchY+secM3Y,stopwatchZ,0);
        }
    } setTile(stopwatchX+-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX+-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
}
var SecondM4 = function SecondM4() {
    for(secM4X=-6;secM4X<=-2;secM4X++) {
        for(secM4Y=1;secM4Y<=7;secM4Y++) {
            setTile(stopwatchX+secM4X,stopwatchY+secM4Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
};
var SecondM5 = function SecondM5() {
    for(secM5X=-6;secM5X<=-2;secM5X++) {
        for(secM5Y=1;secM5Y<=7;secM5Y++) {
            setTile(stopwatchX+secM5X,stopwatchY+secM5Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
};
var SecondM6 = function SecondM6() {
    for(secM6X=-6;secM6X<=-2;secM6X++) {
        for(secM6Y=1;secM6Y<=7;secM6Y++) {
            setTile(stopwatchX+secM6X,stopwatchY+secM6Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+3,stopwatchZ,57)
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
}
var SecondM7 = function SecondM7() {
    for(secM7X=-6;secM7X<=-2;secM7X++) {
        for(secM7Y=1;secM7Y<=7;secM7Y++) {
            setTile(stopwatchX+secM7X,stopwatchY+secM7Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
}
var SecondM8 = function SecondM8() {
    for(secM8X=-6;secM8X<=-2;secM8X++) {
        for(secM8Y=1;secM8Y<=7;secM8Y++) {
            setTile(stopwatchX+secM8X,stopwatchY+secM8Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
}
var SecondM9 = function SecondM9() {
    for(secM9X=-6;secM9X<=-2;secM9X++) {
        for(secM9Y=1;secM9Y<=7;secM9Y++) {
            setTile(stopwatchX+secM9X,stopwatchY+secM9Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-2,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+2,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+3,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+4,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+5,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+6,stopwatchZ,57);
    setTile(stopwatchX-6,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-4,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-3,stopwatchY+7,stopwatchZ,57);
    setTile(stopwatchX-2,stopwatchY+7,stopwatchZ,57);
}
var SecondM0 = function SecondM0() {
    for(secM0X=-6;secM0X<=-2;secM0X++) {
        for(secM0Y=1;secM0Y<=7;secM0Y++) {
            setTile(stopwatchX+secM0X,stopwatchY+secM0Y,stopwatchZ,0);
        }
    } setTile(stopwatchX-6,stopwatchY+1,stopwatchZ,57);
    setTile(stopwatchX-5,stopwatchY+1,stopwatchZ,57);
