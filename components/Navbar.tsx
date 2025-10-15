'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {
  username?: string;
  balance?: number;
  avatarUrl?: string;
}

export default function Navbar({ 
  username = "Player", 
  balance = 1250.50, 
  avatarUrl 
}: NavbarProps) {
  const router = useRouter();
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const userMenuItems = [
    {
      label: 'Account Settings',
      icon: 'pi pi-user',
      action: () => router.push('/account')
    },
    {
      label: 'Transaction History',
      icon: 'pi pi-history',
      action: () => {}
    },
    {
      label: 'Bonuses',
      icon: 'pi pi-gift',
      action: () => {}
    },
    {
      separator: true
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      action: () => {}
    }
  ];

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/60 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25">
              <i className="pi pi-diamond text-xl text-white"></i>
            </div>
            <span className="text-xl font-bold text-white">Royal Casino</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/dashboard">
              <div className="px-4 py-2 text-white hover:bg-gray-800/60 rounded-lg transition-all duration-300 cursor-pointer font-medium">
                <i className="pi pi-home mr-2"></i>
                Dashboard
              </div>
            </Link>
            <Link href="/games">
              <div className="px-4 py-2 text-white hover:bg-gray-800/60 rounded-lg transition-all duration-300 cursor-pointer font-medium">
                <i className="pi pi-play mr-2"></i>
                Games
              </div>
            </Link>
            <Link href="/tournaments">
              <div className="px-4 py-2 text-white hover:bg-gray-800/60 rounded-lg transition-all duration-300 cursor-pointer font-medium">
                <i className="pi pi-trophy mr-2"></i>
                Tournaments
              </div>
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            
            {/* Balance */}
            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600/90 to-green-600/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
              <i className="pi pi-wallet text-white"></i>
              <span className="text-white font-bold">${balance.toFixed(2)}</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="w-10 h-10 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-700/50">
                <i className="pi pi-bell text-gray-300 hover:text-white transition-colors"></i>
              </button>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={toggleUserMenu}
                className="flex items-center gap-3 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg p-2 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt={username} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <i className="pi pi-user text-white text-sm"></i>
                  )}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-white text-sm font-medium">{username}</div>
                  <div className="flex items-center gap-1">
                    <div className="px-2 py-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30 rounded text-xs font-medium">
                      VIP Gold
                    </div>
                  </div>
                </div>
                <i className={`pi pi-chevron-down text-gray-400 text-xs transition-transform duration-300 ${userMenuVisible ? 'rotate-180' : ''}`}></i>
              </button>

              {/* User Dropdown Menu */}
              {userMenuVisible && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800/95 backdrop-blur-sm border border-gray-700/60 rounded-xl shadow-2xl z-[100]">
                  <div className="p-2">
                    {userMenuItems.map((item, index) => (
                      item.separator ? (
                        <div key={index} className="border-t border-gray-700/40 my-2"></div>
                      ) : (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setUserMenuVisible(false);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-left"
                        >
                          <i className={`${item.icon} text-sm`}></i>
                          <span className="font-medium">{item.label}</span>
                        </button>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-10 h-10 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-700/50">
              <i className="pi pi-bars text-gray-300 hover:text-white transition-colors"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close menu */}
      {userMenuVisible && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setUserMenuVisible(false)}
        ></div>
      )}
    </nav>
  );
}