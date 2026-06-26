import React from 'react';

function Navbar({ setView, user, onLogout }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#343a40', color: '#fff', alignItems: 'center' }}>
      <div 
        style={{ fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }} 
        onClick={() => setView('home')}
      >
        Цифровая Библиотека
      </div>
      
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0, alignItems: 'center' }}>
         <li style={{ cursor: 'pointer' }} onClick={() => setView('home')}>Главная</li>
        <li style={{ cursor: 'pointer' }} onClick={() => setView('catalog')}>Каталог</li>
        <li style={{ cursor: 'pointer' }} onClick={() => setView('team')}>Команда</li>
        <li style={{ cursor: 'pointer' }} onClick={() => setView('profile')}>Личный кабинет</li>
        {user ? (
          <li 
            style={{ cursor: 'pointer', color: '#ffc107', border: '1px solid #ffc107', padding: '5px 10px', borderRadius: '4px' }} 
            onClick={onLogout}
          >
            Выход ({user.fullName.split(' ')[0]})
          </li>
        ) : (
          <li 
            style={{ cursor: 'pointer', color: '#ffc107', fontWeight: 'bold' }} 
            onClick={() => setView('auth')}
          >
            Вход
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;