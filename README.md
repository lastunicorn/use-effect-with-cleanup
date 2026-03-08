# React `useEffect` Demo (with Cleanup)

## Overview

Demo using the `useEffect` hook in React that shows how to perform a cleanup when the component unloads.

The demo contains:

- **seconds value** 
  - One state value to store the elapsed time in seconds: `seconds`

- **is running value**
  - One state value remember if the component is running: `isRunning`
  - This is needed after component reload to decide if a timer should be started or not.

- **timer**
  - started with `setInterval`
  - This is active while the component is loaded. When the component is unloaded, the timer is stopped.

- **cleanup function**
  - An effect cleanup function to stop the timer when the component unloads.

- **start/stop**
  - One button to start/stop the component.

- **reset**
  - One button to reset the seconds.


Uses Vite as build tool.

## Other Demos

Check out my other repositories to find different other demos for `useEffect` and React:

- https://github.com/lastunicorn?tab=repositories

## Tutorial

See the [Tutorial](/doc/tutorial/README.md) for more details.



