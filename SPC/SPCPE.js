/**
 *  ________ ________ ________ ________ ________
 * |        |   __   |        |   __   |   __   |
 * |   _____|  |  |  |    ____|  |  |  |  |  |  |
 * |        |  |__|  |   |    |  |__|  |  |__|  |
 * |_____   |   _____|   |____|   _____|   _____|
 * |        |  |     |        |  |     |  |_____
 * |________|__|     |________|__|     |________|
 *
 * Single Player Commands Pocket Edition
 * Made by Connor4898
 *
 * © Copyright 2014 Connor4898
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
*/

//Is the script active?
var active = false;
//A variable to store the mcpe activity
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
//Does the user have the config for /give?
var hasGiveFile = false;
//What version is the user running?
var version = "BETA";
//Arrays to store the /give names and IDs
var names = [];
var ids = [];
//A bunch of other variables
var panoActive = false;
var showingCoords = false;
var coordsActive = false;
var window = null;
var textview = null;
var mcActive = false;
var mcTick = 0;

function procCmd(cmd) {
	names = [];
	ids = [];

	var evalParams = cmd.split(" ");
	var params = cmd.toLowerCase().split(" ");
	var moarData;
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try {
			if(params[0] === "give") {
				var giveFile = new java.io.File("/sdcard/SPCPE/", "SPCPE-Give-Config.txt");
				if(giveFile.isFile()) {
					hasGiveFile = true;
					var fis = new java.io.BufferedReader(new java.io.FileReader(giveFile));
					var s = null;
					while((s = fis.readLine()) !== null) {
						moarData = s.split("=");
						names.push(""+moarData[0]);
						ids.push(""+moarData[1]);
					}
				}
				else {
					hasGiveFile = false;
				}
			}
		}
		catch (e) { }
		if(evalParams[0].toLowerCase() === "eval") {
			evalMsg = "";
			for(i = 1; i <= (evalParams.length); i++) {
				evalMsg += evalParams[i] + " ";
			}
			eval(evalMsg);
		}
		else {
			main(params);
		}
	}}));
}

function main(p) {
	switch(p[0]) {
		case "help":
		case "?":
		case "commands":
			switch(p[1]) {
				case "asc":
				case "ascend":
					showHelp("ascend", "Ascends the player to the platform above", "", "");
					break;
				case "bounce":
					showHelp("bounce", "Launches the player into the air", "<POWER>", "2");
					break;
				case "coords":
				case "coordinates":
					showHelp("coords", "Shows the player's current coordinates", "", "");
					break;
				case "desc":
				case "descend":
					showHelp("descend", "Descends the player to the platform below", "", "");
					break;
				case "explode":
					showHelp("explode", "Sets off an explosion at your location", "[RADIUS]", "5");
					break;
				case "gm":
				case "gamemode":
					showHelp("gamemode", "Changes your gamemode", "[survival|creative]", "creative");
					break;
				case "give":
					showHelp("give", "Gives the player the specified item", "<ID|ITEMNAME> <QUANTITY>", "diamond 32");
					break;
				case "heal":
					showHelp("heal", "Heals the player by the specified points", "[QUANTITY]", "20");
					break;
				case "health":
					showHelp("health", "Sets the health of the player to pre-defiined figures", "<min|max|infinite|get>", "max");
					break;
				case "hole":
					showHelp("hole", "Creates a hole underneath you", "", "");
					break;
				case "ignite":
					showHelp("ignite", "Sets the player on fire", "[SECONDS]", "5");
					break;
				case "kill":
					showHelp("kill", "Kills the player", "", "");
					break;
				case "mc":
				case "magiccarpet":
					showHelp("magiccarpet", "Creates a carpet of glass under you", "", "");
					break;
				case "pano":
				case "panorama":
					showHelp("panorama", "Makes viewing a panorama easier", "", "");
					break;
				case "spcpe":
					showHelp("spcpe", "Provides generic information about SPCPE", "", "");
					break;
				case "time":
					showHelp("time", "Sets the in-game time", "<day|night|sunrise|sunset|midday|midnight>", "sunrise");
					break;
				case "tp":
					showHelp("tp", "Teleports the player to the specified coordinates", "<X> <Y> <Z>", "43, 64, 78");
					break;
				default:
					if(isset(p[1])) {
						if(parseInt(p[1])) {
							showHelpPage(p[1]);
						}
						else {
							errorMsg("Specified command name " + p[1] + " does not exist!");
						}
					}
					else {
						showHelpPage(1);
					}
					break;
			}
			break;

		case "asc":
		case "ascend":
			var x = Player.getX();
			var y = Math.floor(Player.getY());
			var z = Player.getZ();
			for(i = 1; i <= 128; i++) {
				var surfaceFloor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(x, surfaceFloor, z) !== 0 && Level.getTile(x, surfaceFloor + 1, z) === 0 && Level.getTile(x, surfaceFloor + 2, z) === 0) {
					Entity.setPosition(Player.getEntity(), x, surfaceFloor + 3, z);
				}
			}
			var dif = Math.floor(Player.getY()) - y;
			colourMsg("You ascended §b" + dif + " §fblocks.");
			break;

		case "bounce":
			if(!isset(p[1])) {
				errorMsg("Not enough parameters!");
			}
			else if(!parseInt(p[1])) {
				errorMsg("The strength must be a number!");
			}
			else if(parseInt(p[1])) {
				Entity.setVelY(Player.getEntity(), p[1] / 3);
			}
			else {
				errorMsg("Error in bounce command.");
			}
			break;

		case "coords":
		case "coordinates":
			if(showingCoords) {
				dismissCoords();
				colourMsg("Showing coordinates is §binactive§f!");
			}
			else {
				colourMsg("Showing coordinates is §bactive§f!");
				showingCoords = true;
			}
			break;

		case "desc":
		case "descend":
			var x = Player.getX();
			var y = Math.floor(Player.getY());
			var z = Player.getZ();
			for(i = -1; i >= -128; i--) {
				var surfaceFloor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(x, surfaceFloor, z) !== 0 && Level.getTile(x, surfaceFloor + 1, z) === 0 && Level.getTile(x, surfaceFloor + 2, z) === 0) {
					Entity.setPosition(Player.getEntity(), x, surfaceFloor + 3, z);
				}
			}
			var dif = y - Math.floor(Player.getY());
			colourMsg("You descended §b" + dif + " §fblocks.");
			break;

		case 'explode':
			if(!isset(p[1])) {
				Level.explode(Player.getX(), Player.getY(), Player.getZ(), 5);
			}
			else if(!parseInt(p[1])) {
				errorMsg("The radius must be a number!");
			}
			else if(parseInt(p[1])) {
				Level.explode(Player.getX(), Player.getY(), Player.getZ(), p[1]);
			}
			else {
				errorMsg("Error in explode command.");
			}
			break;

		case "gm":
		case "gamemode":
			if(!isset(p[1])) {
				Level.setGameMode(Level.getGameMode() === 0 ? 1 : 0);
				colourMsg("Gamemode changed to §b" + (Level.getGameMode() === 0 ? "survival§f." : "creative§f."));
			}
			else if(p[1] === '0') {
				Level.setGameMode(p[1]);
				colourMsg("Gamemode changed to §bsurvival§f.");
			}
			else if(parseInt(p[1])) {
				p[1] = parseInt(p[1]);
				if(p[1] === 1) {
					Level.setGameMode(p[1]);
					colourMsg("Gamemode changed to §bcreative§f.");
				}
				else {
					errorMsg("Parameter " + p[1] + " is an unexpected value");
					errorMsg("(0, 1, s, c,  survival, creative)");
				}
			}
			else if(p[1] === "s" || p[1] === "survival") {
				Level.setGameMode(0);
				colourMsg("Gamemode changed to §bsurvival§f.");
			}
			else if(p[1] === "c" || p[1] === "creative") {
				Level.setGameMode(1);
				colourMsg("Gamemode changed to §bcreative§f.");
			}
			else {
				errorMsg("Parameter " + p[1] + " is an unexpected value");
				errorMsg("(0, 1, s, c,  survival, creative)");
			}
			break;

		case "gms":
			Level.setGameMode(0);
			colourMsg("Gamemode changed to §bsurvival§f.");
			break;

		case "gmc":
			Level.setGameMode(1);
			colourMsg("Gamemode changed to §bcreative§f.");
			break;

		case "give":
			if(Level.getGameMode() === 1) {
				errorMsg("You must be in survival!");
			}
			else if(!isset(p[1]) || !isset(p[2])) {
				errorMsg("Not enough parameters!");
			}
			else if(!parseInt(p[2])) {
				errorMsg("The quantity must be a number!");
			}
			else if(parseInt(p[1])) {
				var id = p[1].split(':');
				if(isset(id[1])) {
					Player.addItemInventory(id[0], p[2], id[1]);
					colourMsg("Added §b" + p[2] + " §fof §b" + names[ids.indexOf(id[0])] + "§f (§b" + id[0] + "§f)");
				}
				else {
					Player.addItemInventory(p[1], p[2]);
					colourMsg("Added §b" + p[2] + " §fof §b" + names[ids.indexOf(p[1])] + "§f (§b" + p[1] + "§f)");
				}
			}
			else if(!parseInt(p[1])) {
				if(hasGiveFile) {
					if(names.indexOf(p[1].toUpperCase()) > -1) {
						Player.addItemInventory(ids[names.indexOf(p[1].toUpperCase())], p[2]);
						colourMsg("Added §b" + p[2] + " §fof §b" + p[1].toUpperCase() + "§f (§b" + ids[names.indexOf(p[1].toUpperCase())] + "§f)");
					}
					else {
						errorMsg("Item not found!");
					}
				}
				else {
					errorMsg("You do not have the /give config!");
					errorMsg("You can only use IDs.");
				}
			}
			else {
				errorMsg("Error in give command.");
			}
			break;

		case "heal":
			if(!isset(p[1])) {
				colourMsg("Healed you by §b" + (20 - Entity.getHealth(Player.getEntity())) + " §fhalf-hearts.");
				Player.setHealth(20);
			}
			else if(!parseInt(p[1])) {
				errorMsg("The quantity must be a number!");
			}
			else if(parseInt(p[1])) {
				colourMsg("Healed you by §b" + p[1] + " §fhalf-hearts.");
				Player.setHealth(Entity.getHealth(Player.getEntity()) + parseInt(p[1]));
			}
			else {
				errorMsg("Error in heal command.");
			}
			break;

		case "health":
			if(!isset(p[1])) {
				errorMsg("Not enough parameters!");
			}
			else if(p[1] === "min") {
				Player.setHealth(1);
				colourMsg("Your health is now §b1");
			}
			else if(p[1] === "max") {
				Player.setHealth(20);
				colourMsg("Your health is now §b20");
			}
			else if(p[1] === "infinite") {
				Player.setHealth(99999999999);
				colourMsg("Your health is now §ba very big number");
			}
			else if(p[1] === "get") {
				colourMsg("Your health is §b" + Entity.getHealth(Player.getEntity()));
			}
			else {
				errorMsg("Parameter " + p[1] + " is an unexpected value");
				errorMsg("(min, max, infinite, get)");
			}
			break;

		case "hole":
			var x = Math.floor(Player.getX());
			var z = Math.floor(Player.getZ());
			for(y = 0; y <= 128; y++) {
				for(i = -1; i <= 1; i++) {
					for(j = -1; j <= 1; j++) {
						Level.setTile(x + i, y, z + j, 0);
					}
				}
			}
			break;

		case "ignite":
			if(!isset(p[1])) {
				Entity.setFireTicks(Player.getEntity(), 5);
				colourMsg("Cooking you for §b5 §fseconds.");
			}
			else if(!parseInt(p[1])) {
				colourMsg("The time must be a number!");
			}
			else if(parseInt(p[1])) {
				Entity.setFireTicks(Player.getEntity(), p[1]);
				colourMsg("Cooking you for §b" + p[1] + " §fseconds.");
			}
			else {
				errorMsg("Error in ignite command.");
			}
			break;

		case "kill":
			Player.setHealth(0);
			break;

		case "mc":
		case "magiccarpet":
			mcActive = !mcActive;
			colourMsg("Magic carpet is now §b" + (mcActive ? "active" : "inactive") + "§f.");
			if(!mcActive) {
				removeCarpet();
			}
			break;

		case "pano":
		case "panorama":
			panoActive = !panoActive;
			colourMsg("Panorama is now §b" + (panoActive ? "active" : "inactive") + "§f!");
			break;

		case "spcpe":
			showCredits();
			break;

		case "time":
			if(!isset(p[1])) {
				errorMsg("Not enough parameters!");
			}
			else {
				switch(p[1]) {
					case "day":
						Level.setTime(57);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					case "night":
						Level.setTime(93);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					case "sunrise":
						Level.setTime(60);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					case "sunset":
						Level.setTime(76);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					case "midday":
						Level.setTime(95);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					case "midnight":
						Level.setTime(52);
						colourMsg("Time set to §b" + p[1] + "§f.");
						break;
					default:
						errorMsg("Parameter " + p[1] + " is an unexpected value");
						errorMsg("(day, night, sunrise, sunset, midday, midnight)");
				}
			}
			break;

		case "tp":
			if(!isset(p[1]) || !isset(p[2]) || !isset(p[3])) {
				errorMsg("Not enough parameters!")
			}
			else if(!parseInt(p[1]) || !parseInt(p[2]) || !parseInt(p[3])) {
				errorMsg("The coordinates must be numbers!");
			}
			else if(parseInt(p[1]) && parseInt(p[2]) && parseInt(p[3])) {
				if(mcActive) {
					removeCarpet();
					colourMsg("Removing the magic carpet...");
					mcActive = false;
				}
				var x = Math.floor(p[1]);
				var y = Math.floor(p[2]);
				var z = Math.floor(p[3]);
				Entity.setPosition(Player.getEntity(), x + 0.5, y, z + 0.5);
				colourMsg("Teleported to §b" + x + "§f, §b" + y + "§f, §b" + z + "§f");
			}
			else {
				errorMsg("Error in tp command.");
			}
			break;
	}
}

function modTick() {
	if(active === false) {
		print("SPCPE by Connor4898");
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try {
				var dir = new java.io.File("/sdcard/SPCPE/");
				if(!dir.isDirectory()) {
					var makedir = d.mkdir();
				}
				var giveFile = new java.io.File("/sdcard/SPCPE/", "SPCPE-Give-Config.txt");
				if(giveFile.isFile()) {
					if(!hasGiveFile) {
						colourMsg("/give config found and loaded!");
					}
					hasGiveFile = true;
				}
				if(!giveFile.isFile()) {
					errorMsg("/give config not found!");
					hasGiveFile = false;
				}
			}
			catch(e) { }
		}}));
		active = true;
	}
	if(mcActive) {
		buildCarpet();
	}
	if(panoActive) {
		var nextYaw = Entity.getYaw(Player.getEntity());
		Entity.setRot(Player.getEntity(), nextYaw + 0.33, Entity.getPitch(Player.getEntity()));
	}
	if(showingCoords) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try {
				if(coordsActive) {
					textview.setText("x: " + Math.floor(Player.getX()) + "\ny: " + Math.floor(Player.getY()) + "\nz: " + Math.floor(Player.getZ()));
				}
				else {
					window = new android.widget.PopupWindow();
					var layout = new android.widget.RelativeLayout(ctx);
					textview = new android.widget.TextView(ctx);
					//textview.setText("Test");
					textview.setTextSize(25);
					layout.addView(textview);
					window.setContentView(layout);
					window.setWidth(dip2px(ctx, 100));
					window.setHeight(dip2px(ctx, 100));
					window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 5), dip2px(ctx, 40));
					coordsActive = true;
				}
			}
			catch(err){
				print("Failed to show button." + err);
			}
		} }));
	}
}

function colourMsg(msg) {
	clientMessage("§9[SPC] §f" + msg);
}

function errorMsg(msg) {
	clientMessage("§c[SPC] " + msg);
}

function isset(v) {
	if(typeof v === 'undefined') {
		return false;
	}
	else {
		return true;
	}
}

function showHelp(command, description, usage, example) {
	colourMsg("Help for the §b" + command + " §fcommand.");
	colourMsg("§aDescription: §f" + description + ".");
	colourMsg("§aUsage: §f/" + command + " " + usage);
	colourMsg("§aExample: §f/" + command + " " + example);
}

var helpPages = new Array(
	new Array(
		"/ascend",
		"/bounce <POWER>",
		"/descend",
		"/explode [RADIUS]",
		"/gamemode [survival|creative]"),
	new Array(
		"/give <ID|ITEMNAME> <QUANTITY>",
		"/heal [QUANTITY]",
		"/health <min|max|infinite|get>",
		"/hole",
		"/ignite"),
	new Array(
		"/kill",
		"/spcpe",
		"/time <day|night|sunrise|sunset|midday|midnight>",
		"/tp <X> <Y> <Z>")
);

function showHelpPage(page) {
	if(page % 1 === 0) {
		if(page < 1) {
			errorMsg("The page number must be above 0!");
		}
		else if(page > helpPages.length) {
			errorMsg("The page number must be below " + (helpPages.length + 1) + "!");
		}
		else {
			colourMsg("Showing help page " + page + "/" + helpPages.length)
			for(i = 0; i <= 4; i++) {
				if(isset(helpPages[page - 1][i])) {
					colourMsg(helpPages[page - 1][i]);
				}
			}
		}
	}
	else {
		errorMsg("The page number must be a whole number!")
	}
}

function showCredits() {
	var info = new android.app.AlertDialog.Builder(ctx);
	info.setTitle("Information");
	info.setMessage("Version " + version + "\nCreated by Connor4898\nAssisted by CheesyFriedBacon\nAssisted by MrARM\n\n+Thanks for using my ModPE Script!");
	info.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
		onClick: function(par1){
			dialog.dismiss();
		}
	});
	var dialog = info.create();
	dialog.show();
}


function dismissCoords() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		window.dismiss();
	}}));
	showingCoords = false;
	coordsActive = false;
}

function buildCarpet() {
	mcTick++;
	if(mcTick === 2) {
		x = Math.floor(Player.getX());
		y = Math.floor(Player.getY()) - 2;
		z = Math.floor(Player.getZ());
		for(i = -3; i <= 3; i++) {
			for(j = -3; j <=3; j++) {
				for(k = -1; k <= 1; k++) {
					if(i >= -2 && i <= 2) {
						if(j >= -2 && j <= 2) {
							if(Level.getTile(x + i, y, z + j) === 0) {
								Level.setTile(x + i, y, z + j, 20);
							}
						}
					} if(i === -3 || i === 3) {
						if(j >= -3 && j <= 3) {
							if(Level.getTile(x + i, y, z + j) === 20) {
								Level.setTile(x + i, y, z + j, 0);
							}
						}
					} if(i >= -3 && i <= 3) {
						if(j === -3 || j === 3) {
							if(Level.getTile(x + i, y, z + j) === 20) {
								Level.setTile(x + i, y, z + j, 0);
							}
						}
					} if(k === -1 || k === 1) {
						if(i >= -3 && i <= 3) {
							if(j >= -3 && j <= 3) {
								if(Level.getTile(x + i, y + k, z + j) === 20) {
									Level.setTile(x + i, y + k, z + j, 0);
								}
							}
						}
					} if(Entity.getPitch(Player.getEntity()) >= 75) {
						if(i >= -2 && i <= 2) {
							if(j >= -2 && j <= 2) {
								if(Level.getTile(x + i, y, z + j) === 20) {
									Level.setTile(x + i, y, z + j, 0);
								}
							}
						} if(k === -1) {
							if(i >= -2 && i <= 2) {
								if(j >= -2 && j <= 2) {
									if(Level.getTile(x + i, y + k, z + j) === 0) {
										Level.setTile(x + i, y + k, z + j, 20);
									}
								}
							}
						}
					} if(Entity.getPitch(Player.getEntity()) <= -60) {
						setVelY(Player.getEntity(), 0.3);
					}
				}
			}
		}
		mcTick = 0;
	}
}

function removeCarpet() {
	mcTick = 0;
	x = Math.floor(Player.getX());
	y = Math.floor(Player.getY())-2;
	z = Math.floor(Player.getZ());
	for(i = -3 ;i <= 3; i++) {
		for(j = -3; j <= 3; j++) {
			if(i >= -2 && i <= 2) {
				if(j >= -2 && j <= 2) {
					if(Level.getTile(x + i, y, z + j) === 20) {
						Level.setTile(x + i, y, z + j, 0);
					}
				}
			}
		}
	}
}

function leaveGame() {
	if(showingCoords) {
		dismissCoords();
	}
}

function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}