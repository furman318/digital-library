import React from 'react';

function Home() {
  const sampleBooks = [
    { id: 1, title: 'Приключения Тома Сойера', author: 'Марк Твен' },
    { id: 2, title: 'Преступление и наказание', author: 'Фёдор Достоевский' },
    { id: 3, title: 'Мастер и Маргарита', author: 'Михаил Булгаков' }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', background: '#e9ecef', padding: '60px 20px', borderRadius: '8px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px' }}>Добро пожаловать в Онлайн-Библиотеку</h1>
        <p style={{ fontSize: '18px', color: '#495057', marginBottom: '25px' }}>Читайте, загружайте книги и делитесь отзывами</p>
        <input 
          type="text" 
          placeholder="Поиск книг по названию или автору..." 
          style={{ width: '80%', maxWidth: '500px', padding: '12px', borderRadius: '25px', border: '1px solid #ced4da', fontSize: '16px', outline: 'none' }}
        />
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', textAlign: 'center' }}>
          <h3>Каталог</h3>
          <p style={{ color: '#6c757d', marginTop: '10px' }}>Сотни книг в открытом доступе для студентов.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', textAlign: 'center' }}>
          <h3>Загрузка</h3>
          <p style={{ color: '#6c757d', marginTop: '10px' }}>Делитесь своими материалами в форматах PDF и DOCX.</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', textAlign: 'center' }}>
          <h3>Рецензии</h3>
          <p style={{ color: '#6c757d', marginTop: '10px' }}>Оставляйте отзывы и оценивайте публикации других.</p>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '20px' }}>Рекомендуемые произведения</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {sampleBooks.map(book => (
            <div 
              key={book.id} 
              className="book-card"
              style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6', transition: 'all 0.3s ease', cursor: 'pointer' }}
            >
              <div style={{ width: '100%', height: '180px', background: '#adb5bd', borderRadius: '4px', marginBottom: '15px' }}></div>
              <h3>{book.title}</h3>
              <p style={{ color: '#6c757d' }}>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .book-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          border-color: #0d6efd !important;
        }
      `}</style>
    </div>
  );
}

export default Home;