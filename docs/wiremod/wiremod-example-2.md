---
id: wiremod-examples-2
title: Wire Example 2
sidebar_label: Example 2
---
## Overview

![second example using lights & more](/gmod_img/addons/wire/second_example.png)

Let's continue with some more components

### Spawning

- 2 Buttons **(Not Toggle; Off: 0; On: 1)**
- 1 Target Finder **(it should detect something atleast when close)**
- 1 Or (Any) Gate
- 1 Multiply Gate
- 1 Constant Value **(Number: 255)**
- 1 Light

### Wiring up

- Hook Light (Whatever Color you like - Red for example) to Multiply Gate
- Hook Multiply Gate A -> Or (Any)
- Hook Multiply Gate B -> Constant Value (255)
- Hook Or (Any) A -> Button 1
- Hook Or (Any) B -> Button 2
- Hook Or (Any) C -> Target Finder

### Run it!

1. Get Close to Target Finder
2. Light should be red
3. Get away
4. Light should be dark

5. Press Button 2
6. Light should be red
7. Release Button 2
8. Light should be dark

Simple isn't it?

### What now? Improve.

A `Light` is nice, but what about an alarm (try `SoundEmitters`) when the `TargetFinder` detects something?