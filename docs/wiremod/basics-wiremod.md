---
id: basics-wiremod
title: Wherrr'! tha wires at!
sidebar_label: First Steps
---

## Overview

Let's talk Inputs & Outputs

- Inputs (something triggers)
- Outputs (something acts)

Okay? So what now?

Let's create an example:

- 1 Button
- 1 Thruster

We spawn it, it does nothing.. _halp!_

### Wiring!

with the help of the `Wire Tool`, we can hook them together:

1. You can see already connected Inputs ![connected wire](/gmod_img/addons/wire/wire_hookingup_1.png) <br />_which can also help on follow cables when they are shown_
2. While trying to hook up our A (from the Thruster) to our Button, we can scroll to select our prefered Output![hooking to Outputs](/gmod_img/addons/wire/wire_hookingup_2.png)
3. We take Out (from the Button)

On a button press, we should see the Thruster going off - depending on the settings of the button (Toggle?)

```
Button "Out" --> Thruster "A"

on press: Button is 1; Thruster is 1 
- otherwise both are 0 & so called 'off' :)
```

### Oh shoot, that was loud!!!
:::caution

So you may just got ear bleeding by the thruster sound, dont you?

What's with the people around you?

:::

#### 💡 Use your common sense

_It was an accident_
so you really needed them that long to fly around?
Sure you did it! _But was it worth to catch everyone's attention?_

---

Next up follow [DataTypes](wiremod-datatypes)