import Graduated from '../models/Graduated.js';

const create = async () => {
  try {
    const graduated = await Graduated.create({
      degree: 'Maestría en lolcito',
      job: 'Comentador de videojuegos',
      school: 'Escuela youtuber',
    });
    console.log(graduated);
  } catch (error) {
    console.error('Error al crear graduado', error);
  }
};
const read = async () => {
  try {
    const graduates = await Graduated.find();
    console.log(graduates);
  } catch (error) {
    console.error('Error al buscar graduados', error);
  }
};

const update = async () => {
  try {
    /**
     * Buscar un graduado que venga de la escuela "Escuela youtuber" y cambiarlo a la "escuela nacional de biología"
     */
    const graduatedUpdated = await Graduated.findOneAndUpdate(
      {
        school: 'Escuela Youtuber',
      }, //Filtro
      {
        school: 'Escuela nacional de Biología',
      }, //Nuevos datos
      {
        new: true,
      }
    );
    console.log(graduatedUpdated);
  } catch (error) {
    console.error('Error al actualizar', error);
  }
};

const remove = async () => {
  try {
    await Graduated.deleteMany();
  } catch (error) {
    console.error('Error al borrar graduados', error);
  }
};

export { create, read, update, remove };
