import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';

function App() {
  // Загружаем сохраненную вкладку из памяти, если её нет — открываем 'home'
  const [view, setView] = useState(() => {
    return localStorage.getItem('currentView') || 'home';
  });
  
  const [user, setUser] = useState(null);

  // Следим за изменением вкладки и сохраняем её (чтобы работало при F5)
  useEffect(() => {
    localStorage.setItem('currentView', view);
  }, [view]);

  // Проверка сессии пользователя при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    setUser(null);
    setView('home');
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar setView={setView} user={user} onLogout={handleLogout} />
      
      <main style={{ flex: '1' }}>
        {view === 'home' && <Home />}
        {/* Передаем 'user' в каталог, чтобы проверить права на загрузку */}
        {view === 'catalog' && <Catalog user={user} />} 
        {view === 'auth' && <Auth setUser={setUser} setView={setView} />}
        {view === 'team' && <Team />}
        {view === 'profile' && <Profile user={user} onLogout={handleLogout} />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;