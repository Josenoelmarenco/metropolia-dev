const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Book = require('../models/bookModel');
const User = require('../models/userModel');

// Seed data
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0-7432-7356-5',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '978-0-13-235088-4',
  },
];

// Helper: read all books straight from DB
const booksInDb = async () => {
  const allBooks = await Book.find({});
  return allBooks.map((b) => b.toJSON());
};

let token = null;

// Create a user and get a token before all tests
beforeAll(async () => {
  await User.deleteMany({});
  const result = await api.post('/api/users/signup').send({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'R3g5T7#gh',
  });
  token = result.body.token;
});

describe('Book Routes', () => {
  // Seed books via the API (so the controller handles creation)
  beforeEach(async () => {
    await Book.deleteMany({});

    await api
      .post('/api/books')
      .set('Authorization', 'Bearer ' + token)
      .send(books[0]);

    await api
      .post('/api/books')
      .set('Authorization', 'Bearer ' + token)
      .send(books[1]);
  });

  // ────────────────── GET /api/books (public) ──────────────────
  describe('GET /api/books', () => {
    it('should return all books as JSON with status 200', async () => {
      const response = await api
        .get('/api/books')
        .expect(200)
        .expect('Content-Type', /application\/json/);

      expect(response.body).toHaveLength(books.length);
    });
  });

  // ────────────────── GET /api/books/:bookId (public) ──────────────────
  describe('GET /api/books/:bookId', () => {
    it('should return one book by ID', async () => {
      const book = await Book.findOne();
      const response = await api
        .get(`/api/books/${book._id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      expect(response.body.title).toBe(book.title);
    });

    it('should return 404 for a non-existing book ID', async () => {
      const nonExistentId = new mongoose.Types.ObjectId();
      await api.get(`/api/books/${nonExistentId}`).expect(404);
    });

    it('should return 404 for an invalid book ID format', async () => {
      const invalidId = '12345';
      await api.get(`/api/books/${invalidId}`).expect(404);
    });
  });

  // ────────────────── POST /api/books (protected) ──────────────────
  describe('POST /api/books', () => {
    describe('when the user is authenticated', () => {
      it('should create a new book with status 201', async () => {
        const newBook = {
          title: 'Design Patterns',
          author: 'Erich Gamma',
          isbn: '978-0-201-63361-0',
        };

        const response = await api
          .post('/api/books')
          .set('Authorization', 'Bearer ' + token)
          .send(newBook)
          .expect(201);

        expect(response.body.title).toBe(newBook.title);

        const booksAtEnd = await booksInDb();
        expect(booksAtEnd).toHaveLength(books.length + 1);
      });
    });

    describe('when the user is not authenticated', () => {
      it('should return 401 if no token is provided', async () => {
        const newBook = {
          title: 'Ghost Book',
          author: 'Nobody',
          isbn: '000-0-000-0000-0',
        };

        await api.post('/api/books').send(newBook).expect(401);

        const booksAtEnd = await booksInDb();
        expect(booksAtEnd).toHaveLength(books.length);
      });
    });
  });

  // ────────────────── PUT /api/books/:bookId (protected) ──────────────────
  describe('PUT /api/books/:bookId', () => {
    describe('when the user is authenticated', () => {
      it('should update the book and return the updated document', async () => {
        const book = await Book.findOne();
        const updates = { title: 'Updated Title', author: 'Updated Author' };

        const response = await api
          .put(`/api/books/${book._id}`)
          .set('Authorization', 'Bearer ' + token)
          .send(updates)
          .expect(200)
          .expect('Content-Type', /application\/json/);

        expect(response.body.title).toBe(updates.title);

        const updatedBook = await Book.findById(book._id);
        expect(updatedBook.author).toBe(updates.author);
      });
    });

    describe('when the user is not authenticated', () => {
      it('should return 401 if no token is provided', async () => {
        const book = await Book.findOne();
        await api
          .put(`/api/books/${book._id}`)
          .send({ title: 'Nope' })
          .expect(401);
      });
    });

    describe('when the id is invalid', () => {
      it('should return 404 for an invalid ID format', async () => {
        const invalidId = '12345';
        await api
          .put(`/api/books/${invalidId}`)
          .set('Authorization', 'Bearer ' + token)
          .send({})
          .expect(404);
      });
    });
  });

  // ────────────────── DELETE /api/books/:bookId (protected) ──────────────────
  describe('DELETE /api/books/:bookId', () => {
    describe('when the user is authenticated', () => {
      it('should delete the book and return status 204', async () => {
        const booksAtStart = await booksInDb();
        const bookToDelete = booksAtStart[0];

        await api
          .delete(`/api/books/${bookToDelete.id}`)
          .set('Authorization', 'Bearer ' + token)
          .expect(204);

        const booksAtEnd = await booksInDb();
        expect(booksAtEnd).toHaveLength(booksAtStart.length - 1);
        expect(booksAtEnd.map((b) => b.title)).not.toContain(
          bookToDelete.title,
        );
      });
    });

    describe('when the user is not authenticated', () => {
      it('should return 401 if no token is provided', async () => {
        const book = await Book.findOne();
        await api.delete(`/api/books/${book._id}`).expect(401);
      });
    });

    describe('when the id is invalid', () => {
      it('should return 404 for an invalid ID format', async () => {
        const invalidId = '12345';
        await api
          .delete(`/api/books/${invalidId}`)
          .set('Authorization', 'Bearer ' + token)
          .expect(404);
      });
    });
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
