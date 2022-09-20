/**
 * Una veterinaria quiere tener un sistema donde pueda almacenar a las mascotas y a sus dueños
 * para guardar una mascota en el sistema, se requieren los siguientes datos:
 *
 * Nombre
 * Fecha de nacimiento
 * Tipo
 * Raza
 *
 * Y para guardar a los dueños se requieren estos datos:
 *
 * Nombre
 * Fecha de nacimiento
 * Teléfono
 * Dirección
 * Email
 * Contraseña
 * No. tarjeta
 *
 *
 * El sistema debe saber quién es el dueño de cada mascota
 *
 */

import Owner from '../models/Owner.js';
import Pet from '../models/Pet.js';

const create = async () => {
  /**
   * 1.- crear dueño ✅
   * 2.- crear mascota
   */
  const owner = await Owner.create({
    address: 'Calle tal y eso',
    birthdate: new Date(),
    cardNumber: '123651623',
    email: 'fernando@corre.com',
    name: 'Fernando',
    password: '8u1ej81j923n',
    phone: '98127391',
  });
  const pet = await Pet.create({
    birthdate: new Date(),
    breed: 'Chihuahua',
    name: 'Goliat',
    type: 'Perro',
    owner: owner._id,
  });

  console.log('Owner', owner, 'Pet', pet);
};

const getAll = async () => {
  try {
    const pets = await Pet.find().populate('owner');

    console.log(pets);
  } catch (error) {
    console.error('Error al consultar todos las mascotas');
  }
};

// const update = async () => {};

// const remove = async () => {};

export { create, getAll };
