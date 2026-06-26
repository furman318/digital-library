import React from 'react';
import logo from '../assets/logo.jpg';

function Navbar({ setView, user, onLogout }) {
  const links = [
    { label: 'Главная', page: 'home' },
    { label: 'Каталог', page: 'catalog' }, 
    { label: 'Команда', page: 'team' },
    { label: 'Личный кабинет', page: 'profile' },
  ];

  return (
    <nav style={{
      width: '100%',
      backgroundColor: 'var(--white)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      height: '120px',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
        <img src={logo} alt="Логотип" style={{ height: '90px', objectFit: 'contain' }} />
        <span style={{ 
          color: 'var(--text)', 
          fontSize: '28px', 
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '900', 
          letterSpacing: '-0.5px',
          textTransform: 'lowercase',
          lineHeight: '1'
        }}>
          цифровая библиотека
        </span>
      </div>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '6px', alignItems: 'center', margin: 0, padding: 0 }}>
        {links.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => setView && setView(link.page)}
              style={navLinkButtonStyle}
              onMouseOver={(e) => { e.target.style.background = 'var(--pink-light)'; e.target.style.color = 'var(--pink)'; }}
              onMouseOut={(e) => { e.target.style.background = 'none'; e.target.style.color = 'var(--text)'; }}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          {user ? (
            <button 
              onClick={onLogout} 
              style={{ ...navAuthButtonStyle, background: 'var(--pink-light)', color: 'var(--pink)' }}
              onMouseOver={(e) => { e.target.style.opacity = '0.9'; e.target.style.transform = 'translateY(-1px)'; }} 
              onMouseOut={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'none'; }}
            >
              Выход ({user.fullName.split(' ')[0]})
            </button>
          ) : (
            <button 
              onClick={() => setView && setView('auth')} 
              style={navAuthButtonStyle} 
              onMouseOver={(e) => { e.target.style.opacity = '0.9'; e.target.style.transform = 'translateY(-1px)'; }} 
              onMouseOut={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'none'; }}
            >
              Войти
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

const navLinkButtonStyle = { background: 'none', border: 'none', color: 'var(--text)', fontFamily: "'Montserrat', sans-serif", cursor: 'pointer', padding: '10px 16px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', transition: 'all 0.2s', whiteSpace: 'nowrap' };
const navAuthButtonStyle = { background: 'var(--pink)', border: 'none', color: 'var(--white)', fontFamily: "'Montserrat', sans-serif", cursor: 'pointer', padding: '12px 26px', borderRadius: '8px', fontSize: '15px', fontWeight: '700', marginLeft: '12px', transition: 'all 0.2s' };

export default Navbar;