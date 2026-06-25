import React, { useState } from 'react';

function Auth() {
  // Состояние для переключения между Входом и Регистрацией
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '450px', margin: '50px auto' }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        
        {/* Заголовок формы */}
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#212529' }}>
          {isLogin ? 'Авторизация' : 'Регистрация студента'}
        </h2>

        <form>
          {/* Дополнительное поле ФИО только для регистрации */}
          {!isLogin && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>ФИО</label>
              <input 
                type="text" 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none' }} 
                placeholder="Иванов Иван Иванович" 
              />
            </div>
          )}

          {/* Поле Email (есть везде) */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Электронная почта</label>
            <input 
              type="email" 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none' }} 
              placeholder="username@spbgasu.ru" 
            />
          </div>

          {/* Поле Пароль (есть везде) */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Пароль</label>
            <input 
              type="password" 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none' }} 
              placeholder="Укажите пароль" 
            />
          </div>

          {/* Кнопка отправки */}
          <button 
            type="button" 
            style={{ width: '100%', padding: '12px', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', transition: 'background 0.2s' }}
            onMouseOver={(e) => e.target.style.background = '#0b5ed7'}
            onMouseOut={(e) => e.target.style.background = '#0d6efd'}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        {/* Ссылка-переключатель между формами */}
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          <span style={{ color: '#6c757d' }}>
            {isLogin ? 'Еще нет аккаунта? ' : 'Уже зарегистрированы? '}
          </span>
          <span 
            style={{ color: '#0d6efd', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Создать аккаунт' : 'Войти в профиль'}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Auth;