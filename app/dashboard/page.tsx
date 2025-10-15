'use client';

import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import GameHistory from '@/components/GameHistory';
import FavoriteGames from '@/components/FavoriteGames';
import LiveFeed from '@/components/LiveFeed';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <Navbar />
            
            <div className="container mx-auto px-4 py-6 max-w-7xl">
                {/* Welcome Section */}
                <div className="mb-8">
                    <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25">
                                        <i className="pi pi-play mr-2"></i>
                                        Play Now
                                    </button>
                                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border border-orange-500/30 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-yellow-500/30 transition-all duration-300">
                                        <i className="pi pi-gift mr-2"></i>
                                        Claim Bonus
                                    </button>
                                </div>
                                <h1 className="text-xl lg:text-2xl font-bold mb-2 text-white">Welcome back, Player!</h1>
                                <p className="text-base lg:text-lg text-slate-300 mb-4">Ready to win big today?</p>
                            </div>
                            {/* Quick Actions */}
                            <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl h-fit">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                                    <div className="space-y-3">
                                        <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg hover:from-emerald-500/30 hover:to-green-500/30 transition-all duration-300 font-medium">
                                            <i className="pi pi-plus-circle mr-2"></i>
                                            Deposit Funds
                                        </button>
                                        <button className="w-full px-4 py-3 bg-slate-700/40 border border-slate-600/40 text-slate-300 rounded-lg hover:bg-slate-700/60 hover:border-slate-500/60 transition-all duration-300 font-medium">
                                            <i className="pi pi-minus-circle mr-2"></i>
                                            Withdraw
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Account Status */}
                            <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl h-fit">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-4">Account Status</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-slate-400">Account Level</span>
                                            <div className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 rounded text-sm font-medium">
                                                Gold Member
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-slate-400">Next Bonus</span>
                                            <span className="font-semibold text-emerald-300">2 hours</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-slate-400">Loyalty Points</span>
                                            <span className="font-semibold text-orange-300">2,847</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                    <StatCard
                        title="Total Balance"
                        value="$1,250.50"
                        icon="pi pi-wallet"
                        color="green"
                        trend={{ value: 12.5, isPositive: true }}
                    />
                    <StatCard
                        title="Total Winnings"
                        value="$8,945.75"
                        icon="pi pi-trophy"
                        color="blue"
                        trend={{ value: 8.2, isPositive: true }}
                    />
                    <StatCard
                        title="Games Played"
                        value="247"
                        icon="pi pi-play-circle"
                        color="purple"
                        trend={{ value: 15.3, isPositive: true }}
                    />
                    <StatCard
                        title="Win Rate"
                        value="68.2%"
                        icon="pi pi-chart-line"
                        color="orange"
                        trend={{ value: 2.1, isPositive: true }}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Left Column - Games and History (2/3 width on xl screens) */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* <div className="h-auto">
                            <FavoriteGames />
                        </div> */}
                        
                        <div className="h-auto">
                            <GameHistory />
                        </div>
                    </div>

                    {/* Right Column - Live Feed and Quick Actions (1/3 width on xl screens) */}
                    <div className="xl:col-span-1 space-y-6">
                        <div className="h-auto">
                            <LiveFeed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}