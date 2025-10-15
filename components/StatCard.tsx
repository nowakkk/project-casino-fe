'use client';

import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

interface StatCardProps {
    title: string;
    value: string;
    icon: string;
    color: 'green' | 'blue' | 'purple' | 'orange';
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

const colorClasses = {
    green: 'text-emerald-300 bg-gradient-to-br from-emerald-500/30 to-green-500/30 shadow-lg shadow-emerald-500/20',
    blue: 'text-blue-300 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 shadow-lg shadow-blue-500/20',
    purple: 'text-purple-300 bg-gradient-to-br from-purple-500/30 to-pink-500/30 shadow-lg shadow-purple-500/20',
    orange: 'text-orange-300 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 shadow-lg shadow-orange-500/20'
};

export default function StatCard({ title, value, icon, color, trend }: StatCardProps) {
    return (
        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl hover:shadow-2xl hover:border-slate-600/60 transition-all duration-300 h-full group">
            <div className="p-6">
                <div className="flex items-start justify-between h-full">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300`}>
                                <i className={`${icon} text-xl`}></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 m-0 mb-2">{title}</p>
                                <p className="text-2xl font-bold text-white m-0">{value}</p>
                            </div>
                        </div>
                        
                        {trend && (
                            <div className="flex items-center gap-2">
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                    trend.isPositive 
                                        ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30' 
                                        : 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30'
                                }`}>
                                    <i className={`pi ${trend.isPositive ? 'pi-arrow-up' : 'pi-arrow-down'} text-xs`}></i>
                                    <span>{trend.value}%</span>
                                </div>
                                <span className="text-xs text-slate-500">vs last month</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}