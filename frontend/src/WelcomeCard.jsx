import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const WelcomeCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-50 rounded-2xl shadow-lg p-8 mb-8 flex items-center gap-4 animate-fade-in">
      <div className="text-4xl">👋</div>
      <div>
        <h2 className="text-2xl font-bold text-blue-800">Welcome, {user?.email || 'User'}!</h2>
        <p className="text-gray-600 mt-1">Here is your marine dashboard overview.</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
