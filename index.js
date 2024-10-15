function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json()) 
      .then(data => renderBooks(data))  
      .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  
  books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book.name; 
      bookList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


