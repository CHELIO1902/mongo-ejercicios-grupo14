import mongoose from 'mongoose';
import Book from './models/Book.js';

/**
 * DB driver - Conectar a la db
 * query builder - Hacer queries con fns
 * ODM - Crear entidaddes
 */

/**
 * create
 * read
 * update
 * delete
 *
 */
mongoose.connect('cosaloca', async () => {
  console.log('Se ha conectado a la base de datos');
  /**
   * await - tenemos que esperar una respuesta
   * async - envolver una función que tenga que esperar
   */

  /**
   * CREATE
   */

  const book = await Book.create({
    author: 'Pedrito',
    editorial: 'Penguin',
    isbn: '982791eyw19yeey',
    pages: 100,
    price: 20.5,
    publishDate: new Date(),
    title: 'El libro más bonito del mundo',
  });

  console.log(book);

  /**
   * READ
   */

  const books = await Book.find();
  console.log(books);

  /**
   * UPDATE
   */

  const updatedBook = await Book.findByIdAndUpdate(
    '6321369f48a95adb021a54f6',
    {
      author: 'Bruno',
    },
    {
      new: true,
    }
  );

  console.log('Libro actualizado', updatedBook);

  /**
   * DELETE
   */
  const deletedBook = await Book.findByIdAndDelete('63213c87be9ecead15927194');
  console.log('Libro borrado', deletedBook);
});