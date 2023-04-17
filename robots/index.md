---
layout: layout.njk
title: Make Robots - Edward Delaporte's Guide
---

# Let's Make Robots!

+ [Why Make Robots?](/robots/robobrawl/)

## Start with BBC MicroBit

In my opinion, the BBC MicroBit is currently the best chip for an easy start to building robots. A chip costs under $30.00, and a good starter robot frame can cost as little as $35.00.

## MicroBit Single Device Demos

The following programs require only a single MicroBit. 
They can also run directly in your web browser - try clicking on the picture of a MicroBit at the left hand side.

> The recommended way to enjoy these programs is with one MicroBit with a MicroBit battery pack attached. 

Typically a MicroBit will come with a computer connection cable and a battery pack included. 

Once the program is downloaded to the MicroBit, the program can be used immediately while the MicroBit is powered by the connection cable.

To use the battery pack, open the battery pack up and add batteries. Disconnect the MicroBit from the USB cable, and then connect the battery pack to the MicroBit. Then turn the battery pack switch to 'on'.

[Smiley](https://makecode.microbit.org/_fTx32C4f2Ao1)

I wanted a trivial demo to make my Microbit smile. So I wrote one in less time than it took me to realize that the same exact program was available in the second tutorial on the main site. Many of my ideas a very unoriginal. This is one. Ask me about the time I wrote a binary clockface for my Pebble smart watch.

[Count up to 5 of 5 different things](https://makecode.microbit.org/_Heid2TJmobLM)

Need to keep track of a small number of things, and only have an obscrure microchip and two AAA batteries? In that unlikely case, I have just the solution you're looking for!

[Binary Matching Game](https://makecode.microbit.org/_YapahhRzC4HJ)

Three lights at the top display a number in binary. Press the 'A' button to count upwards in binary until the three lights at the bottom match. Press 'B' to check your match.

> This program is in JavaScript instead of Block Code, because some of the binary math requires functions that are not included in Block code.

To further explore binary numbers, you can check out [this Scratch program](https://scratch.mit.edu/projects/188029887/)

To better understand the math used in both programs, you can [read about converting from binary to decimal](https://www.w3resource.com/javascript-exercises/javascript-math-exercise-2.php).

[Strobe Nametag](https://makecode.microbit.org/_KvUaa2KjyE0C)

If I ever use Microbit as a name tag, I want a little extra pizzazz.

### Radio Demos

Micro:Bit is a terrific platform for learning asynchronous communication.

[Secret Messenger](https://makecode.microbit.org/_PLj13fcW50Wm)

Send messages to a friend's Micro:Bit, one bit LED at a time. Push A to send a blank space. Push B to send a lit LED. Push A and B to reset the grid.

[Button, Button, Whose got the Button?](https://makecode.microbit.org/_0me4RfVuuA0R)

Why play a terrific game with a simple clothes button, when you can use batteries, microchips, and radios instead?

### Robots!!! with BBC Micro:Bit

For about $60.00 (one MicroBit and one CuteBot), your kid can have a robot trucking around the room, following code they wrote. Consider getting an extra MicroBit to act as a remote control via Bluetooth.

[BBC Micro:Bit](https://makecode.microbit.org/) is currently the most afordable hardware I have found that can run block code.

It comes with bunch of LEDs, a couple of buttons, a bluetooth radio, and a connector for an always growing set of add-on boards.

[CuteBot][50] is currently my favorite affordable robot frame. CuteBot integrates some of the best features for the price - including multicolor LED lights, a front connector to easily add a $3.00 distance sensor (often included in the kit).

### More Robot!

The [RingBig Car][1] frame is a great affordable robot body. It doesn't have as many features as [CuteBot][50], but I've found them for as cheap as $20.00, and that's a terrific price for a basic robot frame that rolls around the room.

[50]: https://www.elecfreaks.com/learn-en/microbitKit/smart_cutebot/cutebot_car.html

[Wanderer](https://makecode.microbit.org/_MeWdP5dk9ELC) is a simple demonstration program that makes it wander randomly around the room. This is for an older version of the MicroBit framework, so it can be hard to find the RingBit control library without a direct link, at the moment.

[Dancing Friends][2] is the wandering bots program above, modified so that every ten seconds or so, one of the robots will call out for all the robots to spin in a circle.

[1]: https://www.elecfreaks.com/estore/ring-bit-car-mirco-bit-educational-smart-robot-kit-for-kids-ringbit-car.html
[2]: https://makecode.microbit.org/_02D1CwRYqMWD

### WaveShare Joystick for Micro:Bit

[Musical Gamepad][3] turns your WaveShare Joystick into a primitive Midi keyboard. This was my first test that the library and hardware are compatible. And the WaveShare Joystick can sing!

[3]: https://makecode.microbit.org/_hubWLC3u7DRH

### Remote Control your RingBitCar

What could be more fun than having a remote control robot?

Download [Remote Control - RingBitCar][4] to your RingBitCar, and [Remote Control - WaveShare Joystick][5] to your WaveShare JoyStick and enjoy!

[4]: https://makecode.microbit.org/_00c0adJDK9wJ


[5]: https://makecode.microbit.org/_aThU8kXhwLW7

### Swarm Programs for RingBitCaro

You will want two or more MicroBits connected to RingBitCar to use this program.

[Rat!][6] is a program for MicroBit and RingBitCar that uses the Bluetooth radio and wheels to seek out other nearby robots who are running the same program.

[6]: https://makecode.microbit.org/_2DfLE1ir202a

[Remote Rat Car][7] and [Remote Rat Remote][8] can be added to the mix if you want to control a member of the swarm. If you want to use a stand-alone Microbit as the remote, then try [Trivial Rat Remote][9]

[7]: https://makecode.microbit.org/_10DW3jLJ0Vdq
[8]: https://makecode.microbit.org/_VkrYeTMc00q5
[9]: https://makecode.microbit.org/_L2bWHEhtLadu

## More robot ideas

If you want more ways to challenge your robots, consider these resources.

- [Past R5 Conference Robotics Competition Rules](https://r5conferences.org/student-activities/robotics/past-robotics-competitions-rules/)
- [First Robotics Past Rules](https://www.firstinspires.org/resource-library/frc/archived-game-documentation)
- [BattleBots Rules](https://battlebots.com/rules/)

