import React, { useState } from 'react';

function Auth({ setUser, setView }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTabToggle = (loginState) => {
    setIsLogin(loginState);
    setEmail('');
    setPassword('');
    setFullName('');
    setError(null);
  };

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

      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      if (isLogin) {
        setUser(data.user, true);
        setView('profile');
      } else {
        setUser(data.user, false);
        setView('home');
      }
    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Сервер (порт 3001) не отвечает' : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    color: 'var(--text)',
    background: 'rgba(255,255,255,0.7)',
    transition: 'border 0.2s, box-shadow 0.2s',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text)',
  };

  return (
    <>
      <style>
        {`
          .auth-sunrise {
            background: #ffe4e9; /* статичный нежно-розовый */
            height: calc(100vh - 90px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 20px 20px;
            box-sizing: border-box;
            overflow-y: auto;
          }
          .auth-glass-card {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
            padding: 28px 32px;
            width: 100%;
            max-width: 440px;
            transition: all 0.3s ease;
          }
          @media (max-width: 500px) {
            .auth-glass-card {
              padding: 20px 16px;
              border-radius: 20px;
            }
          }
        `}
      </style>

      <div className="auth-sunrise">
        <div className="auth-glass-card">
          {/* Переключатель вкладок */}
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <button
              onClick={() => handleTabToggle(true)}
              style={{
                flex: 1,
                padding: '10px',
                background: isLogin ? 'var(--pink)' : 'transparent',
                color: isLogin ? 'var(--white)' : 'var(--text-light)',
                border: 'none',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                borderRadius: isLogin ? '12px 0 0 12px' : '0',
              }}
            >
              Войти
            </button>
            <button
              onClick={() => handleTabToggle(false)}
              style={{
                flex: 1,
                padding: '10px',
                background: !isLogin ? 'var(--pink)' : 'transparent',
                color: !isLogin ? 'var(--white)' : 'var(--text-light)',
                border: 'none',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                borderRadius: !isLogin ? '0 12px 12px 0' : '0',
              }}
            >
              Регистрация
            </button>
          </div>

          <h2
            style={{
              textAlign: 'center',
              marginBottom: '20px',
              color: 'var(--text)',
              fontSize: '22px',
              fontWeight: '800',
              letterSpacing: '-0.3px',
            }}
          >
            {isLogin ? 'Авторизация' : 'Регистрация'}
          </h2>

          {error && (
            <div
              style={{
                background: 'rgba(255, 230, 235, 0.8)',
                color: 'var(--pink)',
                padding: '10px',
                borderRadius: '10px',
                marginBottom: '14px',
                fontSize: '13px',
                fontWeight: '700',
                textAlign: 'center',
                border: '1px solid rgba(231, 58, 152, 0.15)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {!isLogin && (
              <div>
                <label style={labelStyle}>ФИО</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={inputStyle}
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>
            )}
            <div>
              <label style={labelStyle}>Электронная почта</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="username@spbgasu.ru"
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="Укажите пароль"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px',
                background: 'var(--pink)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '15px',
                marginTop: '6px',
                fontFamily: 'inherit',
                boxShadow: '0 6px 20px rgba(231, 58, 152, 0.25)',
                transition: 'transform 0.15s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(231, 58, 152, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(231, 58, 152, 0.25)';
              }}
            >
              {isLoading ? 'Загрузка...' : isLogin ? 'Войти в аккаунт' : 'Зарегистрироваться'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '13px' }}>
            <span style={{ color: 'var(--text-light)' }}>
              {isLogin ? 'Нет аккаунта? ' : 'Уже зарегистрированы? '}
            </span>
            <span
              style={{
                color: 'var(--pink)',
                cursor: 'pointer',
                fontWeight: '600',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
              onClick={() => handleTabToggle(!isLogin)}
            >
              {isLogin ? 'Создать аккаунт' : 'Войти'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;