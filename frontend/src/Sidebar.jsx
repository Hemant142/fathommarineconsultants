import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8 flex flex-col shadow-2xl rounded-none animate-fade-in sidebar z-20">
      <div className="text-3xl font-extrabold mb-10 tracking-wide text-center">🌊 Marine</div>
      <nav className="flex-1">
        <ul>
          <li className={location.pathname === '/dashboard' ? 'font-bold' : ''}>
            <Link to="/dashboard" className="block py-3 px-2 rounded-lg hover:bg-blue-700 transition text-lg">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <button onClick={onLogout} className="mt-10 bg-white text-blue-700 font-bold py-2 rounded-lg shadow hover:bg-blue-100 transition">Logout</button>
    </aside>
  );
};

export default Sidebar;
