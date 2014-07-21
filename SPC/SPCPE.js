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
//New version available?
var newVersion;
//Arrays to store the /give names and IDs
var names = [];
var ids = [];
var data = [];
//A bunch of other variables
var panoActive = false;
var showingCoords = false;
var coordsActive = false;
var window = null;
var textview = null;
var mcActive = false;
var mcTick = 0;
var bindCommand = [];
var bindLft = false;
var bindBtn = null;
var showDownloadAlert = false;
var newScript;

function procCmd(cmd) {
    names = [];
    ids = [];
    data = [];

    var params = cmd.toLowerCase().split(" ");
    var evalParams = cmd.split(" ");
    var moarData;
    var dataValues;
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                if(params[0] === "give") {
                    var giveFile = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/SPCPE/", "SPCPE-Give-Config.txt");
                    if(giveFile.isFile()) {
                        hasGiveFile = true;
                        var fis = new java.io.BufferedReader(new java.io.FileReader(giveFile));
                        var s = null;
                        while((s = fis.readLine()) !== null) {
                            moarData = s.split("=");
                            names.push(""+moarData[0]);
                            dataValues = moarData[1].split(":");
                            if(isset(dataValues[1])) {
                                ids.push(""+dataValues[0]);
                                data.push(""+dataValues[1]);
                            }
                            else {
                                ids.push(""+moarData[1]);
                                data.push("0");
                            }
                        }
                    }
                    else {
                        hasGiveFile = false;
                    }
                }
            }
            catch(e) { }
            if(evalParams[0].toLowerCase() === "eval") {
                evalMsg = "";
                if(evalParams.length === 1) {
                    errorMsg("Not enough parameters!");
                }
                else {
                    for(i = 1; i <= (evalParams.length); i++) {
                        evalMsg += evalParams[i] + " ";
                    }
                    try {
                        eval(evalMsg);
                    }
                    catch(e) {
                        errorMsg("Line 99: " + e);
                    }
                }
            }
            else {
                main(params);
            }
        }
    }));
}

function main(p) {
    switch(p[0]) {
        case "help":
        case "?":
            switch(p[1]) {
                case "asc":
                case "ascend":
                    showHelp("ascend", "Ascends the player to the platform above", "", "");
                    break;
                case "bind":
                    showHelp("bind", "Binds a command to a GUI button", "<COMMAND> [PARAMETERS]", "jump");
                    break;
                case "bounce":
                    showHelp("bounce", "Launches the player into the air", "<POWER>", "2");
                    break;
                /*case "cannon":
                    showHelp("cannon", "Launches ignited TNT in the direction the player is facing", "", "");
                    break;*/
                case "clear":
                    showHelp("clear", "Clears the player's survival inventory", "", "");
                    break;
                case "commands":
                    showHelp("commands", "Lists every command", "", "");
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
                case "eval":
                    showHelp("eval", "Runs code in-game", "<CODE>", "clientMessage(\"Hi.\");");
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
                case "jump":
                    showHelp("jump", "Teleports the player to the block being looked at", "", "");
                    break;
                case "kill":
                    showHelp("kill", "Kills the player", "", "");
                    break;
                case "lbind":
                    showHelp("lbind", "/bind for left handed users", "<COMMAND> [PARAMETERS]", "jump");
                    break;
                case "mc":
                case "magiccarpet":
                    showHelp("magiccarpet", "Creates a carpet of glass under you", "", "");
                    break;
                case "pano":
                case "panorama":
                    showHelp("panorama", "Makes viewing a panorama easier", "", "");
                    break;
                case "setblock":
                    showHelp("setblock", "Places a block at the specified coordinates", "<X> <Y> <Z> <TILEID> [DAMAGEVALUE]", "54 79 75 59");
                    break;
                case "spcpe":
                    showHelp("spcpe", "Provides generic information about SPCPE", "", "");
                    break;
                case "time":
                    showHelp("time", "Sets the in-game time", "<day|night|sunrise|sunset|midday|midnight>", "sunrise");
                    break;
                case "tp":
                    showHelp("tp", "Teleports the player to the specified coordinates", "<X> <Y> <Z>", "43 64 78");
                    break;
                case "unbind":
                    showHelp("unbind", "Unbinds all commands from the GUI button", "", "");
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

        case "bind":
            bindLft = false;
            if(!isset(p[1])) {
                errorMsg("Not enough parameters!");
            }
            else if(p[1] === "give" || p[1] === "eval") {
                errorMsg("Cannot bind /give or /eval!");
            }
            else if(p[1] === "bind" || p[1] === "lbind") {
                errorMsg("Cannot bind itself!");
            }
            else if(p[1] !== "give" && p[1] !== "eval" && p[1] !== "bind" && p[1] !== "lbind") {
                dismissBind();
                bindCommand = [];
                for(i = 1; i <= p.length; i++) {
                    bindCommand.push(p[i]);
                }
                showBind();
                colourMsg("Binded §b" + p[1] + "§f.");
            }
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

        //Does not work in 0.9
        /*case "cannon":
            var yaw = Entity.getYaw(Player.getEntity());
            var pitch = Entity.getPitch(Player.getEntity());
            var velY = Math.sin((pitch - 180) / 180 * Math.PI);
            var velX = Math.sin(yaw / 180 * Math.PI) * Math.cos((pitch - 180) / 180 * Math.PI);
            var velZ = -1 * Math.cos(yaw / 180 * Math.PI) * Math.cos((pitch - 180) / 180 * Math.PI);
            var entity = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 65);
            Entity.setVelX(entity, velX);
            Entity.setVelY(entity, velY);
            Entity.setVelZ(entity, velZ);
            break;*/

        case "clear":
            if(Level.getGameMode() === 1) {
                errorMsg("Cannot clear the creative inventory!");
            }
            else {
                var count = 0;
                for(i = 9; i <= 44; i++) {
                    if(Player.getInventorySlot(i) !== 0) {                
                        for(j = 1; j <= Player.getInventorySlotCount(i); j++) {
                            count++;
                        }
                        Player.clearInventorySlot(i);
                    }
                }
                colourMsg("Cleared §b" + count + " §ritem(s)!")
            }
            break;

        case "commands":
            showCommands();
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
                    colourMsg("Given §b" + p[2] + " §fof §b" + names[ids.indexOf(id[0])] + "§f (§b" + id[0] + "§f)");
                }
                else {
                    Player.addItemInventory(p[1], p[2]);
                    colourMsg("Given §b" + p[2] + " §fof §b" + names[ids.indexOf(p[1])] + "§f (§b" + p[1] + "§f)");
                }
            }
            else if(!parseInt(p[1])) {
                if(hasGiveFile) {
                    if(names.indexOf(p[1].toUpperCase()) > -1) {
                        if(data[names.indexOf(p[1].toUpperCase())] == 0) {
                            Player.addItemInventory(ids[names.indexOf(p[1].toUpperCase())], p[2]);
                            colourMsg("Given §b" + p[2] + " §fof §b" + p[1].toUpperCase() + "§f (§b" + ids[names.indexOf(p[1].toUpperCase())] + "§f)");
                        }
                        else {
                            Player.addItemInventory(ids[names.indexOf(p[1].toUpperCase())], p[2], data[names.indexOf(p[1].toUpperCase())]);
                            colourMsg("Given §b" + p[2] + " §fof §b" + p[1].toUpperCase() + "§f (§b" + ids[names.indexOf(p[1].toUpperCase())] + "§f:§b" + data[names.indexOf(p[1].toUpperCase())] + "§f)");
                        }
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

        case "jump":
            jump();
            break;

        case "kill":
            Player.setHealth(0);
            break;

        case "lbind":
            bindLft = true;
            if(!isset(p[1])) {
                errorMsg("Not enough parameters!");
            }
            else if(p[1] === "give" || p[1] === "eval") {
                errorMsg("Cannot bind /give or /eval!");
            }
            else if(p[1] === "bind" || p[1] === "lbind") {
                errorMsg("Cannot bind itself!");
            }
            else if(p[1] !== "give" && p[1] !== "eval" && p[1] !== "bind" && p[1] !== "lbind") {
                dismissBind();
                bindCommand = [];
                for(i = 1; i <= p.length; i++) {
                    bindCommand.push(p[i]);
                }
                showBind();
                colourMsg("Binded §b" + p[1] + "§f.");
            }
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

        case "setblock":
            if(!isset(p[1]) || !isset(p[2]) || !isset(p[3]) || !isset(p[4])) {
                errorMsg("Not enough parameters!");
            }
            else if(isset(p[5])) {
                Level.setTile(p[1], p[2], p[3], p[4], p[5]);
            }
            else {
                Level.setTile(p[1], p[2], p[3], p[4]);
            }
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
            else if((!parseInt(p[1]) || !parseInt(p[2]) || !parseInt(p[3])) && (p[1] != 0 && p[2] != 0 && p[3] != 0)) {
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

        case "unbind":
            dismissBind();
            colourMsg("Removed all binds.");
            break;

        default:
            errorMsg("Command " + p[0] + " does not exist!");
            break;
    }
}

function modTick() {
    if(active === false) {
        print("SPCPE by Connor4898");
        colourMsg("SPCPE version §b" + version + "§f by Connor4898");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    compareVersion();
                    var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/SPCPE/");
                    if(!dir.isDirectory()) {
                        var makedir = dir.mkdirs();
                    }
                    var giveFile = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/SPCPE/", "SPCPE-Give-Config.txt");
                    if(giveFile.isFile()) {
                        if(!hasGiveFile) {
                            colourMsg("/give config found and loaded!");
                        }
                        hasGiveFile = true;
                    } else if(!giveFile.isFile()) {
                        hasGiveFile = false;
                        downloadConfig("https://raw.githubusercontent.com/Connor4898/ModPE-Scripts/master/SPC/SPCPE-Give-Config.txt", "SPCPE-Give-Config.txt");
                    }
                }
                catch(e) {
                    errorMsg("Line 664: "+e);
                }
            }
        }));
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
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    if(coordsActive) {
                        textview.setText("x: " + Math.floor(Player.getX()) + "\ny: " + Math.floor(Player.getY()) + "\nz: " + Math.floor(Player.getZ()));
                    }
                    else {
                        window = new android.widget.PopupWindow();
                        var layout = new android.widget.RelativeLayout(ctx);
                        textview = new android.widget.TextView(ctx);
                        textview.setTextSize(25);
                        textview.setTextColor(android.graphics.Color.GRAY);
                        layout.addView(textview);
                        window.setContentView(layout);
                        window.setWidth(dip2px(ctx, 100));
                        window.setHeight(dip2px(ctx, 100));
                        window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                        window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 5), dip2px(ctx, 40));
                        coordsActive = true;
                    }
                }
                catch(e){
                    errorMsg("Line 700: " + e);
                }
            }
        }));
    }
    if(showDownloadAlert) {
        colourMsg("showDownloadAlert true!");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateScript();
                }
                catch(e) {
                    errorMsg("Line 713: " + e);
                }
            }
        }));
        showDownloadAlert = false;
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
        "/bind <COMMAND> [PARAMETERS]",
        "/bounce <POWER>",
        /*"/cannon",*/
        "/clear",
        "/commands"),
    new Array(
        "/coords",
        "/descend",
        "/eval <CODE>",
        "/explode [RADIUS]",
        "/gamemode [survival|creative]"),
    new Array(
        "/give <ID|ITEMNAME> <QUANTITY>",
        "/heal [QUANTITY]",
        "/health <min|max|infinite|get>",
        "/hole",
        "/ignite"),
    new Array(
        "/jump",
        "/kill",
        "/lbind <COMMAND> [PARAMETERS]",
        "/magiccarpet",
        "/panorama"),
    new Array(
        "/setblooooock <X> <Y> <Z> <TILEID> [TILEDATA]",
		"/spcpe",
        "/time <day|night|sunrise|sunset|midday|midnight>",
        "/tp <X> <Y> <Z>",
        "/unbind")
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
    info.setMessage("Version " + version + "\nCreated by Connor4898\n\nThanks to:\nCheesyFriedBacon - Helped out with the original SPCPE\nMrARM - Helped with /give (reading from a config)\nTemena - Helped with downloading the config automatically\n\nThanks for using SPCPE!");
    info.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
        onClick: function(par1){
            dialog.dismiss();
        }
    });
    var dialog = info.create();
    dialog.show();
}

function showCommands() {
    var commands = new android.app.AlertDialog.Builder(ctx);
    commands.setTitle("Commands List");
    var list = helpPages[0];
    for(i = 1; i < helpPages.length; i++) {
        list = list.concat(helpPages[i]);
    }
    commands.setMessage(list.join("\n"));
    commands.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
        onClick: function(par1){
            dialog.dismiss();
        }
    });
    var dialog = commands.create();
    dialog.show();
}

function dismissCoords() {
    showingCoords = false;
    coordsActive = false;
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            window.dismiss();
        }
    }));
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
    dismissBind();
}

function dip2px(ctx, dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

//jump command stuffs
/*
--- Taken and modified from 500ise_paintbrush.js ---
--- https://github.com/zhuowei/ModPEScripts/blob/master/500ise_paintbrush.js ---

Taken from https://raw.github.com/Overv/MineAssemble/master/reference/src/mineassemble.c .
An implementation of http://www.cse[1]orku.ca/~amana/research/grid.pdf
(modified with guidance from http://gamedev.stackexchange.com/questions/47362/cast-ray-to-select-block-in-voxel-game)

Thus, this below method is:
Copyright (C) 2013 Alexander Overvoorde


Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var fullBlocks = [1, 2, 3, 4, 5, 7, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 26, 35, 41, 42, 43, 44, 45, 46, 47, 48, 49, 53, 54, 56, 57, 59, 60, 61, 61, 67, 73, 74, 79, 80, 81, 82, 85, 86, 87, 88, 89, 91, 98, 101, 102, 103, 107, 108, 109, 110, 111, 112, 114, 120, 121, 126, 128, 129, 133, 134, 135, 136, 139, 155, 156, 157, 158, 159, 161, 162, 170, 172, 173, 174, 243, 245, 246, 247, 248, 249];

var FACE_LEFT = 0;
var FACE_RIGHT = 1;
var FACE_BOTTOM = 2;
var FACE_TOP = 3;
var FACE_BACK = 4;
var FACE_FRONT = 5;

function raytrace(pos, dir, info, radius) {
    // Finish early if there's no direction
    if (dir[0] == 0.0 && dir[1] == 0.0 && dir[2] == 0.0) {
        info.hit = false;
        return;
    }

    var start = pos.slice(0);

    var x = Math.floor(pos[0]);
    var y = Math.floor(pos[1]);
    var z = Math.floor(pos[2]);

    var x_dir = dir[0] >= 0.0 ? 1 : -1;
    var y_dir = dir[1] >= 0.0 ? 1 : -1;
    var z_dir = dir[2] >= 0.0 ? 1 : -1;

    var dx_off = x_dir > 0 ? 1.0 : 0.0;
    var dy_off = y_dir > 0 ? 1.0 : 0.0;
    var dz_off = z_dir > 0 ? 1.0 : 0.0;

    var x_face = x_dir > 0 ? FACE_LEFT : FACE_RIGHT;
    var y_face = y_dir > 0 ? FACE_BOTTOM : FACE_TOP;
    var z_face = z_dir > 0 ? FACE_BACK : FACE_FRONT;

    var face = FACE_TOP;
    var radius2 = radius * radius;
    
    // Assumption is made that the camera is never outside the world
    while (in_world(x, y, z)) {
        var dx = start[0] - pos[0];
        var dy = start[1] - pos[1];
        var dz = start[2] - pos[2];
        var dist2 = dx*dx + dy*dy + dz*dz;
        if (dist2 > radius2) {
            info.hit = false;
            return;
        }
        // Determine if block is solid
        if (fullBlocks.indexOf(Level.getTile(x, y, z)) != -1) {
            var dist = Math.sqrt(dist2);

            pos[0] -= x;
            pos[1] -= y;
            pos[2] -= z;

            // If hit info is requested, no color computation is done
            if (info != null) {

                info.hit = true;
                info.x = x;
                info.y = y;
                info.z = z;
                info.face = face;
                info.dist = dist;

                return;
            }
        }

        // Remaining distance inside this block given ray direction
        var dx = x - pos[0] + dx_off;
        var dy = y - pos[1] + dy_off;
        var dz = z - pos[2] + dz_off;
        
        // Calculate distance for each dimension
        var t1 = dx / dir[0];
        var t2 = dy / dir[1];
        var t3 = dz / dir[2];
        
        // Find closest hit
        if (t1 <= t2 && t1 <= t3) {
            pos[0] += dx;
            pos[1] += t1 * dir[1];
            pos[2] += t1 * dir[2];
            x += x_dir;
            face = x_face;
        }
        if (t2 <= t1 && t2 <= t3) {
            pos[0] += t2 * dir[0];
            pos[1] += dy;
            pos[2] += t2 * dir[2];
            y += y_dir;
            face = y_face;
        }
        if (t3 <= t1 && t3 <= t2) {
            pos[0] += t3 * dir[0];
            pos[1] += t3 * dir[1];
            pos[2] += dz;
            z += z_dir;
            face = z_face;
        }
    }
    info.hit = false;

}

function toDirectionalVector(vector, yaw, pitch) {
    //http://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function in_world(x, y, z) {
    return true;
    //Commented out due to infinite worlds
    //return x >= 0 && x < 256 && y >= 0 && y < 128 && z >= 0 && z < 256;
}

var playerPos = [0, 0, 0];
var playerDir = [0, 0, 0];
var rayTraceInfo = {};

var paintMode = false;

var DEG_TO_RAD = Math.PI / 180;

function jump() {
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    playerPos[0] = getPlayerX();
    playerPos[1] = getPlayerY();
    playerPos[2] = getPlayerZ();
    raytrace(playerPos, playerDir, rayTraceInfo, 128);
    if (rayTraceInfo.hit) {
        var sides = [];
        switch(rayTraceInfo.face) {
            case 0: sides = [-1, 0, 0]; break;
            case 1: sides = [1, 0, 0]; break;
            case 2: sides = [0, -1, 0]; break;
            case 3: sides = [0, 1, 0]; break;
            case 4: sides = [0, 0, -1]; break;
            case 5: sides = [0, 0, 1]; break;
        }
        if(getTile(rayTraceInfo.x, rayTraceInfo.y + 1, rayTraceInfo.z) === 0) {
            Entity.setPosition(Player.getEntity(), rayTraceInfo.x + 0.5, rayTraceInfo.y + 3, rayTraceInfo.z + 0.5);
        }
        else {
            var x = rayTraceInfo.x + sides[0] + 0.5;
            var y = rayTraceInfo.y + sides[1] + 2;
            var z = rayTraceInfo.z + sides[2] + 0.5;
            Entity.setPosition(Player.getEntity(), x, y, z);
        }
    }
    else {
        errorMsg("No block in sight.");
    }
}
//end of jump stuffs

function showBind() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function () {
            try {
                var btn = new android.widget.Button(ctx);
                btn.setText(bindCommand[0].toUpperCase());
                btn.setTextColor(android.graphics.Color.CYAN);
                btn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function () {
                        main(bindCommand);
                    }
                });
                bindBtn = new android.widget.PopupWindow(btn, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
                if(bindLft) {
                    bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, dip2px(ctx, 85), dip2px(ctx, 85));
                }
                else {
                    bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, dip2px(ctx, 85), dip2px(ctx, 85));
                }
            } catch(e) {
                errorMsg("Line 1140: " + e);
            }
        }
    });
}

function dismissBind() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function () {
            if (bindBtn != null) {
                bindBtn.dismiss();
            }
        }
    });
    bindCommand = [];
}

function downloadConfig(url_dl, filename) {
    try {
        var builder = new android.app.AlertDialog.Builder(ctx);
        builder.setTitle("Config not found!");
        builder.setMessage("The configuration file for the /give command was not found!\nWould you like to download it now?\nThe script will still work if you do not download this file, but you will not be able to use item or block names in /give");
        builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                dialog.dismiss();
            }
        });
        builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                colourMsg("Downloading config file...");
                var r  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var root = android.os.Environment.getExternalStorageDirectory();
                            var u = new java.net.URL(url_dl);
                            var c = u.openConnection();
                            c.setRequestMethod("GET");
                            c.setDoOutput(true);
                            c.connect();
                            c.getContentLength();
                            var f = new java.io.FileOutputStream(new java.io.File(root + "/SPCPE/", filename));
                            var inRead = c.getInputStream();
                            var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var len1 = 0;
                            while((len1 = inRead.read(buffer)) > 0) {
                                f.write(buffer, 0, len1);
                            }
                            f.close();
                            colourMsg("Config file downloaded!");
                            hasConfig = true;
                            
                        }
                        catch(e) {
                            errorMsg("Download failed!");
                            if(e == "JavaException: java.net.UnknownHostException: Unable to resolve host \"raw.githubusercontent.com\": No address associated with hostname") {
                                errorMsg("No internet connection.");
                            }
                            else {
                                errorMsg("Line 1199: " + e);
                            }
                        }
                        dialog.dismiss();
                    }
                }
                var th = new java.lang.Thread(r);
                th.start();
            }
        });
        var dialog = builder.create();
        dialog.show();
    }
    catch(e) {
        errorMsg("Line 1213: " + e);
    }
}
//End of Temena's contribution

function compareVersion() {
    colourMsg("Comparing...")
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var u = new java.net.URL("https://raw.githubusercontent.com/Connor4898/ModPE-Scripts/master/SPC/version");
                var c = u.openConnection();
                c.setRequestMethod("GET");
                c.setDoOutput(true);
                c.connect();
                c.getContentLength();
                var input = c.getInputStream();
                var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var bytesRead = 0; 
                var strFileContents;
                while((bytesRead = input.read(contents)) != -1) { 
                    strFileContents = new java.lang.String(contents, 0, bytesRead);               
                }
                if(version !== strFileContents) {
                    newVersion = strFileContents;
                    colourMsg("New version! " + newVersion);
                    showDownloadAlert = true;
                }
                
            }
            catch(e) {
                errorMsg("Line 1244: " + e);
            }
        }
    }
    var th = new java.lang.Thread(r);
    th.start();
}

function updateScript() {
    try {
        var builder = new android.app.AlertDialog.Builder(ctx);
        builder.setTitle("New version available!");
        builder.setMessage("An update to SPCPE was found!\nWould you like to download it now?\nCurrent version: " + version + "\nNew version: " + newVersion);
        builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                dialog.dismiss();
            }
        });
        builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var u = new java.net.URL("https://raw.githubusercontent.com/Connor4898/ModPE-Scripts/master/SPC/SPCPE.js");
                            var c = u.openConnection();
                            c.setRequestMethod("GET");
                            c.setDoOutput(true);
                            c.connect();
                            c.getContentLength();
                            var input = c.getInputStream();
                            var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var bytesRead = 0;
                            while((bytesRead = input.read(contents)) != -1) { 
                                newScript += new java.lang.String(contents, 0, bytesRead);               
                            }
                            var patchesFolder = ctx.getDir("modscripts", 0);
                            var scriptFile = new java.io.File(patchesFolder, "SPCPE.js");
                            var printWriter = new java.io.PrintWriter(scriptFile);
                            printWriter.write(newScript);
                            printWriter.flush();
                            printWriter.close();
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
                            }
                            catch(e) {
                                errorMsg("Line 1290: " + e);
                            }
                        }
                        catch(e) {
                            errorMsg("Line 1294: " + e);
                        }
                    }
                }
                var th = new java.lang.Thread(ru);
                th.start();
            }
        });
        var dialog = builder.create();
        dialog.show()
    }
    catch(e) {
        errorMsg("Line 1306: " + e);
    }
}