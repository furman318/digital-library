import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.jpg';

function Navbar({ setView, user, onLogout, notificationsCount = 0, onResetNotifications, notifications = [] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const links = [
    { label: 'Главная', page: 'home' },
    { label: 'О сайте', page: 'about' },
    { label: 'Каталог', page: 'catalog' }, 
    { label: 'Команда', page: 'team' },
  ];

  // Закрываем выпадающий список при клике вне компонента
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Личный кабинет — только если пользователь вошёл */}
        {user && (
          <li>
            <button
              onClick={() => setView('profile')}
              style={navLinkButtonStyle}
              onMouseOver={(e) => { e.target.style.background = 'var(--pink-light)'; e.target.style.color = 'var(--pink)'; }}
              onMouseOut={(e) => { e.target.style.background = 'none'; e.target.style.color = 'var(--text)'; }}
            >
              Личный кабинет
            </button>
          </li>
        )}

        {/* Колокольчик с выпадающим списком уведомлений и кнопкой-галочкой сброса */}
        {user && (
          <li style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '6px' }} ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ ...navLinkButtonStyle, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', background: isDropdownOpen ? 'var(--pink-light)' : 'none', color: isDropdownOpen ? 'var(--pink)' : 'var(--text)' }}
              onMouseOver={(e) => { e.target.style.background = 'var(--pink-light)'; e.target.style.color = 'var(--pink)'; }}
              onMouseOut={(e) => { if (!isDropdownOpen) { e.target.style.background = 'none'; e.target.style.color = 'var(--text)'; } }}
            >
              {/* Увеличенная векторная SVG-иконка колокольчика */}
              <svg 
                width="26" 
                height="26" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ display: 'block' }}
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>

              {notificationsCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '6px',
                  right: '4px',
                  background: 'var(--pink)',
                  color: 'var(--white)',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  padding: '2px 5px',
                  minWidth: '16px',
                  textAlign: 'center'
                }}>
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Выпадающий список уведомлений */}
            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: '60px',
                background: 'var(--white)',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                width: '320px',
                zIndex: 1000,
                padding: '20px',
                border: '1px solid var(--border)',
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: 'var(--text)' }}>Уведомления</h4>
                  
                  {/* Галочка (отметить как прочитанными) на одном уровне с текстом */}
                  {notifications.length > 0 && (
                    <button 
                      onClick={() => {
                        if (onResetNotifications) onResetNotifications();
                        setIsDropdownOpen(false);
                      }} 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer', 
                        fontSize: '12px', 
                        color: 'var(--pink)', 
                        fontWeight: '700', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px',
                        padding: 0,
                        fontFamily: 'inherit'
                      }}
                      title="Отметить все как прочитанные"
                    >
                      ✓ Отметить как прочитанные
                    </button>
                  )}
                </div>

                {notifications.length === 0 ? (
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-light)', textAlign: 'center', padding: '20px 0' }}>
                    Уведомлений пока нет
                  </p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {notifications.map((note, index) => (
                      <li key={index} style={{ 
                        fontSize: '12px', 
                        padding: '10px 12px', 
                        background: 'var(--pink-light)', 
                        borderRadius: '10px', 
                        color: 'var(--text)', 
                        lineHeight: '1.4' 
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                          <span style={{ flex: 1 }}>{note.text}</span>
                          <span style={{ fontSize: '10px', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>{note.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        )}

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