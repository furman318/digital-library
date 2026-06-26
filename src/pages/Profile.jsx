import React from 'react';

function PersonalArea({ user, onLogout, onNavigateToFavorites, onNavigateToReviews }) {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '40px', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
      
      <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>
        Личный кабинет
      </h2>

      {/* Блок с основной информацией и учетными данными (отцентрирован) */}
      <div style={{ marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--text)' }}>
          Персональные данные
        </h3>
        <div style={{ display: 'grid', gap: '16px', background: 'var(--pink-light)', padding: '24px', borderRadius: '12px', width: '100%', maxWidth: '550px', textAlign: 'center' }}>
          <div>
            <span style={labelStyle}>Фамилия, имя, отчество:</span>
            <div style={valueStyle}>{user?.fullName || 'Иванов Иван Иванович'}</div>
          </div>
          <div>
            <span style={labelStyle}>Электронная почта:</span>
            <div style={valueStyle}>{user?.email || 'user@spbgasu.ru'}</div>
          </div>
        </div>
      </div>

      {/* Разделы профиля (Избранное и Мои отзывы) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '50px' }}>
        <button 
          onClick={onNavigateToFavorites} 
          style={cardButtonStyle}
        >
          <span style={{ fontSize: '28px' }}>❤️</span>
          <span style={{ fontSize: '16px', fontWeight: '700' }}>Избранные книги</span>
        </button>

        <button 
          onClick={onNavigateToReviews} 
          style={cardButtonStyle}
        >
          <span style={{ fontSize: '28px' }}>📝</span>
          <span style={{ fontSize: '16px', fontWeight: '700' }}>Мои отзывы</span>
        </button>
      </div>

      {/* Кнопка выйти */}
      <button 
        onClick={onLogout} 
        style={{ width: '100%', padding: '16px', background: 'var(--text)', color: 'var(--white)', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', textAlign: 'center', transition: 'background 0.2s' }}
      >
        Выйти
      </button>

    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '12px', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' };
const valueStyle = { fontSize: '16px', fontWeight: '700', color: 'var(--text)' };
const cardButtonStyle = { background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: 'var(--shadow)', fontFamily: 'inherit', color: 'var(--text)', transition: 'transform 0.2s, box-shadow 0.2s' };

export default PersonalArea;