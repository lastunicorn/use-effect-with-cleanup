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
		<div className="Card">
			<h2>Start a Timer</h2>

			<p className="Card__description">
				Demonstrates <code>useEffect</code> with a <strong>cleanup function</strong>.<br />
				The interval is cleared when the component unmounts or when <code>isRunning</code> changes.
			</p>
			<div className="Card__display">{formatTime(seconds)}</div>
			<div className="Card__controls">
				<button onClick={handleToggle}>{formatIsRunning(isRunning)}</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
}
