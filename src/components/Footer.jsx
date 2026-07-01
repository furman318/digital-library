import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonSize = 56; 
  const footerPaddingBottom = 32;

  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--white)',
      borderTop: '2px solid var(--pink-light)',
      padding: `48px 20px ${footerPaddingBottom}px 20px`, 
      marginTop: 'auto', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      fontFamily: 'inherit',
      position: 'relative' 
    }}>
      {/* Блок контактов (телефон и почта) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center', 
        gap: '24px', 
        fontSize: '16px',
        color: 'var(--text)'
      }}>
        {/* Телефон */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px' 
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
          <span>Телефон:</span> 
          <a href="tel:+79215984922" style={{ 
            color: 'var(--pink)', 
            textDecoration: 'none', 
            fontWeight: '800',
            letterSpacing: '-0.2px'
          }}>
            +7 (921) 598-49-22
          </a>
        </div>

        {/* Почта */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px' 
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
            ✉️
          </span>
          <span>Почта:</span> 
          <a href="mailto:furmansss123@gmail.com" style={{ 
            color: 'var(--pink)', 
            textDecoration: 'none', 
            fontWeight: '800',
            letterSpacing: '-0.2px'
          }}>
            furmansss123@gmail.com
          </a>
        </div>
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

      {/* Кнопка "Наверх" в правом углу с более жирной стрелкой (Каретка ▲ вместо обычной ↑) */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          right: '24px',
          bottom: `${footerPaddingBottom}px`, 
          background: 'var(--pink-light)',
          color: 'var(--pink)',
          border: 'none',
          width: `${buttonSize}px`, 
          height: `${buttonSize}px`, 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '32px', 
          fontWeight: '900', 
          lineHeight: '1',
          transition: 'all 0.3s ease', 
          outline: 'none',
          boxShadow: '0 4px 10px rgba(var(--pink-rgb), 0.3)' 
        }}
        aria-label="Наверх"
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(-3px)'; 
          e.currentTarget.style.boxShadow = '0 6px 15px rgba(var(--pink-rgb), 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(var(--pink-rgb), 0.3)';
        }}
      >
        ▲
      </button>
    </footer>
  );
}

export default Footer;