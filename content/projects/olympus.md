---
title: "Olympus"
date: 2018-11-11T00:50:18-05:00
description: VR Project that lets someone trace a path with their hands, then send it to a robot for it to travel along.
image: olympus.png
draft: false
repo: https://github.com/zachbodi/OculusRobotControl
---

Oculus was made duiring BostonHacks 4, with a team of four. We then focused on two main parts, building a robot to travel along a path, and a vr interface that can create the path and send it over a network to the robot. 

I was one of the members who focused on the VR interface. We got an Oculus GO and a Leap Motion for hand tracking, provided by MLH at the event. Then we started configuring the two, and setting them up with a Unity SDK for developing it. 

By the next morning, we made a grid with some spheres on it that the player could use to trace a path, almos tlike unlocking an Android phone. Some gestures were added to help manage the path too--a thumbs down cleared the whole board, pointing your index fingers together would undo, and two thumbs up would save and send the path to the robot. The robot was listening on a server for the data to get sent over to it, and would use it's motors to point to the next point in the path and travel straight to it. 