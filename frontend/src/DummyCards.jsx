import React from 'react';

const DummyCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
      <div className="text-3xl font-bold text-blue-700 mb-2">4</div>
      <div className="text-lg font-semibold text-slate-700">Total Ships</div>
      <div className="text-xs text-slate-400">(Mocked)</div>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
      <div className="text-3xl font-bold text-green-600 mb-2">3</div>
      <div className="text-lg font-semibold text-slate-700">Active Vessels</div>
      <div className="text-xs text-slate-400">(Mocked)</div>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
      <div className="text-3xl font-bold text-yellow-500 mb-2">12</div>
      <div className="text-lg font-semibold text-slate-700">Ports Visited</div>
      <div className="text-xs text-slate-400">(Mocked)</div>
    </div>
  </div>
);

export default DummyCards;
