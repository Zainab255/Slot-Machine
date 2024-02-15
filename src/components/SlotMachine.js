import React, { useState } from "react";

const symbols = ["🍒", "🍋", "🍇", "🍊", "🍉", "🍎", "🍌", "🍓", "🍍", "🍈"];

const getRandomSymbol = () => {
  const randomIndex = Math.floor(Math.random() * symbols.length);

  return symbols[randomIndex];
};

const checkHorizontalMatch = (emojis) => {
  return emojis.every((emoji) => emoji === emojis[0]);
};

const SlotMachine = () => {
  const [horizontalEmojis, setHorizontalEmojis] = useState(
    Array.from({ length: 3 }, () => getRandomSymbol())
  );
  const [congrats, setCongrats] = useState(false);

  const spinEmojis = () => {
    const newHorizontalEmojis = Array.from({ length: 3 }, () =>
      getRandomSymbol()
    );

    setHorizontalEmojis(newHorizontalEmojis);

    if (checkHorizontalMatch(newHorizontalEmojis)) {
      setCongrats(true);
    } else {
      setCongrats(false);
    }
  };

  return (
    <>
      <div className="card" style={{ width: "46rem" }}>
      <div className="card-body">
        <div className="slot-machine">
          <h1 className="card-title">Welcome 🎰 Slot-Machine 🎰</h1>
            <div className="horizontal-emojis">
              {horizontalEmojis.map((emoji, index) => (
                <div key={index} className="emoji">
                  <div>{emoji}</div>
                  <div>{emoji}</div>
                </div>
              ))}
            </div>
            {congrats && (
              <div className="congrats">Congrats This is Match!</div>
            )}
            <button onClick={spinEmojis} className="spin-button">
              Spin
            </button>
        </div>
       </div>
      </div>
    </>
  );
};

export default SlotMachine;
