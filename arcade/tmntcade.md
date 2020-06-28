
# TMNT RetroPi Conversion

## Parts List

- 4x USB Controller
- 4x "Player" start buttons
- 4x "Coin" buttons
- Raspberry Pi Model 3 (Replaced almost immediately with a Model 4)
- HDMI Cable
- Video Encoder Chip
- Sound Amplifier
- 3.5mm to RCA adapter
- 3x 12 V power adapter (purchased two additional, and reused the one that came with the cabinet)
- Surge protector

![USB Controller](img/usb_1.jpg)

This USB chip will allow the existing cabinet controls to be connected to the [Raspbery Pi][1] as USB controllers. Rewiring these controls was the most time-consuming part of the project. I used four of these - one for each player (Leo, Mikey, Don and Raph).


## First Configuration - Only supports 2 button games

At this point, I had only one 'select' button. I wired the cabinet on/off switch to an extra button on Leonardo's controls. This worked for awhile, but eventually the controllers were detected on boot in a different order, and then it was no longer possible to press start+select on the new player 1, because while Donatello's controller has the same mapping, it lacks an button in that position. As a work-around, I may install [this script] (https://retropie.org.uk/forum/topic/13095/controllers-order-how-swap/5). 
 
But my real intent is to drill holes in the front panel and add two more buttons per player there - which will be mapped to start and select. This will return the surface top 'add coin' buttons for use on gameplay - brining the total per player up to 3 buttons, without modifying the top of the deck in any visible way.

## Second Configuration - Supports 3 button games

By adding 8 buttons to the panel "J" on the front of the cabinet, the will free-up the 4 "start" buttons on the top of the cabinet for use during gameplay.

## Raw Notes Follow

+ For the joysticks I had to [learn how to disconnect and reconnect a JDT connector](https://youtu.be/kRvDgiX4Sk4) The wires were in sets of 4, and my USB board needed sets of 2. I didn't have to pick anywhere special to put them - I just put them on the next open slot - following the usual advice to keep every control set wired in the same order.

+ For the buttons, I used a pliers and moved the existing JST connectors to my [USB Connectors](https://smile.amazon.com/gp/aw/d/B01FZ797OC?psc=1&ref=ppx_pop_mob_b_asin_title)
+ To get all the USB controllers wires out of the controls box, I used a rotorary cutting tool to cut the existing plastic opening larger.
+ For the monitor I used the usual adapter board.
+ For the heart, I have a RetroPi model 3.


## Issues after first build

+ On/off is at surge protector. Plan is to add a voice controlled outlet.
+ No sound. I plan to buy an amplifier. There are some good YouTube videos about this.
+ Only Leo and Donny are recognized. Plan to debug this after I have a full set of buttons.
+ Arcade games like TMNT aren't playable without both a Coin and a Start button per player. Plan to order longer button wires and add 8 new coin and start buttons to the angled lower front panel. This keeps me from having to drill through the plastic controls case, and I will look the look better.
+ It deserves a fan and ventilation. I plan to replace the Pi model 3 with a model 4 that will come with heat sinks and a fan.
+ It deserves lights. I'm planning to run a simple light strip along the back of the cabinet.
+ Should upgrade it to a Pi4.
+ Doesn't have enough buttons to do things like save/load or manage favorites.
+ 
