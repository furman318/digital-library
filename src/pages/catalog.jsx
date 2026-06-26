import React, { useRef, useState, useEffect } from 'react';

function Catalog({ user }) { // Получаем данные о пользователе через пропсы
  const fileInputRef = useRef(null);
  
  // Инициализируем список книг из localStorage
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('myLibrary');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Сохраняем список книг в память всякий раз, когда он меняется
  useEffect(() => {
    localStorage.setItem('myLibrary', JSON.stringify(books));
  }, [books]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const response = await fetch(`${API_URL}/api/upload-raw`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileName: file.name, fileData: reader.result })
        });

        const data = await response.json();

        if (response.ok) {
          const newBook = {
            id: Date.now(),
            title: file.name.replace(/\.[^/.]+$/, ""), 
            serverPath: data.serverPath,
            author: user.fullName, // Теперь записываем реальное имя автора
            size: (file.size / 1024 / 1024).toFixed(2) + " МБ",
            date: new Date().toLocaleDateString()
          };
          setBooks([...books, newBook]);
        }
      } catch (err) {
        alert("Ошибка связи с сервером");
      } finally {
        setIsUploading(false);
        event.target.value = null;
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ margin: 0 }}>Каталог библиотеки</h2>
          <p style={{ color: '#6c757d' }}>Книг в вашей коллекции: {books.length}</p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
          
          {/* УСЛОВИЕ: Кнопка видна только если пользователь авторизован */}
          {user ? (
            <button 
              onClick={() => fileInputRef.current.click()}
              disabled={isUploading}
              style={{ padding: '12px 24px', background: isUploading ? '#6c757d' : '#198754', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              {isUploading ? '⌛ Загрузка...' : '➕ Добавить свою книгу'}
            </button>
          ) : (
            <p style={{ color: '#dc3545', fontSize: '14px', fontWeight: 'bold', background: '#f8d7da', padding: '10px', borderRadius: '4px' }}>
              ⚠️ Войдите в систему, чтобы загружать книги
            </p>
          )}
        </div>
      </div>

      {books.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '100px 20px', border: '2px dashed #dee2e6', borderRadius: '12px' }}>
          <h3 style={{ color: '#6c757d' }}>В каталоге пусто</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
          {books.map(book => (
            <div key={book.id} style={{ background: '#fff', padding: '25px', borderRadius: '10px', border: '1px solid #dee2e6' }}>
              <div style={{ fontSize: '30px' }}>📕</div>
              <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{book.title}</h3>
              <div style={{ fontSize: '13px', color: '#6c757d' }}>
                <p><strong>Загрузил:</strong> {book.author}</p>
                <p><strong>Размер:</strong> {book.size}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button 
                  onClick={() => window.open(`${API_URL}/api/files/${book.serverPath}`, '_blank')}
                  style={{ flex: 1, padding: '8px', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Открыть
                </button>
                
                {/* Удалять может тоже только авторизованный */}
                {user && (
                   <button 
                    onClick={() => setBooks(books.filter(b => b.id !== book.id))}
                    style={{ padding: '8px 12px', background: '#fff', color: '#dc3545', border: '1px solid #dc3545', borderRadius: '4px', cursor: 'pointer' }}
                   >
                    🗑️
                   </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;