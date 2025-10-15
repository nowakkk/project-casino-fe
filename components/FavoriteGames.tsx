'use client';

import { useRouter } from 'next/navigation';

interface FavoriteGame {
  id: string;
  name: string;
  type: 'slots' | 'table' | 'live' | 'crash';
  imageUrl?: string;
  provider: string;
  rtp?: number;
  minBet: number;
  maxBet: number;
  jackpot?: number;
  isNew?: boolean;
  isHot?: boolean;
}

interface FavoriteGamesProps {
  games?: FavoriteGame[];
}

export default function FavoriteGames({ games }: FavoriteGamesProps) {
  const router = useRouter();

  // Mock data
  const mockGames: FavoriteGame[] = [
    {
      id: '1',
      name: 'Lightning Roulette',
      type: 'live',
      provider: 'Evolution Gaming',
      rtp: 97.3,
      minBet: 0.20,
      maxBet: 5000,
      isHot: true
    },
    {
      id: '2',
      name: 'Mega Moolah',
      type: 'slots',
      provider: 'Microgaming',
      rtp: 96.1,
      minBet: 0.25,
      maxBet: 125,
      jackpot: 1250000,
      isNew: true
    },
    {
      id: '3',
      name: 'Blackjack Classic',
      type: 'table',
      provider: 'NetEnt',
      rtp: 99.5,
      minBet: 1,
      maxBet: 1000
    },
    {
      id: '4',
      name: 'Crash Game',
      type: 'crash',
      provider: 'Spribe',
      rtp: 97,
      minBet: 0.10,
      maxBet: 100,
      isHot: true
    },
    {
      id: '5',
      name: 'Book of Dead',
      type: 'slots',
      provider: 'Play\'n GO',
      rtp: 96.2,
      minBet: 0.01,
      maxBet: 100,
      isHot: true
    },
    {
      id: '6',
      name: 'Dream Catcher',
      type: 'live',
      provider: 'Evolution Gaming',
      rtp: 96.6,
      minBet: 1,
      maxBet: 2500,
      isNew: true
    }
  ];

  const data = games || mockGames;

  const typeIcons = {
    slots: 'pi pi-circle',
    table: 'pi pi-th-large', 
    live: 'pi pi-video',
    crash: 'pi pi-chart-line'
  };

  const gameCardTemplate = (game: FavoriteGame) => {
    return (
      <div key={game.id} className="w-full sm:w-1/2 lg:w-1/3 p-3">
        <div className="bg-slate-700/40 border border-slate-600/40 rounded-lg shadow-xl hover:bg-slate-700/60 hover:border-slate-500/60 transition-all duration-300 cursor-pointer h-full group">
          <div className="p-4">
            {/* Game Image Placeholder */}
            <div className="w-full h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border border-slate-600/30">
              <i className="pi pi-play text-3xl text-white/60 group-hover:text-white/80 transition-colors"></i>
              
              {/* Badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {game.isNew && (
                  <div className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30 rounded text-xs font-medium">
                    NEW
                  </div>
                )}
                {game.isHot && (
                  <div className="px-2 py-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30 rounded text-xs font-medium animate-pulse">
                    HOT
                  </div>
                )}
              </div>
            </div>

            {/* Game Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-white leading-tight flex-1 pr-2">{game.name}</h4>
                <div className="flex items-center gap-2 text-slate-400">
                  <i className={`${typeIcons[game.type]} text-sm`}></i>
                  <span className="text-xs font-medium uppercase">{game.type}</span>
                </div>
              </div>
              
              <p className="text-sm text-slate-400 m-0">{game.provider}</p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600/30">
                  <span className="text-slate-400 block mb-1">RTP</span>
                  <span className="font-semibold text-white">{game.rtp}%</span>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600/30">
                  <span className="text-slate-400 block mb-1">Min Bet</span>
                  <span className="font-semibold text-white">${game.minBet}</span>
                </div>
              </div>

              {game.jackpot && (
                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-3 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-2">
                    <i className="pi pi-star-fill text-orange-300"></i>
                    <span className="text-sm font-bold text-orange-300">
                      Jackpot: ${game.jackpot.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button 
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm"
                  onClick={() => router.push(`/games/${game.type}`)}
                >
                  <i className="pi pi-play mr-2"></i>
                  Play Now
                </button>
                <button className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300">
                  <i className="pi pi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl h-full">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white m-0">Favorite Games</h3>
          <button 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
            onClick={() => router.push('/games')}
          >
            <i className="pi pi-external-link mr-2"></i>
            View All Games
          </button>
        </div>
        
        <div className="flex flex-wrap -m-3">
          {data.map(game => gameCardTemplate(game))}
        </div>
      </div>
    </div>
  );
}