import { useState, useEffect } from "react";

const OfflineGame = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    setRunning(false);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [running]);

    const startGame = () => {
        setScore(0);
        setTimeLeft(10);
        setRunning(true);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>🎮 Offline Mode</h2>
            <h3>Time: {timeLeft}s</h3>
            <h3>Score: {score}</h3>

            {running ? (
                <button
                    onClick={() => setScore((s) => s + 1)}
                    style={{ padding: "20px", fontSize: "20px" }}
                >
                    Click Fast!
                </button>
            ) : (
                <button onClick={startGame}>Start Game</button>
            )}
        </div>
    );
};

export default OfflineGame;