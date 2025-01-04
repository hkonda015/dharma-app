import React from 'react';

    const messages = [
      "Your time is limited, so don't waste it living someone else's life.",
      "Act as if what you do makes a difference. It does.",
      "Start where you are. Use what you have. Do what you can.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "You don't have to be great to start, but you have to start to be great."
    ];

    export default function DailyMotivation() {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return (
        <div className="card motivation-card">
          <h3>Daily Inspiration</h3>
          <p>{messages[randomIndex]}</p>
        </div>
      );
    }
