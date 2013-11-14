#Single Player Commands v13

###This is a script that adds commands to Minecraft Pocket Edition

###Commands:
| Command | Parameters | Description | Example |
| :---: | :---: | :--- | :---: |
| /help | `<command>` | Shows help about a specific command | /help explode |
| /ascend | | Warps you to a floor/surface above you | |
| /bomb | `<on/off>` | Activates/Deactivates Bomb Mode | |
| /bomb | `<detonate>` | Detonates the selected block | |
| /bounce | `<power>` | Makes you bounce high | /bounce 2 |
| /coords | | Shows the current coordinates at your feet | |
| /delhome | | Deletes your saved coordinates made by /sethome | |
| /descend | | Warps you to a floor/surface beneath you | |
| /enderpearl | `<on/off>` | Activates/deactivates enderpearls, if you are holding an egg in creative mode. You can then throw the snowball | /enderpearl on |
| /entity | `<kill/remove/burn/explode>` `<MobName/all>` | Removes/burns/explodes the specified entities in the world. Based from MrARM's entity manager in his TMI ModPE Script. Thanks MrARM! |
| /eval | `<code>` | Runs the specified script in-game | /eval clientMessage("Hello World"); |
| /explode | `<radius>` | Be like a creeper! This command makes you explode | /explode 5 |
| /heal | `<amount>` | Sets your health to the specified amount | /heal 20 |
| /gamemode | `<survival/creative/0/1>` | Sets the player's gamemode | /gamemode 1 |
| /give | `<ID>` `<amount>` | Gives you the block/item you enter into the command | /give 57 64 |
| /hole | | Creates a hole underneath you. WARNING: USE WITH CAUTION | |
| /home | | Teleports you to your home. NOTE: /sethome must be used before this command | |
| /ignite | `<seconds>` | Sets the player on fire. WARNING: This may hurt | |
| /instabreak | `<on>` | Gives you a gold pickaxe to tap blocks with | |
| /instabreak | `<off>` | Deactivates InstaBreak | |
| /launch | `<mobname/tnt>` `<rapid>` | Launches a mob or TNT in the direction you are facing | /launch pig |
| /kill | | Kills the player | |
| /mc | `<on>` | Creates a 5x5 sheet of glass underneath your feet | |
| /mc | `<off>` | Makes the Magic Carpet disappear | |
| /nuke | | Spawns and detonates 49 TNT above you | |
| /panorama | `<on>` | Turns on Panorama mode, which slowly turns you clockwise | |
| /panorama | `<off>` | Turns off Panorama mode | |
| /pdoor | `<on/off>` | Activates/Deactivates Portable Door Mode | |
| /pdoor | `<open>` | Opens the 'door' at the selected block | |
| /rain | `<MobName>` | Makes it rain the specified mob | /rain chicken |
| /refresh | | Gives you all currently active command items | |
| /setitem | `<ID>` | Sets the specified item ID to the current held item in creative | /setitem 264 |
| /sethome | | Sets your current coordinates as your home | |
| /spawntouch | `<MobName>` | Spawns the specified mob when a block is tapped | /spawntouch chicken |
| /spawntouch | `<off>` | Deactivates Spawn Touch | |
| /sprint | `<on>` | Activates Sprint Mode. This allows you to walk at a faster speed | |
| /sprint | `<off>` | Turns off Sprint Mode | |
| /summon | `<mob>` `<x>` `<y>` `<z>` | Spawns a mob at the specified coordinates | /spawn pig 127 85 246 |
| /surface | | Teleports you to the surface | |
| /time | | Gets the current time in ticks | |
| /time | `<set>` `<sunrise/day/sunset/night>`| Sets the time to the specified time. NOTE: Buggy | /time set day |
| /tp | `<x>` `<y>` `<z>` | Teleports you to specified coordinates | /tp 79 68 143 |
| /warp | `<on>` | Gives you a slimeball, a diamond hoe, a gold hoe, and a few blocks of diamond, gold, iron, and lapis, and activates Warp Panels | |
| /warp | `<off>` | Deactivates the Warp Panels | |

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

Single Player Commands v10:
	-Added saving!
	-Added clientMessage (again)
	-Added help pages
Single Player Commands v10.1:
	-Added commands: /heal, /kill
	-Merged with Custom Creative Inventory
	-Used more Object-Orientated functions
Single Player Commands v10.2:
	-Added commands: /time, /summon
	-Fixed many, many bugs (/mc, /panorama, /heal, /kill)
	-Added duration to /ignite (It is now /ignite <seconds>)
Single Player Commands v10.3:
	-Added commands: /gamemode
	-Added all commands to /help
	-Arranged script commands alphabetically
Single Player Commands v10.4:
	-Added commands: /launch
	-Fixed /setitem
	-Made all Entity.spawnMob to Level.spawnMob
	-Corrected my failed spelling of WhyToFu (Sorry!)
Single Player Commands v10.5:
	-Added commands: /enderpearl
	-Made /mc a little less laggy (hopefully)

Single Player Commands v11:
	-Added commands: /eval
	-Added rapid fire to /launch (Type /launch <MobName> <rapid>)

Single Player Commands v12:
	-Added commands: /entity

Single Player Commands v13:
	-Added chat colours
```