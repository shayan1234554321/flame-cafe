import { mealApi } from './secrets.js';

export const searchByName = async (Name) => {
  try {
    const response = await fetch(`${mealApi}search.php?s=${Name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};

export const searchByLetter = async (letter) => {
  try {
    const response = await fetch(`${mealApi}search.php?f=${letter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};

export const searchById = async (id) => {
  try {
    const response = await fetch(`${mealApi}lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};
