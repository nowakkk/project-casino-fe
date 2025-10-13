"use client";
import Image from "next/image";

export interface PlayingCardProps {
    initialDelay: number;
}

const FRONT_CARD_IMAGES = [
  '/images/cards/10_of_clubs.svg',
  '/images/cards/10_of_diamonds.svg',
  '/images/cards/10_of_hearts.svg',
  '/images/cards/10_of_spades.svg',
  '/images/cards/2_of_clubs.svg',
  '/images/cards/2_of_diamonds.svg',
  '/images/cards/2_of_hearts.svg',
  '/images/cards/2_of_spades.svg',
  '/images/cards/3_of_clubs.svg',
  '/images/cards/3_of_diamonds.svg',
  '/images/cards/3_of_hearts.svg',
  '/images/cards/3_of_spades.svg',
  '/images/cards/4_of_clubs.svg',
  '/images/cards/4_of_diamonds.svg',
  '/images/cards/4_of_hearts.svg',
  '/images/cards/4_of_spades.svg',
  '/images/cards/5_of_clubs.svg',
  '/images/cards/5_of_diamonds.svg',
  '/images/cards/5_of_hearts.svg',
  '/images/cards/5_of_spades.svg',
  '/images/cards/6_of_clubs.svg',
  '/images/cards/6_of_diamonds.svg',
  '/images/cards/6_of_hearts.svg',
  '/images/cards/6_of_spades.svg',
  '/images/cards/7_of_clubs.svg',
  '/images/cards/7_of_diamonds.svg',
  '/images/cards/7_of_hearts.svg',
  '/images/cards/7_of_spades.svg',
  '/images/cards/8_of_clubs.svg',
  '/images/cards/8_of_diamonds.svg',
  '/images/cards/8_of_hearts.svg',
  '/images/cards/8_of_spades.svg',
  '/images/cards/9_of_clubs.svg',
  '/images/cards/9_of_diamonds.svg',
  '/images/cards/9_of_hearts.svg',
  '/images/cards/9_of_spades.svg',
  '/images/cards/ace_of_clubs.svg',
  '/images/cards/ace_of_diamonds.svg',
  '/images/cards/ace_of_hearts.svg',
  '/images/cards/ace_of_spades.svg',
  '/images/cards/king_of_hearts.svg',
  '/images/cards/king_of_hearts2.svg',
  '/images/cards/king_of_spades.svg',
  '/images/cards/king_of_spades2.svg',
  '/images/cards/queen_of_clubs.svg',
  '/images/cards/queen_of_clubs2.svg',
  '/images/cards/queen_of_diamonds.svg',
  '/images/cards/queen_of_diamonds2.svg',
  '/images/cards/queen_of_hearts.svg',
  '/images/cards/queen_of_hearts2.svg',
  '/images/cards/queen_of_spades.svg',
  '/images/cards/queen_of_spades2.svg',
  '/images/cards/red_joker.svg',
];

const BACK_CARD_IMAGES = [
  '/images/cards/card_back_red.svg',
  '/images/cards/card_back_blue.svg'
];

export const PlayingCard = ({ initialDelay }: PlayingCardProps) => {
    const duration = 15 + Math.random() * 10; 
    const startX = Math.random() * 100;
    const rotationOffset = Math.random() * 360; 

    const randomIndex = Math.floor(Math.random() * FRONT_CARD_IMAGES.length);
    const randomFrontImage = FRONT_CARD_IMAGES[randomIndex];

    const randomBackIndex = Math.floor(Math.random() * BACK_CARD_IMAGES.length);
    const randomBackImage = BACK_CARD_IMAGES[randomBackIndex];

    return (
        <div
            className="card-wrapper" 
            style={
                {
                    '--animation-duration': `${duration}s`,
                    '--animation-delay': `${initialDelay}s`,
                    '--start-x': `${startX}vw`,
                    '--rotation-offset': `${rotationOffset}deg`,
                } as React.CSSProperties
            }
        >
            <div className="card-inner">
                
                <div className="card-face card-back">
                    <Image 
                        src={randomBackImage} 
                        alt="Karta do gry (Rewers)" 
                        layout="fill" 
                        objectFit="cover" 
                        unoptimized={true}
                    />
                </div>
                
                <div className="card-face card-front">
                    <Image 
                        src={randomFrontImage} 
                        alt={`Karta do gry: ${randomFrontImage}`} 
                        layout="fill" 
                        objectFit="cover" 
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
};