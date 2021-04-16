---
id: wiremod-examples-1
title: Wire Example 1
sidebar_label: Example 1
---
## Overview

![first example using timer](/gmod_img/addons/wire/first_example.png)

Let's continue with `Numbers`, as we're using a timer now to just show us the current time since it started.
It's not much, but this helps you to understand the `Wiring Tool`

## First Wire Gate

With the Wire `Gates` Tool, we can create our first & basic Wiremod Constraptions

![text filtering with gates tool](/gmod_img/addons/wire/wire_gates.png)


Let's create the basics example from above:

### Spawning

- Create 2 Buttons **(Not Toggle; Off: 0; On: 1)**
- Create 1 Timer Gate
- Create 1 Screen *(No, not Textscreen, not consolescreen, not digitalscreen.. just screen!)*

### Wiring up

- Hook Run to Button 1
- Hook Reset to Button 2
- Hook Screen to Timer

### Run it!

1. Hold Button 1
2. See Screen increase count
3. Press Button 2

it doesn't continue to count?
Yes, because your **Button 1 isn't Toggle**.

This means `"Button = Run (will be equal)"`

### What now? Improve.

![continue first example with smoother](/gmod_img/addons/wire/first_example_2.png)

Using the `Smooth` Gate with a `Constant Value (Number: 0.5)`

allows us to "slow down"/smoothes the `Time`, depending on our `Constant Value`


Try it yourself & Let me know if you did it! 🎉