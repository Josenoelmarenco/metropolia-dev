// src/Book.jsx
import './Book.css';

export const Book = ({ book }) => (
  <div className="book">
    <h2 className="book-title">{book.title}</h2>
    <p><strong>Author:</strong> {book.author}</p>
    <p><strong>Genre:</strong> {book.genre}</p>
    <p><strong>Year:</strong> {book.year}</p>
  </div>
);


//Esta es otra forma:
// import React from 'react';

// function Book({ book }) {
//   return (
//     <div className="book">
//       <h2 className="book-title">{book.title}</h2>
//       <p><strong>Author:</strong> {book.author}</p>
//       <p><strong>Genre:</strong> {book.genre}</p>
//       <p><strong>Year:</strong> {book.year}</p>
//     </div>
//   );
// }

// export default Book;