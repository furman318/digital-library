// client/src/pages/AddBook.jsx
import React, { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Роман');
  const [coverColor, setCoverColor] = useState('#1d2a44');
  const [emoji, setEmoji] = useState('📚');
  const [desc, setDesc] = useState('');

  const genresList = ['Роман', 'Фантастика', 'Драма'];
  
  // Палитра красивых глубоких цветов для обложек на выбор
  const colorPalette = ['#1d2a44', '#1a050d', '#E73A98', '#4a5568', '#7c4c60', '#b83b5e', '#2f4f4f', '#2b2e4a', '#6a0572'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Собираем объект новой книги
    const newBook = {
      id: Date.now(), // Временный ID для фронтенда
      title,
      author,
      genre,
      coverColor,
      emoji,
      desc,
      reviews: [] // Изначально отзывов нет
    };

    console.log('Новая книга готова к отправке:', newBook);
    
    alert(`🎉 Книга «${title}» успешно создана! (Сохранение на бэкенд и обновление каталога будет настроено на этапе интеграции с базой данных).`);

    // Очищаем форму
    setTitle('');
    setAuthor('');
    setGenre('Роман');
    setCoverColor('#1d2a44');
    setEmoji('📚');
    setDesc('');
  };

  return (
    <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', padding: '50px 40px' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: '800' }}>Добавить новую книгу</h2>
      <p style={{ color: 'var(--text-light)', fontSize: '15px', marginBottom: '40px', fontWeight: '500' }}>
        Заполните форму ниже, чтобы карточка книги появилась в общей библиотеке каталога.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'start' }}>
        
        {/* Интерактивное превью обложки слева */}
        <div style={{ position: 'sticky', top: '40px' }}>
          <h3 style={sectionTitleStyle}>Превью обложки</h3>
          <div style={{ 
            height: '320px', 
            backgroundColor: coverColor, 
            borderRadius: '20px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '80px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease',
            padding: '20px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div>{emoji || '📚'}</div>
            <div style={{ fontSize: '16px', fontWeight: '700', marginTop: '20px', opacity: 0.9 }}>
              {title || 'Название книги'}
            </div>
            <div style={{ fontSize: '13px', marginTop: '6px', opacity: 0.7, fontStyle: 'italic' }}>
              {author || 'Автор'}
            </div>
          </div>
        </div>

        {/* Форма добавления справа */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--white)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Название книги</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Например: Сто лет одиночества" required style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Автор</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Укажите автора книги" required style={inputStyle} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>Жанр</label>
              <select value={genre} onChange={(e) => setGenre(e.target.value)} style={inputStyle}>
                {genresList.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>Иконка (Эмодзи)</label>
              <input type="text" value={emoji} onChange={(e) => setEmoji(e.target.value)} placeholder="Например: ⏳ или 🪐" maxLength="2" style={inputStyle} />
            </div>
          </div>

          {/* Выбор цвета обложки */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={labelStyle}>Цвет обложки</label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {colorPalette.map(color => (
                <div 
                  key={color} 
                  onClick={() => setCoverColor(color)}
                  style={{ 
                    width: '34px', 
                    height: '34px', 
                    borderRadius: '50%', 
                    backgroundColor: color, 
                    cursor: 'pointer', 
                    border: coverColor === color ? '3px solid var(--pink)' : '2px solid transparent',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    transform: coverColor === color ? 'scale(1.1)' : 'none',
                    transition: 'all 0.2s'
                  }} 
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Глубокое описание книги</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Напишите сильное, цепляющее описание сути книги..." required style={{ ...inputStyle, height: '120px', resize: 'none' }}></textarea>
          </div>

          <button type="submit" style={buttonStyle}>
            ✨ Добавить книгу в библиотеку
          </button>
        </form>

      </div>
    </div>
  );
}

const sectionTitleStyle = { fontSize: '13px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontWeight: '700' };
const labelStyle = { fontSize: '13px', fontWeight: '700', color: 'var(--text)' };
const inputStyle = { padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', fontFamily: 'inherit', outline: 'none', background: '#fdfbfe', color: 'var(--text)', transition: 'border-color 0.2s' };
const buttonStyle = { width: '100%', padding: '14px', background: 'var(--pink)', color: 'var(--white)', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', marginTop: '10px', boxShadow: '0 4px 15px rgba(231, 58, 152, 0.25)', transition: 'all 0.2s' };

export default AddBook;