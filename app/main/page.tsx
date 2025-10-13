"use client";

import { CasinoBackground } from "@/components/CasinoBackground";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function MainPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <CasinoBackground />

      <div className="relative z-10 p-4">
        <MainContent />
      </div>
    </div>
  );
}

const MainContent = () => (
  <div className="flex justify-center items-center min-h-[90vh] p-4">
    <div className="max-w-md w-full">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400/50 shadow-2xl backdrop-blur-sm">
        <div className="text-center p-8">
          <div className="text-6xl mb-6">🎰</div>

          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text mb-6">
            Witaj w Casino
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Przygotuj się na niezapomniane wrażenia w najlepszym
            kasynie online
          </p>

          <Button
            label="ALL IN"
            size="large"
            severity="danger"
            className="w-full bg-gradient-to-r from-red-700 to-red-600 border-0 hover:from-red-600 hover:to-red-500 text-white font-bold py-4 text-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300"
          />

          <div className="flex justify-center items-center gap-4 mt-6 text-yellow-400/60">
            <span>✨</span>
            <span className="text-xs">LICENCJONOWANE I BEZPIECZNE</span>
            <span>✨</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
);