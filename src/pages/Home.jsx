import React, { useState } from 'react';

function Home({ onNavigate }) {
  // Актуальный список всех 10 доступных книг библиотеки
  const availableBooks = [
    'Портрет Дориана Грея',
    '1984',
    'Мастер и Маргарита',
    'Один день Ивана Денисовича',
    '451 градус по Фаренгейту',
    'Гранатовый браслет',
    'Охота на овец',
    'Побег из Шоушенка',
    'Искупление',
    'Дневник памяти'
  ];

  const [reviews, setReviews] = useState([
    { id: 1, name: 'Анна', bookTitle: 'Мастер и Маргарита', text: 'Потрясающая книга, перечитываю третий раз!', rating: 5 },
    { id: 2, name: 'Игорь', bookTitle: 'Портрет Дориана Грея', text: 'Поразительная глубина мысли об искусстве и морали.', rating: 4 }
  ]);
  
  const [reviewName, setReviewName] = useState('');
  const [reviewBook, setReviewBook] = useState('Портрет Дориана Грея');
  const [reviewText, setReviewText] = useState('');
  
  // Состояние для интерактивной оценки звездами (по умолчанию 5)
  const [reviewRating, setReviewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;
    
    const newReview = { 
      id: Date.now(), 
      name: reviewName, 
      bookTitle: reviewBook, 
      text: reviewText, 
      rating: reviewRating 
    };
    
    setReviews([newReview, ...reviews]);
    setReviewName('');
    setReviewText('');
    setReviewRating(5); // Сброс на 5 звезд
    alert('Спасибо! Ваш отзыв успешно опубликован на главной странице.');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackEmail || !feedbackMessage) return;
    setFeedbackStatus('Сообщение успешно отправлено! Мы свяжемся с вами.');
    setFeedbackEmail('');
    setFeedbackMessage('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Поиск по запросу: "${searchQuery}" (Интеграция бэкенда в процессе)`);
  };

  // Полный список возможностей с новыми значками и обновленным текстом
  const features = [
    { emoji: '🎯', title: 'Удобный поиск', desc: 'Быстрый доступ к любой книге из нашей коллекции по автору или названию.' },
    { emoji: '✒️', title: 'Подробные описания', desc: 'Аннотации, которые помогут понять суть произведения до начала чтения.' },
    { emoji: '⭐', title: 'Оценки и отзывы', desc: 'Возможность изучить впечатления других читателей и поделиться своими.' },
    { emoji: '📥', title: 'Скачивание книг', desc: 'Сохраняйте книги на свои устройства или добавляйте свои.' }
  ];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Banner */}
      <section style={{
        backgroundColor: 'var(--bg-pink-banner)',
        padding: '60px 40px 80px 40px', // Уменьшены отступы сверху и снизу
        textAlign: 'center',
        width: '100%',
        borderRadius: '0 0 40px 40px',
        boxShadow: '0 4px 20px rgba(231, 58, 152, 0.02)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '42px', 
            color: 'var(--text)', 
            marginBottom: '24px', 
            lineHeight: '1.4', 
            fontWeight: '900',
            letterSpacing: '-0.5px'
          }}>
            Здесь вы найдете книги,{' '}
            <span style={{ 
              color: 'var(--pink)', 
              fontWeight: '900',
              background: 'var(--pink-light)',
              padding: '2px 14px',
              borderRadius: '12px',
              display: 'inline-block',
              marginTop: '10px'
            }}>
              не теряющие смысла спустя годы и поколения,
            </span>
            это специальная подборка произведений для тех, кто ищет в литературе не развлечение, а самого себя
          </h1>
          
          <form onSubmit={handleSearchSubmit} style={{
            maxWidth: '600px',
            margin: '50px auto 0 auto',
            display: 'flex',
            background: 'var(--white)',
            borderRadius: '50px',
            padding: '8px 10px',
            boxShadow: '0 8px 30px rgba(231, 58, 152, 0.12)',
            border: '1px solid var(--border)'
          }}>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Введите название книги или автора..." 
              style={{ flex: 1, border: 'none', background: 'none', outline: 'none', padding: '0 24px', fontSize: '16px', fontFamily: 'inherit', color: 'var(--text)' }}
            />
            <button type="submit" style={{ background: 'var(--pink)', color: 'var(--white)', border: 'none', borderRadius: '30px', padding: '12px 32px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Найти
            </button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', width: '100%', padding: '60px 40px' }}>
        
        {/* Features (Возможности сайта) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', textAlign: 'center', marginBottom: '40px' }}>
            Возможности сайта
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.emoji}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.5', fontWeight: '500' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '60px 0' }} />

        {/* Reviews Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', marginBottom: '60px' }}>
          <div style={{ background: 'var(--white)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '700' }}>Оставить отзыв</h3>
            <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={labelStyle}>Ваше имя</label>
                <input type="text" value={reviewName} onChange={(e) => setReviewName(e.target.value)} style={inputStyle} placeholder="Иван Иванов" required />
              </div>
              <div>
                <label style={labelStyle}>Выберите доступную книгу</label>
                <select value={reviewBook} onChange={(e) => setReviewBook(e.target.value)} style={inputStyle}>
                  {availableBooks.map((title, index) => <option key={index} value={title}>«{title}»</option>)}
                </select>
              </div>
              
              {/* ВВОД ЗВЕЗД ОТ 1 ДО 5 */}
              <div>
                <label style={labelStyle}>Ваша оценка</label>
                <div style={{ display: 'flex', gap: '6px', fontSize: '26px', cursor: 'pointer', padding: '5px 0' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                      key={star}
                      onClick={() => setReviewRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{ 
                        color: star <= (hoverRating || reviewRating) ? '#ffb100' : '#ecd5e3',
                        transition: 'color 0.1s'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Ваш отзыв</label>
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} style={{ ...inputStyle, height: '100px', resize: 'none' }} placeholder="Поделитесь впечатлениями..." required></textarea>
              </div>
              <button type="submit" style={buttonStyle}>Опубликовать отзыв</button>
            </form>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '700' }}>Последние отзывы читателей</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '420px', overflowY: 'auto' }}>
              {reviews.map(r => (
                <div key={r.id} style={{ background: 'var(--white)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '15px' }}>{r.name}</strong>
                    <span style={{ color: '#ffb100' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--pink)', fontWeight: '700', marginBottom: '8px' }}>Книга: {r.bookTitle.startsWith('«') ? r.bookTitle : `«${r.bookTitle}»`}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.4' }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div style={{ backgroundColor: 'var(--pink-light)', padding: '40px', borderRadius: '20px', textAlign: 'center', border: '1px dashed var(--pink)' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '8px', fontWeight: '700' }}>Остались вопросы или предложения?</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '24px', fontWeight: '500' }}>
            Напишите администрации цифровой библиотеки, и мы ответим вам в течение дня.
          </p>
          <form onSubmit={handleFeedbackSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input type="email" value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} style={inputStyle} placeholder="Ваш Email для связи" required />
            <textarea value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} style={{ ...inputStyle, height: '80px', resize: 'none' }} placeholder="Текст вашего сообщения..." required></textarea>
            <button type="submit" style={{ ...buttonStyle, background: 'var(--text)', color: 'var(--white)' }}>Отправить сообщение</button>
          </form>
          {feedbackStatus ? (
            <p style={{ color: 'green', fontSize: '14px', marginTop: '15px', fontWeight: '600' }}>
              {feedbackStatus}
            </p>
          ) : null}
        </div>

      </div>
    </div>
  );
}

const labelStyle = { display: 'block', marginBottom: '4px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' };
const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px', fontFamily: 'inherit', outline: 'none' };
const buttonStyle = { width: '100%', padding: '11px', background: 'var(--pink)', color: 'var(--white)', border: 'none', borderRadius: '10px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' };

export default Home;