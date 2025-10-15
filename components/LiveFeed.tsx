'use client';

import { useState, useEffect } from 'react';

interface LiveActivity {
  id: string;
  playerName: string;
  game: string;
  type: 'big_win' | 'jackpot' | 'new_player' | 'level_up';
  amount?: number;
  timestamp: Date;
  multiplier?: number;
}

export default function LiveFeed() {
  const [activities, setActivities] = useState<LiveActivity[]>([]);

  // Mock live activities
  const generateMockActivity = (): LiveActivity => {
    const players = ['Mike***', 'Sarah***', 'John***', 'Emma***', 'Alex***', 'Lisa***'];
    const games = ['Lightning Roulette', 'Mega Moolah', 'Blackjack', 'Crazy Time', 'Book of Dead'];
    const types: LiveActivity['type'][] = ['big_win', 'jackpot', 'new_player', 'level_up'];
    
    const type = types[Math.floor(Math.random() * types.length)];
    const amount = type === 'big_win' || type === 'jackpot' 
      ? Math.floor(Math.random() * 50000) + 1000 
      : undefined;
    
    return {
      id: Date.now() + Math.random().toString(),
      playerName: players[Math.floor(Math.random() * players.length)],
      game: games[Math.floor(Math.random() * games.length)],
      type,
      amount,
      timestamp: new Date(),
      multiplier: type === 'big_win' ? Math.floor(Math.random() * 100) + 10 : undefined
    };
  };

  // Initialize with some activities
  useEffect(() => {
    const initialActivities = Array.from({ length: 8 }, generateMockActivity);
    setActivities(initialActivities);

    // Simulate new activities every 3-5 seconds
    const interval = setInterval(() => {
      const newActivity = generateMockActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 19)]); // Keep only 20 latest
    }, Math.random() * 2000 + 3000);

    return () => clearInterval(interval);
  }, []);

  const getActivityMessage = (activity: LiveActivity) => {
    switch (activity.type) {
      case 'big_win':
        return `won $${activity.amount?.toLocaleString()} on ${activity.game}`;
      case 'jackpot':
        return `hit the JACKPOT of $${activity.amount?.toLocaleString()} on ${activity.game}!`;
      case 'new_player':
        return `joined and started playing ${activity.game}`;
      case 'level_up':
        return `reached a new VIP level playing ${activity.game}`;
      default:
        return `played ${activity.game}`;
    }
  };

  const getActivityIcon = (type: LiveActivity['type']) => {
    switch (type) {
      case 'big_win':
        return 'pi pi-dollar';
      case 'jackpot':
        return 'pi pi-star-fill';
      case 'new_player':
        return 'pi pi-user-plus';
      case 'level_up':
        return 'pi pi-arrow-up';
      default:
        return 'pi pi-circle';
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((Date.now() - timestamp.getTime()) / 1000);
    
    if (seconds < 60) return 'now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
    return `${Math.floor(seconds / 86400)}d`;
  };

  return (
    <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl h-full">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
          <h3 className="text-lg font-bold text-white">Live Activity</h3>
          <div className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-md text-xs font-medium animate-pulse">
            LIVE
          </div>
        </div>

        {/* Activities List */}
        <div 
          className="h-[400px] overflow-y-auto pr-2 space-y-3"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#475569 #1e293b'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-track {
              background: #1e293b;
              border-radius: 3px;
            }
            div::-webkit-scrollbar-thumb {
              background: #475569;
              border-radius: 3px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #64748b;
            }
          `}</style>
          {activities.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <i className="pi pi-clock text-3xl mb-3 block opacity-50"></i>
              <p className="text-sm">Waiting for activity...</p>
            </div>
          ) : (
            activities.map((activity, index) => (
              <div 
                key={activity.id}
                className={`p-4 rounded-lg border transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 
                    ? 'bg-gradient-to-r from-blue-500/15 to-purple-500/15 border-blue-500/30 shadow-lg shadow-blue-500/10' 
                    : 'bg-slate-700/40 border-slate-600/40 hover:bg-slate-700/60 hover:border-slate-500/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Activity Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'jackpot' ? 'bg-gradient-to-br from-orange-500/30 to-yellow-500/30 text-orange-300 shadow-lg shadow-orange-500/20' :
                    activity.type === 'big_win' ? 'bg-gradient-to-br from-emerald-500/30 to-green-500/30 text-emerald-300 shadow-lg shadow-emerald-500/20' :
                    activity.type === 'new_player' ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-300 shadow-lg shadow-blue-500/20' :
                    'bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-purple-300 shadow-lg shadow-purple-500/20'
                  }`}>
                    <i className={`${getActivityIcon(activity.type)} text-sm`}></i>
                  </div>
                  
                  {/* Activity Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-semibold text-white text-sm">{activity.playerName}</span>
                      {activity.type === 'jackpot' && (
                        <div className="px-2 py-0.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border border-orange-500/30 rounded text-xs font-bold animate-pulse shadow-lg shadow-orange-500/20">
                          💰 JACKPOT
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                      {getActivityMessage(activity)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        {getTimeAgo(activity.timestamp)}
                      </span>
                      {activity.multiplier && (
                        <div className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30 rounded text-xs font-bold shadow-lg shadow-emerald-500/20">
                          {activity.multiplier}x
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}