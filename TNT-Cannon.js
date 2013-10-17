/*
TNT Cannon
Made by Connor4898

    © Copyright 2013 Connor4898
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
*/

var cannonActive = 0;
var cannonCountdown = 0;
var velX, velY, velZ, tnt;

function procCmd(c) {
	var p = c.split(" ");
	var command = p[0];
	if(command == 'launch') {
		if(cannonActive == 0) {
			cannonCountdown = 0;
			cannonActive = 1;
		}
	}
}

function modTick() {
	if(cannonActive == 1) {
		cannonCountdown++;
		if(cannonCountdown == 1) {
			clientMessage("[TNT] 3");
		} if(cannonCountdown == 20) {
			clientMessage("[TNT] 2");
		} if(cannonCountdown == 40) {
			clientMessage("[TNT] 1");
		} if(cannonCountdown == 60) {
			var playerYaw = Entity.getYaw(Player.getEntity());
			var playerPitch = Entity.getPitch(Player.getEntity());
			velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
			velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
			velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
			tnt = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),65);
			setVelX(tnt,velX);
			setVelY(tnt,velY);
			setVelZ(tnt,velZ);
			clientMessage("[TNT] Launched!");
			cannonActive = 0;
		}
	}
}
