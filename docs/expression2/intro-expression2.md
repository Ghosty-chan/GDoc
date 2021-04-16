---
id: intro-expression2
title: Hello Expression2
sidebar_label: Hello E2
---

## Overview
**Some few lines can replace a Wire Gate madness**, without all the hassle you can connect & control your whole construction.

And the more advanced you go, there more you'll notice the lack of Basic Wire Stuff (`Holograms`, `Sounds`) - which they worked on too already a bit (`applyForce` & `setPos`)

## Basic Concept of E2

## Syntax

## DataTypes

## Useful Links to Resources
*(some infos are gathered from there!)*

![E2 Menu](/gmod_img/addons/expression2/gmod_2HhhCkq8yI.png)
Menu similar to ADV Dupe 2 - File List

## Local storages
Codes:
`Steam\steamapps\common\GarrysMod\garrysmod\data\expadv2`

E2 FileCore (Custom E2 Files):
`garrysmod\data\e2files`


## DataTypes

Same as [Wiremod Datatypes](../wiremod/wiremod-datatypes)

## Basic Syntax
```
@name My E2 Name
@inputs MyNumber1 [MyString1 MyString2]:string MyVector:vector [MyEGP MyButton MyThruster]:wirelink
@inputs MyButtonA
@outputs RandomPosition:vector TargetColor:vector MyProp:entity MyE2:prop MyOwner:entity
@outputs MoreOutputs
@persist MyHiddenValue MyArray:array MyTable:table
@persist MoarHiddenValues
@trigger MyButtonA
### <-- Comments
if( first() ){
  # YOUR FIRST STUFF GOES HERE (Declare constant values -> not changing values; 
  ## or something which needs to be set at start time)
  # runOnTick / runOn...
  runOnLast(1)

  RandomPosition = vec( 0 , 0, 10 )

  TargetColor = vec(255,0,0) #Colors are easy (Red,Green,Blue) from 0 - 255

  MyE2 = entity()

  MyArray:pushEntity( MyE2 )
  MyArray:pushEntity( owner() )

  MyTable["SomeRandomArray",array] = MyArray

  MyTable["AndSomeOtherText",string] = entity():owner():name()

  MyEGP:egpClear()
}
## Stuff done after the e2 'started'

if(MyButtonA){ ## same as if(MyButtonA >= 1)

  MyThruster["A",number] = 100 #Easy to use wire components

}elseif(MyButtonA & MyButton["A",number]) { ## if both are on, more speed!

  MyThruster["A",number] = 500

}else{ ## otherwise turn off!!!

  MyThruster["A",number] = 0

}

### interval <-- Depending on the task (needs continue do something, after first())
## My running code
MoreOutputs = MyButton["Out",number]
MyProp = MyE2

## Due to runOnLast(1) (position doesnt matter, I think.. 🤣 except inside the if first)
if(last()){
  hint("Goodbye :)",1)
}
```