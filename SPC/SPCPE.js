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
					if(!hasGiveFile) {
						colourChat("/give config found and loaded!");
					}
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
				errorMsg("Not enough parameters!");
			}
			else if(!parseInt(p[1])) {
				errorMsg("The radius must be a number!");
			}
			else if(parseInt(p[1])) {
				Level.explode(Player.getX(), Player.getY(), Player.getZ(), p[1]);
			} else {
				errorMsg("Error in explode command.");
			} break;

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
				errorMsg("The amount must be a number!");
			}
			else if(parseInt(p[1])) {
				var id = p[1].split(':');
				if(isset(id[1])) {
					Player.addItemInventory(id[0], p[2], id[1]);
					colourMsg("Added §b" + p[2] + " §fof §b" + names[ids.indexOf(id[0])] + "§f (§b" + id[0] + "§f)");
				} else {
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
				errorMsg("The amount must be a number!");
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
					hasGiveFile = true;
				}
				if(!giveFile.isFile()) {
					colourMsg("/give config not found!");
					hasGiveFile = false;
				}
			}
			catch(e) { }
		}}));
		active = true;
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