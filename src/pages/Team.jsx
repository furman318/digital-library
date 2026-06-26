import React from 'react';

// ИМПОРТИРУЕМ КАРТИНКИ ИЗ ПАПКИ ASSETS
import photoSofiya from '../assets/Sofiya.jpg';
import photoKristina from '../assets/Kristina.jpg';
import photoSimeon from '../assets/Simeon.jpg';

function Team() {
  const teamMakers = [
    { 
      id: 1, 
      role: 'Backend Developer', 
      name: 'Фураман Софья', 
      desc: 'Настройка сервера Node.js, маршрутизация Express, работа с базой данных JSON и загрузка файлов через Multer.',
      image: photoSofiya
    },
    { 
      id: 2, 
      role: 'UI/UX Designer / Верстальщик', 
      name: 'Хлебникова Кристина', 
      desc: 'Создание структуры проекта, адаптивная верстка на CSS Grid и Flexbox, визуальный дизайн страниц, эффекты анимации при наведении.',
      image: photoKristina
    },
    { 
      id: 3, 
      role: 'Frontend State & Integration', 
      name: 'Зенков Симеон', 
      desc: 'Клиентский роутинг, интеграция с API через fetch(), обработка состояний загрузки/ошибок и сохранение сессии в localStorage.',
      image: photoSimeon
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '60px 40px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', color: 'var(--text)' }}>
        Наша Команда Разработчиков
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {teamMakers.map(member => (
          <div key={member.id} style={{
            background: 'var(--white)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '130px', 
              height: '130px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--pink-light)', 
              marginBottom: '24px',
              border: '2px solid var(--border)',
              backgroundImage: `url(${member.image})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat'
            }}>
            </div>

            <h4 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text)', margin: '0 0 4px 0' }}>
              {member.name}
            </h4>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--pink)', marginBottom: '16px' }}>
              {member.role}
            </span>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.5' }}>
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;