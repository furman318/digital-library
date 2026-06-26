import React from 'react';

function Profile({ user, onLogout }) {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '30px' }}>Личный кабинет студента</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
        {/* Левая колонка: Учётные данные */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>Учетные данные</h3>
          
          {/* Если пользователь есть — выводим данные, если нет — оставляем пусто (Пункт 4 плана) */}
          <p style={{ marginBottom: '8px' }}>
            <strong>ФИО:</strong> {user ? user.fullName : ''}
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>Почта:</strong> {user ? user.email : ''}
          </p>

          {/* Кнопка выхода отображается только если пользователь залогинен */}
          {user && (
            <button 
              onClick={onLogout}
              style={{ width: '100%', padding: '10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Выйти из аккаунта
            </button>
          )}
        </div>

        {/* Правая колонка (статичная, как в твоем дизайне) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            <h4 style={{ color: '#0d6efd', marginBottom: '10px' }}>🔔 Уведомления</h4>
            <div style={{ padding: '10px', background: '#e2f0fe', borderRadius: '4px', fontSize: '14px' }}>
              {user 
                ? `Добро пожаловать, ${user.fullName.split(' ')[1] || user.fullName}! Система готова к работе.` 
                : "Пожалуйста, войдите в систему, чтобы получать уведомления."}
            </div>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            <h4 style={{ marginBottom: '10px' }}>⭐ Избранные книги</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
              <li>Преступление и наказание — Ф. Достоевский</li>
            </ul>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            <h4 style={{ marginBottom: '10px' }}>✍️ Мои отзывы</h4>
            <div style={{ fontSize: '14px', borderLeft: '3px solid #ced4da', paddingLeft: '10px' }}>
              <p><em>«Отличная книга, перечитываю второй раз за время учебы!»</em></p>
              <small style={{ color: '#6c757d' }}>К книге: Приключения Тома Сойера</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;