# React `useEffect` Tutorial: Timer

This repository demonstrates the use of `useEffect` React hook by controlling a timer.

## What this demo shows

- `useState` for timer value (`seconds`) and running state (`isRunning`)
- `useEffect` to create a `setInterval` while running
- A cleanup function (calls `clearInterval`) to avoid leaking intervals
- How dependency changes (`[isRunning]`) re-run the effect safely

## Prerequisites

Before starting, install:

- **Node.js** 20+ (LTS recommended)
- **npm** (included with Node.js)
- VS Code (or your preferred editor)

Verify installation:

```bash
node --version
npm --version
```

## Step 1: Create the React project

(Vite + TypeScript)

```bash
npm create vite@latest use-effect-demo -- --template react-ts
cd use-effect-demo
npm install
```

## Step 2: Create `UseEffectDemo` component

Add `src/features/use-effect-demo/UseEffectDemo.tsx` file:

```tsx
import { useState, useEffect } from "react";

import "./UseEffectDemo.css";

export default function UseEffectDemo() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		if (!isRunning) return;

		const intervalId = setInterval(() => {
			setSeconds(x => x + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning]);

	function handleToggle() {
		setIsRunning(x => !x);
	}

	function handleReset() {
		setSeconds(0);
	}

	function formatTime(totalSeconds: number) {
		const mins = Math.floor(totalSeconds / 60);
		const secs = totalSeconds % 60;
		return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	}

	function formatIsRunning(isRunning: boolean) {
		return isRunning ? "Running" : "Paused";
	}

	return (
		<>
			<button onClick={handleToggle}>{formatIsRunning(isRunning)}</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
}

```

## Step 3: Render the component from the app

```tsx
import './App.css'
import { UseEffectDemo } from './features/document-title'

export default function App() {
	return (
		<>
			<h1>React <code>useEffect</code> Demo</h1>

			<UseEffectDemo/>
		</>
	)
}
```

## Step 4: Done

Run the app:

  ```bash
npm run dev
  ```

Then open the local URL shown by Vite (usually `http://localhost:5173`).
