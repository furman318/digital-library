import React from 'react';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--white)',
      borderTop: '2px solid var(--pink-light)', // Делаем границу чуть мягче и розовее
      padding: '48px 20px 32px 20px',
      marginTop: 'auto', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      fontFamily: 'inherit'
    }}>
      {/* Блок контактов */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        fontSize: '16px',
        color: 'var(--text)'
      }}>
        <span style={{ 
          background: 'var(--pink-light)', 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          📞
        </span>
        <span>Телефон для связи:</span> 
        <a href="tel:+79215984922" style={{ 
          color: 'var(--pink)', 
          textDecoration: 'none', 
          fontWeight: '800',
          letterSpacing: '-0.2px'
        }}>
          +7 (921) 598-49-22
        </a>
      </div>

      {/* Копирайт */}
      <div style={{ 
        color: 'var(--text-light)', 
        fontSize: '13px', 
        fontWeight: '500',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        opacity: 0.8
      }}>
        © Цифровая библиотека 2026
      </div>
    </footer>
  );
}

export default Footer;