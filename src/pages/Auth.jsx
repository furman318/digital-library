import React, { useState } from 'react';

// Прием пропсов из App.jsx
function Auth({ setUser, setView }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true); 
    setError(null);     

    const userData = isLogin 
      ? { email, password } 
      : { fullName, email, password };

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const response = await fetch(`${API_URL}/api/auth/${isLogin ? 'login' : 'register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ошибка сервера');
      }

      // 1. Сохраняем в браузер (для F5)
      localStorage.setItem('userToken', data.token); 
      localStorage.setItem('userData', JSON.stringify(data.user));

      // 2. Обновляем состояние в App.jsx БЕЗ перезагрузки страницы
      setUser(data.user); 
      
      // 3. Переключаем экран на профиль
      setView('profile'); 

      alert(data.message);

    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Сервер (порт 3001) не отвечает' : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', 
    padding: '12px 14px',
    borderRadius: '12px', 
    border: '1px solid var(--border)', 
    fontSize: '14px', 
    outline: 'none',
    fontFamily: 'inherit',
    color: 'var(--text)'
  };

  const labelStyle = {
    display: 'block', 
    marginBottom: '6px', 
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
          {/* Переключатель вкладок Вход/Регистрация */}
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

          {/* Вывод ошибки сервера */}
          {error && (
            <div style={{ background: '#ffe6eb', color: 'var(--pink)', padding: '12px', borderRadius: '10px', marginBottom: '16px', fontSize: '13px', fontWeight: '700', textAlign: 'center', border: '1px solid rgba(231, 58, 152, 0.2)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {!isLogin && (
              <div>
                <label style={labelStyle}>ФИО</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} placeholder="Иванов Иван Иванович" required />
              </div>
            )}
            <div>
              <label style={labelStyle}>Электронная почта</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} placeholder="username@spbgasu.ru" required />
            </div>
            <div>
              <label style={labelStyle}>Пароль</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} placeholder="Укажите пароль" required />
            </div>

            <button type="submit" disabled={isLoading} style={{
              width: '100%', 
              padding: '13px',
              background: 'var(--pink)',
              color: 'var(--white)', 
              border: 'none', 
              borderRadius: '10px',
              cursor: 'pointer', 
              fontWeight: '700', 
              fontSize: '15px',
              marginTop: '8px', 
              fontFamily: 'inherit',
              boxShadow: '0 4px 12px rgba(231, 58, 152, 0.2)'
            }}>
              {isLoading ? 'Загрузка...' : (isLogin ? 'Войти в аккаунт' : 'Зарегистрироваться')}
            </button>
          </form>

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