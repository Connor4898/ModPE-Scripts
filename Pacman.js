/*
Pacman
Made by Connor4898

	© Copyright 2013 Connor4898
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
*/

function procCmd(c) {
	var p = c.split(" ");
	if(p[0] == 'pmmaze') {
		for(i=-27;i<=27;i++) {
			for(j=-32;j<=27;j++) {
				Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY())-2,Math.floor(Player.getZ())+j,49);
				Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY())-1,Math.floor(Player.getZ())+j,0);
				Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY()),Math.floor(Player.getZ())+j,0);
				Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY())+1,Math.floor(Player.getZ())+j,0);
				if(i == -27 || i == 27 || j == -32 || j == 27) {
					makeWall();
				} if(j == -28) {
					if((i >= -23 && i <= -5) || (i >= -1 && i <= 1) || (i >= 5 && i <= 23)) {
						makeWall();
					}
				} if(j == -27) {
					if(i == -23 || i == -5 || i == -1 || i == 1  || i == 5 || i == 23) {
						makeWall();
					}
				} if(j == -26) {
					if((i >= -23 && i <= -13) || (i >= -11 && i <= -5) || i == -1 || i == 1 || (i >= 5 && i <= 11) ||(i >= 13 && i <= 23)) {
						makeWall();
					}
				} if(j >= -25 && j <= -23) {
					if(i == -13 || i == -11 || i == -1 || i == 1 || i == 11 || i == 13) {
						makeWall();
					}
				} if(j == -22) {
					if((i >= -26 && i <= -23) || (i >= -19 && i <= -17) || i == -13 || i == -11 || (i >= -7 && i <= -1) || (i >= 1 && i <= 7) || i == 11 || i == 13 || (i >= 17 && i <= 19) || (i >= 23 && i <= 26)) {
						makeWall();
					}
				} if(j == -21) {
					if(i == -23 || i == -19 || i == -17 || i == -13 || i == -11 || i == -7 || i == 7 || i == 11 || i == 13 || i == 17 || i == 19 || i == 23) {
						makeWall();
					}
				} if(j == -20) {
					if((i >= -26 && i <= -23) || i == -19 || i == -17 || (i >= -13 && i <= -11) || (i >= -7 && i <= 7) || (i >= 11 && i <= 13) || i == 17 || i == 19 || (i >= 23 && i <= 26)) {
						makeWall();
					}
				} if(j >= -19 && j <= -17) {
					if(i == -19 || i == -17 || i == 17 || i == 19) {
						makeWall();
					}
				} if(j == -16) {
					if((i >= -23 && i <= -19) || i == -17 || (i >= -13 && i <= -5) || (i >= -1 && i <= 1) || (i >= 5 && i <= 13) || i == 17 || (i >= 19 && i <= 23)) {
						makeWall();
					}
				} if(j == -15) {
					if(i == -23 || i == -17 || i == -13 || i == -5 || i == -1 || i == 1 || i == 5 || i == 13 || i == 17 || i == 23) {
						makeWall();
					}
				} if(j == -14) {
					if((i >= -23 && i <= -17) || (i >= -13 && i <= -5) || i == -1 || i == 1 || (i >= 5 && i <= 13) || (i >= 17 && i <= 23)) {
						makeWall();
					}
				} if(j >= -13 && j <= -11) {
					if(i == -1 || i == 1) {
						makeWall();
					}
				} if(j == -10) {
					if((i >= -26 && i <= -17) || (i >= -13 && i <= -11) || (i >= -7 && i <= -1) || (i >= 1 && i <= 7) || (i >= 11 && i <= 13) || (i >= 17 && i <= 26)) {
						makeWall();
					}
				} if(j == -9) {
					if(i == -17 || i == -13 || i == -11 || i == -7 || i == 7 || i == 11 || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == -8) {
					if(i == -17 || i == -13 || i == -11 || (i >= -7 && i <= 7) || i == 11 || i == 13 || i == 17) {
						makeWall();
					}
				} if((j >= -7 && j <= -5) || (j >= 5 && j <= 7)) {
					if(i == -17 || i == -13 || i == -11 || i == 11 || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == -4 || j == 4) {
					if(i == -17 || i == -13 || i == -11 || (i >= -7 && i <= 7) || i == 11 || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == -3 || j == 3) {
					if(i == -17 || i == -13 || i == -11 || i == -7 || i == 7 || i == 11 || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == -2 || j == 2) {
					if((i >= -26 && i <= -17) || (i >= -13 && i <= -11) || i == -7 || i == 7 || (i >= 11 && i <= 13) || (i >= 17 && i <= 26)) {
						makeWall();
					}
				} if(j >= -1 && j <= 1) {
					if(i == -7 || i == 7) {
						makeWall();
					}
				} if(j == 8) {
					if(i == -17 || i == -13 || (i >= -11 && i <= -5) || (i >= -1 && i <= 1) || (i >= 5 && i <= 11) || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == 9) {
					if(i == -17 || i == -13 || i == -5 || i == -1 || i == 1 || i == 5 || i == 13 || i == 17) {
						makeWall();
					}
				} if(j == 10) {
					if((i >= -26 && i <= -17) || i == -13 || (i >= -11 && i <= -5) || i == -1 || i == 1 || i == 1 || (i >= 5 && i <= 11) || i == 13 || (i >= 17 && i <= 26)) {
						makeWall();
					}
				} if(j >= 11 && j <= 13) {
					if(i == -13 || i == -11 || i == -1 || i == 1 || i == 11 || i == 13) {
						makeWall();
					}
				} if(j == 14) {
					if((i >= -23 && i <= -17) || i == -13 || i == -11 || (i >= -7 && i <= -1) || (i >= 1 && i <= 7) || i == 11 || i == 13 || (i >= 17 && i <= 23)) {
						makeWall();
					}
				} if(j == 15) {
					if(i == -23 || i == -17 || i == -13 || i == -11 || i == -7 || i == 7 || i == 11 || i == 13 || i == 17 || i == 23) {
						makeWall();
					}
				} if(j == 16) {
					if((i >= -23 && i <= -17) || (i >= -13 && i <= -11) || (i >= -7 && i <= 7) || (i >= 11 && i <= 13) || (i >= 17 && i <= 23)) {
						makeWall();
					}
				} if(j == 20) {
					if((i >= -23 && i <= -17) || (i >= -13 && i <= -5) || (i >= -1 && i <= 1) || (i >= 5 && i <= 13) || (i >= 17 && i <= 23)) {
						makeWall();
					}
				} if(j >= 21 && j <= 23) {
					if(i == -23 || i == -17 || i == -13 || i == -5 || i == -1 || i == 1 || i == 5 || i == 13 || i == 17 || i == 23) {
						makeWall();
					}
				} if(j == 24) {
					if((i >= -23 && i <= -17) || (i >= -13 && i <= -5) || i == -1 || i == 1 || (i >= 5 && i <= 13) || (i >= 17 && i <= 23)) {
						makeWall();
					}
				} if(j == 25 || j == 26) {
					if(i == -1 || i == 1) {
						makeWall();
					}
				}
			}
		}
	}
}

function makeWall() {
	Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY())-1,Math.floor(Player.getZ())+j,22);
	Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY()),Math.floor(Player.getZ())+j,22);
	Level.setTile(Math.floor(Player.getX())+i,Math.floor(Player.getY())+1,Math.floor(Player.getZ())+j,22);
}