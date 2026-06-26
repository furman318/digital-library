import React, { useState } from 'react';

// Добавили прием пропсов из App.jsx
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
      // window.location.reload(); <-- УДАЛИЛИ ЭТО, чтобы не вылетало на главную

    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Сервер Сони (порт 3001) не отвечает' : err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '450px', margin: '50px auto' }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>
          {isLogin ? 'Авторизация' : 'Регистрация студента'}
        </h2>

        {error && (
          <div style={{ background: '#dc3545', color: '#fff', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '14px' }}>ФИО</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '10px' }} />
            </div>
          )}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px' }}>Почта</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px' }}>Пароль</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px' }} />
          </div>
          <button type="submit" disabled={isLoading} style={{ width: '100%', padding: '12px', background: '#0d6efd', color: '#fff', cursor: 'pointer' }}>
            {isLoading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span style={{ cursor: 'pointer', color: '#0d6efd', textDecoration: 'underline' }} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Создать аккаунт' : 'Войти в профиль'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Auth;