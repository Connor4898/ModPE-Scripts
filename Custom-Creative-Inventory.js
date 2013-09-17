/*
Custom Creative Inventory
Made by Connor4898

    © Copyright 2013 Connor4898
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/
function procCmd(c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'setitem': {
            if(p[1] > 0) {
                setCarriedItem(getPlayerEnt(),p[1]);
            }
        }
    }
}
