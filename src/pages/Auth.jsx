import React, { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const inputStyle = {
    width: '100%', 
    padding: '10px 12px',
    borderRadius: '8px', 
    border: '1px solid var(--border)', 
    fontSize: '14px', 
    outline: 'none',
    fontFamily: 'inherit',
    color: 'var(--text)'
  };

  const labelStyle = {
    display: 'block', 
    marginBottom: '4px', 
    fontSize: '13px', 
    fontWeight: '600', 
    color: 'var(--text)'
  };

  return (
    <div style={{ padding: '60px 20px', width: '100%', background: 'var(--bg-pink-banner)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '460px', width: '100%', margin: '0 auto' }}>
        <div style={{
          background: 'var(--white)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}>
          {/* Переключатель */}
          <div style={{ display: 'flex', marginBottom: '28px', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid var(--border)' }}>
            <button onClick={() => setIsLogin(true)} style={{
              flex: 1, 
              padding: '11px',
              background: isLogin ? 'var(--pink)' : 'var(--white)',
              color: isLogin ? 'var(--white)' : 'var(--text-light)',
              border: 'none', 
              fontWeight: '600', 
              fontSize: '15px', 
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>Войти</button>
            <button onClick={() => setIsLogin(false)} style={{
              flex: 1, 
              padding: '11px',
              background: !isLogin ? 'var(--pink)' : 'var(--white)',
              color: !isLogin ? 'var(--white)' : 'var(--text-light)',
              border: 'none', 
              fontWeight: '600', 
              fontSize: '15px', 
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>Регистрация</button>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--text)', fontSize: '22px', fontWeight: '800' }}>
            {isLogin ? 'Авторизация' : 'Регистрация'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {!isLogin && (
              <div>
                <label style={labelStyle}>ФИО</label>
                <input type="text" style={inputStyle} placeholder="Иванов Иван Иванович" />
              </div>
            )}
            <div>
              <label style={labelStyle}>Электронная почта</label>
              <input type="email" style={inputStyle} placeholder="username@spbgasu.ru" />
            </div>
            <div>
              <label style={labelStyle}>Пароль</label>
              <input type="password" style={inputStyle} placeholder="Укажите пароль" />
            </div>

            <button style={{
              width: '100%', 
              padding: '12px',
              background: 'var(--pink)',
              color: 'var(--white)', 
              border: 'none', 
              borderRadius: '10px',
              cursor: 'pointer', 
              fontWeight: '700', 
              fontSize: '15px',
              marginTop: '8px', 
              fontFamily: 'inherit'
            }}>
              {isLogin ? 'Войти в аккаунт' : 'Зарегистрироваться'}
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
            <span style={{ color: 'var(--text-light)' }}>
              {isLogin ? 'Нет аккаунта? ' : 'Уже зарегистрированы? '}
            </span>
            <span style={{ color: 'var(--pink)', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
              onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Создать аккаунт' : 'Войти'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;