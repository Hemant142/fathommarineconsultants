import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import WelcomeCard from './WelcomeCard';
import DummyCards from './DummyCards';
import MarineData from './MarineData';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Sidebar onLogout={handleLogout} />
      <div className="ml-64 h-screen overflow-y-auto bg-gradient-to-br  ">
        <main className="p-8 md:p-16 min-h-screen flex flex-col gap-8">
          <div className="sticky top-0 z-10">
            <WelcomeCard />
          </div>
          <DummyCards />
          <MarineData />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
