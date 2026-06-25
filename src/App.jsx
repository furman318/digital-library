import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

function App() {
  // Переключатель страниц: 'home', 'team', 'auth', 'profile'
  const [view, setView] = useState('home');

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Наша шапка */}
      <Navbar />
      
      {/* Временные кнопочки для ТЕБЯ, чтобы переключать и проверять визуал страниц */}
      <div style={{ background: '#e9ecef', padding: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button onClick={() => setView('home')} style={{ padding: '5px 10px', cursor: 'pointer' }}>1. Главная и Каталог</button>
        <button onClick={() => setView('auth')} style={{ padding: '5px 10px', cursor: 'pointer' }}>2. Вход / Регистрация</button>
        <button onClick={() => setView('team')} style={{ padding: '5px 10px', cursor: 'pointer' }}>3. Наша Команда</button>
        <button onClick={() => setView('profile')} style={{ padding: '5px 10px', cursor: 'pointer' }}>4. Личный кабинет</button>
      </div>

      {/* Основной контент, который меняется по нажатию на кнопки сверху */}
      <main style={{ flex: '1' }}>
        {view === 'home' && <Home />}
        {view === 'auth' && <Auth />}
        {view === 'team' && <Team />}
        {view === 'profile' && <Profile />}
      </main>
      
      {/* Наш подвал */}
      <Footer />
    </div>
  );
}

export default App;