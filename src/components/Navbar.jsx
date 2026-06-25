import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#343a40', color: '#fff', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Цифровая Библиотека</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li style={{ cursor: 'pointer' }}>Главная</li>
        <li style={{ cursor: 'pointer' }}>Каталог</li>
        <li style={{ cursor: 'pointer' }}>Добавить книгу</li>
        <li style={{ cursor: 'pointer' }}>Команда</li>
        <li style={{ cursor: 'pointer' }}>Личный кабинет</li>
      </ul>
    </nav>
  );
}

export default Navbar;