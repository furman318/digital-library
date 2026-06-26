import React, { useState } from 'react';

function Catalog() {
  // Наш обновленный список 10 книг со всеми глубокими описаниями
  const [booksList, setBooksList] = useState([
    { 
      id: 1, 
      title: 'Портрет Дориана Грея', 
      author: 'Оскар Уайльд', 
      genre: 'Роман', 
      coverColor: '#1d2a44', 
      emoji: '🖼️',
      desc: 'Продать душу за вечную молодость — это не сделка с дьяволом, а сделка с собственным отражением, где каждая минута, прожитая ради удовольствия, оставляет свой след не на лице, а на холсте. Расплата наступает не в аду, а в тот миг, когда ты перестаёшь узнавать себя в зеркале, но узнаёшь на портрете — и понимаешь, что настоящая цена была не в потерянной душе, а в потерянной способности её почувствовать.',
      reviews: [
        { user: 'Алексей', rating: 5, text: 'Потрясающий слог Уайльда, афоризм на афоризме!' }
      ]
    },
    { 
      id: 2, 
      title: '1984', 
      author: 'Джордж Оруэлл', 
      genre: 'Фантастика', 
      coverColor: '#1a050d', 
      emoji: '👁️',
      desc: 'В мире, где любовь объявлена преступлением, а одиночество — нормой, человек решается на бунт не против государства, а против собственного страха, и платит за это самым страшным наказанием — не смертью, а переписыванием собственного «я» до полного исчезновения, и только одно воспоминание о женщине, которую он любил, остаётся последним островком правды.',
      reviews: [{ user: 'Дмитрий', rating: 5, text: 'Книга на все времена. Финал разбивает сердце.' }]
    },
    { 
      id: 3, 
      title: 'Мастер и Маргарита', 
      author: 'Михаил Булгаков', 
      genre: 'Фантастика', 
      coverColor: '#E73A98', 
      emoji: '✨',
      desc: 'Самый страшный грех — не предательство и не убийство, а трусость, и только тот, кто не боится взглянуть в глаза дьяволу, обретает право на истину и покой. Любовь, которая сильнее страха, и рукописи, которые не горят, остаются вечностью, где даже Понтий Пилат наконец сбрасывает свои цепи, а Мастер обретает заслуженный свет.',
      reviews: [{ user: 'Светлана', rating: 5, text: 'Бал у Сатаны — моя любимая часть!' }]
    },
    { 
      id: 4, 
      title: 'Один день Ивана Денисовича', 
      author: 'Александр Солженицын', 
      genre: 'Драма', 
      coverColor: '#4a5568', 
      emoji: '❄️',
      desc: 'Один день лагеря вмещает в себя целую жизнь: холод, голод, унижение и крошечные радости, которые становятся огромными победами. Иван Денисович доказывает, что человек остаётся человеком не потому, что у него есть выбор, а потому, что он выбирает сохранять достоинство даже тогда, когда выбора не осталось вовсе.',
      reviews: [{ user: 'Николай', rating: 5, text: 'Очень сильная и честная повесть.' }]
    },
    { 
      id: 5, 
      title: '451 градус по Фаренгейту', 
      author: 'Рэй Брэдбери', 
      genre: 'Фантастика', 
      coverColor: '#7c4c60', 
      emoji: '🔥',
      desc: 'Пожарные в этом мире сжигают не книги, а саму способность мыслить и чувствовать иначе. Общество выбирает развлечения вместо знаний и покой вместо свободы, и только тот, кто решается бежать, понимает: спасти надо не книги, а их смысл, запомнив и передав дальше.',
      reviews: [{ user: 'Елена', rating: 4, text: 'Актуально как никогда.' }]
    },
    { 
      id: 6, 
      title: 'Гранатовый браслет', 
      author: 'Александр Куприн', 
      genre: 'Роман', 
      coverColor: '#b83b5e', 
      emoji: '📿',
      desc: 'История о той самой любви, о которой мечтает каждая женщина и на которую не способен ни один мужчина, — о любви, которую не заметили, пока она не ушла навсегда.',
      reviews: [{ user: 'Ольга', rating: 5, text: 'Грустная, но невероятно поэтичная история.' }]
    },
    { 
      id: 7, 
      title: 'Охота на овец', 
      author: 'Харуки Мураками', 
      genre: 'Фантастика', 
      coverColor: '#2f4f4f', 
      emoji: '🐑',
      desc: 'История о том, как в мире, где всё продаётся и покупается, охота на таинственную овцу оборачивается поиском собственной души, которую ты давно потерял среди чужих идеалов и обещаний.',
      reviews: [{ user: 'Артем', rating: 4, text: 'Типичный шикарный Мураками. Мистика и одиночество.' }]
    },
    { 
      id: 8, 
      title: 'Побег из Шоушенка', 
      author: 'Стивен Кинг', 
      genre: 'Драма', 
      coverColor: '#2b2e4a', 
      emoji: '🔨',
      desc: 'Свобода не измеряется количеством пробитых стен, а умением сохранить надежду в мире, где её систематически убивают, — и когда два человека делят эту надежду на двоих, они становятся непобедимы даже для самой жестокой системы, которая не знает, что срок не имеет значения, если у тебя есть цель.',
      reviews: [{ user: 'Павел', rating: 5, text: 'Гимн силе человеческого духа!' }]
    },
    { 
      id: 9, 
      title: 'Искупление', 
      author: 'Иэн Макьюэн', 
      genre: 'Роман', 
      coverColor: '#6a0572', 
      emoji: '✍️',
      desc: 'Одно необдуманное слово, сказанное ребёнком, становится ложью, навсегда разлучающей двоих, и эхом отзывается в судьбах всех, кто её пережил. Искупление — не прощение, а горькое осознание, что слова имеют вес, и единственное, что остаётся, — запечатлеть правду в искусстве, хотя исправить уже ничего нельзя.',
      reviews: [{ user: 'Анна', rating: 5, text: 'Сложная, глубокая драма о непоправимых ошибках.' }]
    },
    { 
      id: 10, 
      title: 'Дневник памяти', 
      author: 'Николас Спаркс', 
      genre: 'Роман', 
      coverColor: '#ff75a0', 
      emoji: '📔',
      desc: 'История о любви, которая не терпит компромиссов и заставляет наконец услышать собственное сердце сквозь чужие голоса. Она всю жизнь отвечала на вопрос «чего ты хочешь?» чужими ответами — и только встреча с ним стала тем выбором, где она впервые решила быть собой.',
      reviews: [{ user: 'Кристина', rating: 5, text: 'Плакала всю вторую половину книги.' }]
    }
  ]);

  const genres = ['Все жанры', 'Роман', 'Фантастика', 'Драма'];
  
  const authorsData = [
    { name: 'Оскар Уайльд', url: 'https://ru.wikipedia.org/wiki/Уайльд,_Оскар', avatar: '🎩' },
    { name: 'Джордж Оруэлл', url: 'https://ru.wikipedia.org/wiki/Джордж_Оруэлл', avatar: '👨‍💼' },
    { name: 'Михаил Булгаков', url: 'https://ru.wikipedia.org/wiki/Булгаков,_Михаил_Афанасьевич', avatar: '🕵️‍♂️' },
    { name: 'Александр Солженицын', url: 'https://ru.wikipedia.org/wiki/Солженицын,_Александр_Исаевич', avatar: '🧔' },
    { name: 'Рэй Брэдбери', url: 'https://ru.wikipedia.org/wiki/Брэдбери,_Рэй', avatar: '👓' },
    { name: 'Александр Куприн', url: 'https://ru.wikipedia.org/wiki/Куприн,_Александр_Иванович', avatar: '👨' },
    { name: 'Харуки Мураками', url: 'https://ru.wikipedia.org/wiki/Мураками,_Харуки', avatar: '🧢' },
    { name: 'Стивен Кинг', url: 'https://ru.wikipedia.org/wiki/Кинг,_Стивен', avatar: '🧙‍♂️' },
    { name: 'Иэн Макьюэн', url: 'https://ru.wikipedia.org/wiki/Макьюэн,_Иэн', avatar: '👨‍🦳' },
    { name: 'Николас Спаркс', url: 'https://ru.wikipedia.org/wiki/Спаркс,_Николас', avatar: '👔' }
  ];

  const [selectedGenre, setSelectedGenre] = useState('Все жанры');
  const [selectedBook, setSelectedBook] = useState(null);

  const [isAddingOpen, setIsAddingOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newGenre, setNewGenre] = useState('Роман');
  const [newDesc, setNewDesc] = useState('');
  const [newEmoji, setNewEmoji] = useState('📖');

  const [modalUserName, setModalUserName] = useState('');
  const [modalReviewText, setModalReviewText] = useState('');
  const [modalRating, setModalRating] = useState(5);
  const [modalHoverRating, setModalHoverRating] = useState(0);

  const filteredBooks = selectedGenre === 'Все жанры' 
    ? booksList 
    : booksList.filter(book => book.genre.toLowerCase() === selectedGenre.toLowerCase());

  const handleDownload = (title) => {
    alert(`📥 Запрос на скачивание книги «${title}» в формате PDF отправлен на сервер!`);
  };

  const handleAddModalReview = (e) => {
    e.preventDefault();
    if (!modalUserName || !modalReviewText) return;

    const newReview = { user: modalUserName, rating: modalRating, text: modalReviewText };

    const updatedBooksList = booksList.map(book => {
      if (book.id === selectedBook.id) {
        return { ...book, reviews: [newReview, ...(book.reviews || [])] };
      }
      return book;
    });

    setBooksList(updatedBooksList);
    setSelectedBook({ ...selectedBook, reviews: [newReview, ...(selectedBook.reviews || [])] });

    setModalUserName('');
    setModalReviewText('');
    setModalRating(5);
    alert('Ваша рецензия успешно добавлена к этой книге!');
  };

  const handleCreateBook = (e) => {
    e.preventDefault();
    if (!newTitle || !newAuthor || !newDesc) return;

    const colors = ['#e75480', '#2b2e4a', '#2f4f4f', '#6a0572', '#b83b5e', '#7c4c60'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const createdBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
      coverColor: randomColor,
      emoji: newEmoji || '📖',
      desc: newDesc,
      reviews: []
    };

    setBooksList([createdBook, ...booksList]);
    
    setNewTitle('');
    setNewAuthor('');
    setNewDesc('');
    setIsAddingOpen(false);
    alert('Книга успешно добавлена в каталог!');
  };

  return (
    <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '50px 40px' }}>
      
      {/* Кнопка добавления книги */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0 }}>Каталог книг</h2>
        <button onClick={() => setIsAddingOpen(!isAddingOpen)} style={{ 
          background: 'var(--text)', 
          color: 'var(--white)', 
          border: 'none', 
          borderRadius: '14px', 
          fontWeight: '700', 
          fontSize: '15px', 
          cursor: 'pointer', 
          fontFamily: 'inherit',
          padding: '16px 36px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
          transition: 'all 0.2s'
        }}>
          {isAddingOpen ? 'Отмена' : '➕ Добавить книгу'}
        </button>
      </div>

      {/* Форма добавления книги */}
      {isAddingOpen && (
        <div style={{ background: 'var(--white)', padding: '35px', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', marginBottom: '50px', maxWidth: '700px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--pink)', textAlign: 'center' }}>Создание новой книги</h3>
          <form onSubmit={handleCreateBook} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Название произведения</label>
              <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} style={inputStyle} placeholder="Например: Маленький принц" required />
            </div>
            <div>
              <label style={labelStyle}>Автор</label>
              <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} style={inputStyle} placeholder="Например: Антуан де Сент-Экзюпери" required />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Жанр</label>
                <select value={newGenre} onChange={(e) => setNewGenre(e.target.value)} style={inputStyle}>
                  <option value="Роман">Роман</option>
                  <option value="Фантастика">Фантастика</option>
                  <option value="Драма">Драма</option>
                </select>
              </div>
              <div style={{ width: '140px' }}>
                <label style={labelStyle}>Эмодзи (символ)</label>
                <input type="text" value={newEmoji} onChange={(e) => setNewEmoji(e.target.value)} style={{ ...inputStyle, textAlign: 'center', fontSize: '20px' }} maxLength="2" />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Глубокое описание</label>
              <textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} style={{ ...inputStyle, height: '90px', resize: 'none' }} placeholder="Поделитесь смыслом и описанием книги..." required></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Опубликовать книгу в каталоге</button>
          </form>
        </div>
      )}

      {/* Выбор жанра (Овальные кнопки увеличенного размера) */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={sectionTitleStyle}>Выбор жанра</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {genres.map(genre => (
            <button key={genre} onClick={() => setSelectedGenre(genre)} style={{ 
              padding: '14px 28px', 
              borderRadius: '30px', 
              border: 'none', 
              backgroundColor: selectedGenre === genre ? 'var(--pink)' : 'var(--white)', 
              color: selectedGenre === genre ? 'var(--white)' : 'var(--text)', 
              fontFamily: 'inherit', 
              fontWeight: '700', 
              fontSize: '15px', 
              cursor: 'pointer', 
              boxShadow: selectedGenre === genre ? '0 4px 16px rgba(231, 58, 152, 0.3)' : '0 2px 10px rgba(0,0,0,0.04)', 
              transition: 'all 0.2s' 
            }}>
              {genre === 'Роман' && '📜 '}{genre === 'Фантастика' && '🚀 '}{genre === 'Драма' && '🎭 '}{genre === 'Все жанры' && '📚 '}{genre}
            </button>
          ))}
        </div>
      </div>

      {/* Популярные авторы (Овальные кнопки увеличенного размера) */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={sectionTitleStyle}>Популярные авторы</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '20px', fontWeight: '500' }}>
          💡 Имена авторов оформлены в виде <span style={{ color: 'var(--pink)', fontWeight: '700' }}>активных ссылок</span>. Вы можете нажать на ФИО любого писателя, чтобы изучить его биографию на Википедии перед выбором книги.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {authorsData.map(author => (
            <div key={author.name} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              background: 'var(--white)', 
              padding: '12px 24px', 
              borderRadius: '50px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)', 
              border: '1px solid var(--border)' 
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--pink-light)', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{author.avatar}</div>
              <a href={author.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }} onMouseOver={(e) => e.target.style.color = 'var(--pink)'} onMouseOut={(e) => e.target.style.color = 'var(--text)'}>{author.name} ↗</a>
            </div>
          ))}
        </div>
      </div>

      {/* Сетка Книг */}
      <h3 style={sectionTitleStyle}>Доступные книги ({filteredBooks.length})</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', width: '100%' }}>
        {filteredBooks.map(book => (
          <div key={book.id} style={cardStyle}>
            <div style={{ height: '220px', backgroundColor: book.coverColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>{book.emoji}</div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--pink)', textTransform: 'uppercase' }}>{book.genre}</span>
              <h4 style={{ fontSize: '17px', margin: '6px 0 4px', color: 'var(--text)', fontWeight: '700', lineHeight: '1.3' }}>«{book.title}»</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '13px', marginBottom: '14px', fontWeight: '600' }}>{book.author}</p>
              <p style={{ color: 'var(--text)', fontSize: '13px', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1, fontStyle: 'italic', opacity: 0.9 }}>{book.desc}</p>
              <button onClick={() => setSelectedBook(book)} style={buttonStyle}>Читать книгу</button>
            </div>
          </div>
        ))}
      </div>

      {/* ВСПЛЫВАЮЩЕЕ ОКНО (МОДАЛКА) */}
      {selectedBook && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(58, 32, 64, 0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'var(--white)', width: '90%', maxWidth: '650px', borderRadius: '24px', padding: '35px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', position: 'relative', maxHeight: '85vh', overflowY: 'auto' }}>
            <button onClick={() => setSelectedBook(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-light)' }}>✕</button>

            {/* Шапка */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '100px', backgroundColor: selectedBook.coverColor, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>{selectedBook.emoji}</div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text)' }}>«{selectedBook.title}»</h3>
                <p style={{ color: 'var(--pink)', fontWeight: '700', fontSize: '14px' }}>{selectedBook.author}</p>
                <span style={{ fontSize: '12px', background: 'var(--pink-light)', padding: '4px 10px', borderRadius: '12px', display: 'inline-block', marginTop: '6px', fontWeight: '600' }}>{selectedBook.genre}</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text)', marginBottom: '20px', background: '#faf6f8', padding: '15px', borderRadius: '12px' }}>
              <strong>Описание:</strong> {selectedBook.desc}
            </p>

            <button onClick={() => handleDownload(selectedBook.title)} style={{ width: '100%', padding: '14px', background: 'var(--text)', color: 'var(--white)', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '25px' }}>
              📥 Скачать книгу в формате PDF
            </button>

            {/* Форма написания отзыва СО ЗВЕЗДАМИ в модалке книги */}
            <div style={{ background: '#fdf8fa', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '25px' }}>
              <h5 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: 'var(--text)' }}>✍️ Написать свою рецензию</h5>
              <form onSubmit={handleAddModalReview} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <input type="text" value={modalUserName} onChange={(e) => setModalUserName(e.target.value)} placeholder="Ваше имя" required 
                    style={{ flex: 1, minWidth: '200px', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '13px', outline: 'none' }} />
                  
                  {/* Звёздный рейтинг в модалке */}
                  <div style={{ display: 'flex', gap: '4px', fontSize: '22px', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={star}
                        onClick={() => setModalRating(star)}
                        onMouseEnter={() => setModalHoverRating(star)}
                        onMouseLeave={() => setModalHoverRating(0)}
                        style={{ color: star <= (modalHoverRating || modalRating) ? '#ffb100' : '#ecd5e3' }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <textarea value={modalReviewText} onChange={(e) => setModalReviewText(e.target.value)} placeholder="Текст вашей рецензии..." required 
                  style={{ width: '100%', height: '60px', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '13px', resize: 'none', outline: 'none' }}></textarea>
                <button type="submit" style={{ padding: '10px', background: 'var(--pink)', color: 'var(--white)', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                  Отправить рецензию
                </button>
              </form>
            </div>

            {/* Список рецензий */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '15px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>💬 Рецензии читателей ({selectedBook.reviews?.length || 0})</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedBook.reviews && selectedBook.reviews.map((rev, index) => (
                  <div key={index} style={{ background: 'var(--pink-light)', padding: '14px', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
                      <strong style={{ color: 'var(--text)' }}>{rev.user}</strong>
                      <span style={{ color: '#ffb100' }}>{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: '1.4' }}>{rev.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

const labelStyle = { display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' };
const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '14px', fontFamily: 'inherit', outline: 'none' };
const sectionTitleStyle = { fontSize: '14px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontWeight: '700' };
const cardStyle = { background: 'var(--white)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' };
const buttonStyle = { width: '100%', padding: '11px', background: 'var(--pink)', color: 'var(--white)', border: 'none', borderRadius: '10px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', marginTop: 'auto', fontFamily: 'inherit' };

export default Catalog;