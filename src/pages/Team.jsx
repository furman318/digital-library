import React from 'react';

function Team() {
  const teamMembers = [
    { 
      name: 'Фурман Софья', 
      role: 'Backend Developer', 
      contribution: 'Настройка сервера Node.js, маршрутизация Express, работа с базой данных JSON и загрузка файлов через Multer.' 
    },
    { 
      name: 'Хлебникова Кристина', 
      role: 'UI/UX Designer / Верстальщик', 
      contribution: 'Создание структуры проекта, адаптивная верстка на CSS Grid и Flexbox, визуальный дизайн страниц, эффекты анимации при наведении.' 
    },
    { 
      name: 'Зенков Симеон', 
      role: 'Frontend State & Integration', 
      contribution: 'Клиентский роутинг, интеграция с API через fetch(), обработка состояний загрузки/ошибок и сохранение сессии в localStorage.' 
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#212529' }}>Наша Команда Разработчиков</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="team-card"
            style={{ 
              background: '#fff', 
              padding: '25px', 
              borderRadius: '8px', 
              border: '1px solid #dee2e6', 
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ width: '70px', height: '70px', background: '#0d6efd', borderRadius: '50%', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '20px' }}>
              {member.name[0]}
            </div>
            <h3 style={{ color: '#0d6efd', marginBottom: '5px' }}>{member.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#6c757d', marginBottom: '15px', fontSize: '14px' }}>{member.role}</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#495057' }}>{member.contribution}</p>
          </div>
        ))}
      </div>

      <style>{`
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          border-color: #0d6efd !important;
        }
      `}</style>
    </div>
  );
}

export default Team;