#Single Player Commands v9.1

###This is a script that adds commands to Minecraft Pocket Edition

###Commands:
````
/commands
	-Shows every available command
/help command
	-Shows help about a specific command
	-Usage: /help explode
		Gives help about the explode command
/explode
	-Be like a creeper! This command explodes you. WARNING: DO NOT USE A NUMBER HIGHER THAN 20 FOR THE RADIUS IF YOU DONT WANT TO LAG OR CRASH.
	-Usage: /explode 5
		Explodes yourself with a radius of 5
/give ID amount
	-Gives you the block/item you enter into the command
	-Usage: /give 57 64
		Gives you a stack (64) of diamond blocks (57)
	-Usage: /give steak 64
		Gives you some steak
/home
	-Teleports you to your home. NOTE: /sethome must be used before this
/sethome
	-Sets your current coordinates as your home
/delhome
	-Deletes your saved coordinates made by /sethome
/ignite
	-Sets the block at your feet on fire. WARNING: THIS MAY HURT
/tp x y z
	-Teleports you to specified coordinates
	-Usage: /tp 79 68 143
		Teleports you to x:79 y:68 z:143
/coords
	-Shows your current coordinates (feet)
/bomb on
	-Activates Bomb Mode
/bomb off
	-Deactivates Bomb Mode
/bomb detonate
	-Detonates the selected block
/pdoor on
	-Activates Portable Door Mode
/pdoor off
	-Deactivates Portable Door Mode
/pdoor open
	-Opens the 'door' at the selected block
/mc on
	-Creates a 5x5 sheet of glass underneath your feet
/mc off
	-Makes the Magic Carpet disappear
/sprint on
	-Turns on Sprint Mode. This allows you to walk at a faster speed.
/sprint off
	-Turns off Sprint Mode.
/bounce power
	-Makes you bounce high
	-Usage: /bounce 2
/hole
	-Creates a hole underneath you. WARNING: USE WITH CAUTION
/spawntouch MobName
	-Spawns the specified animal when a block is tapped
	-Usage: /spawntouch chicken
/spawntouch off
	-Turns Spawn Touch off
/rain MobName
	-Makes it rain the specified mob.
/nuke
	-Spawns and detonates 49 TNT above you.
/instabreak on
	-Gives you a gold pickaxe to tap blocks with.
/instabreak off
	-Turns off InstaBreak mode
/warp on
	-Gives you a slimeball, a diamond hoe, a gold hoe, and a few blocks of diamond, gold, iron, and lapis
	-Activates the Warp Panels
/warp off
	-Deactivates the Warp Panels
/surface
	-Teleports you to the surface
/refresh
	-Gives you all currently active command items
/ascend
	-Warps you to a floor/surface above you
/decend
	-Warps you to a floor/surface beneath you
/panorama on
	-Turns on Panorama mode, which slowly turns you clockwise
/panorama off
	-Turns off Panorama mode
```

###Changelog:

```
Single Player Commands v1:
	-Initial release
	-Commands: /explode, /give, /ignite, /tp, /home, /sethome, /delhome, /bomb on, /bomb off, /bomb detonate

Single Player Commands v2:
	-Added Portable doors!
	-Added Commands: /pdoor on, /pdoor off, /pdoor open, /pdoor close
Single Player Commands v2.1:
	-Added bow to select Bomb and Portable Door for creative mode
	-Added Portable Door help
Single Player Commands v2.2:
	-Removed bow for selection. Added coal and Iron sword for selecting bomb, added stick and Iron hoe to select Portable Door
	-Fixed Bomb selection
	-Fixed /home messages
Single Player Commands v2.3:
	-Fixed ) missing

Single Player Commands v3:
	-Added Magic Carpet!
	-Added commands: /commands, /magiccarpet on, /magiccarpet off, /mc on, /mc off
Single Player Commands v3.1:
	-Removed /magiccarpet due to crashing bug. Use /mc instead
	-Fixed /mc off
	-Added zip link, due to devices having 'Download unsuccessful'
Single Player Commands v3.2:
	-Added Auto-lower to the Magic Carpet. Look down to lower the carpet

Single Player Commands v4:
	-Sprint mode added! (Thanks to WhyToFu)
	-Added commands: /sprint on, /sprint off
	-Added descriptions to commands in this forum
Single Player Commands v4.1:
	-Made Magic Carpet disappear when /mc off is typed
Single Player Commands v4.2:
	-Added commands: /bounce, /coords
Single Player Commands v4.3:
	-Added Auto-closing Portable Door
	-Removed /pdoor close, as it now automatically closes
	-Added Android Script ID
Single Player Commands v4.4:
	-Added commands: /hole
	-Added /give message

Single Player Commands v5:
	-Added Spawn Touch and Raining Animals!
	-Added commands: /spawn on|off, /rain chicken|cow

Single Player Commands v6:
	-Added nuke and InstaBreak!
	-Added commands: /nuke, /instabreak on|off
Single Player Commands v6.1:
	-Added commands: /help, /help nuke, /help instabreak
	-Added "Command does not exist!" message
Single Player Commands v6.2:
	-Fixed /coords (me = butthole)

Single Player Commands v7:
	-Added Warp Panels and words in /give!
	-Added commands: /warp on, /warp off
	-Added removing items from inventory after deactivating a command
Single Player Commands v7.1:
	-Added commands: /surface, /refresh
	-Added more command items, so gaining the items via /give is not necesarry
	-Added copyright license
Single Player Commands v7.2:
	-Fixed error while deactivating InstaBreak (Me = butthole)

Single Player Commands v8:
	-Added warping between floors!
	-Added commands: /ascend, /descend
Single Player Commands v8.1:
	-Added Creative compatibility for Warp Panels!
Single Player Commands v8.2:
	-Added Panorama!
	-Added GitHub!
	-Added commands: /panorama on, /panorama off

Single Player Commands v9:
	-Completely re-done the message system. Messages now stay on the screen for longer!
	-Added examples to /help
	-Added all commands to /help
Single Player Commands v9.1:
	-Renamed /spawn to /spawntouch
	-Added all mobs to /spawntouch and /rain
	-Added all help messages
```
