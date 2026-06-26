import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Team from './pages/Team';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

function App() {
  const [view, setView] = useState('home');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar onNavigate={setView} />
      
      <main style={{ flex: '1', width: '100%' }}>
        {view === 'home' && <Home onNavigate={setView} />}
        {view === 'catalog' && <Catalog onNavigate={setView} />} 
        {view === 'auth' && <Auth />}
        {view === 'team' && <Team />}
        {view === 'profile' && <Profile />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;