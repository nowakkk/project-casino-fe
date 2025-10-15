'use client';

interface GameRecord {
    id: string;
    game: string;
    date: string;
    bet: string;
    result: string;
    status: 'win' | 'loss' | 'pending';
}

export default function GameHistory() {
    const gameHistory: GameRecord[] = [
        { id: '1', game: 'Blackjack Pro', date: '2024-10-13 14:30', bet: '$25.00', result: '$50.00', status: 'win' },
        { id: '2', game: 'Roulette Gold', date: '2024-10-13 14:15', bet: '$10.00', result: '-$10.00', status: 'loss' },
        { id: '3', game: 'Poker Royal', date: '2024-10-13 13:45', bet: '$100.00', result: '$250.00', status: 'win' },
        { id: '4', game: 'Slot Mega', date: '2024-10-13 13:30', bet: '$5.00', result: '-$5.00', status: 'loss' },
        { id: '5', game: 'Baccarat Elite', date: '2024-10-13 13:00', bet: '$50.00', result: '$100.00', status: 'win' },
        { id: '6', game: 'Dice Master', date: '2024-10-13 12:30', bet: '$20.00', result: 'Pending', status: 'pending' },
        { id: '7', game: 'Lightning Roulette', date: '2024-10-13 12:00', bet: '$15.00', result: '$75.00', status: 'win' },
        { id: '8', game: 'Crazy Time', date: '2024-10-13 11:45', bet: '$8.00', result: '-$8.00', status: 'loss' },
    ];

    return (
        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl h-full">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Recent Games</h3>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
                        View All
                    </button>
                </div>
                
                <div 
                    className="h-[400px] overflow-y-auto"
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
                    
                    <div className="space-y-3">
                        {gameHistory.map((record, index) => (
                            <div 
                                key={record.id}
                                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-[1.01] ${
                                    index === 0 
                                        ? 'bg-gradient-to-r from-blue-500/15 to-purple-500/15 border-blue-500/30' 
                                        : 'bg-slate-700/40 border-slate-600/40 hover:bg-slate-700/60 hover:border-slate-500/60'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="font-semibold text-white text-sm">{record.game}</h4>
                                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                                                record.status === 'win' 
                                                    ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30'
                                                    : record.status === 'loss'
                                                    ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30'
                                                    : 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border border-orange-500/30'
                                            }`}>
                                                {record.status.toUpperCase()}
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-1">{record.date}</p>
                                        <p className="text-sm text-slate-300">Bet: {record.bet}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-lg font-bold ${
                                            record.status === 'pending' ? 'text-orange-300' : 
                                            record.status === 'win' ? 'text-emerald-300' : 'text-red-300'
                                        }`}>
                                            {record.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}