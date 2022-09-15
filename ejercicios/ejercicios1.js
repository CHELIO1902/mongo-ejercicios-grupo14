import Movie from '../models/Movie.js';

const create = async () => {
  try {
    const movie = await Movie.create({
      cast: ['Pedrito1', 'Pedrito2'],
      description: 'La mejor película del mundo',
      genre: 'Horror',
      title: 'Pedrito movie',
    });
    console.log(movie);
  } catch (error) {
    console.error('Error al crear película');
  }
};

const read = async () => {
  try {
    const movies = await Movie.find();
    console.log(movies);
  } catch (error) {
    console.error('Error al leer películas');
  }
};

const update = async () => {
  try {
    const updatedMovies = await Movie.updateMany(
      {
        title: 'Pelicula chida',
        genre: 'Horror',
      },
      {
        cast: ['Pedrito1'],
        genre: 'comedy',
      }
    );
    console.log(updatedMovies);
  } catch (error) {
    console.error('Error al actualizar película');
  }
};

const remove = async () => {
  try {
    const deleted = await Movie.deleteMany({});
    console.log(deleted);
  } catch (error) {
    console.error('Error al borrar películas');
  }
};

export { create, read, update, remove };
