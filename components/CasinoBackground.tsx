"use client";

import { PlayingCard } from "./PlayingCard";

const NUM_CARDS = 40; 

export const CasinoBackground = () => {
  const cards = Array.from({ length: NUM_CARDS }, (_, i) => (
    <PlayingCard 
      key={i}
      initialDelay={i * 0.3 + Math.random() * 5} 
    />
  ));

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-0 perspective-1200"> 
      {cards}
    </div>
  );
};
