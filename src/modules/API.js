import { mealApi, involvmentApi, involvmentApiId } from './secrets.js';

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

export const giveLike = async (id) => {
  try {
    await fetch(`${involvmentApi}apps/${involvmentApiId}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: `${id}` }),
    });
    return 'worked';
  } catch (error) {
    console.error(error);
  }
  return 'value';
};

export const getLike = async () => {
  try {
    const response = await fetch(`${involvmentApi}apps/${involvmentApiId}/likes`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};

export const giveComment = async (id, name, comment) => {
  try {
    const response = await fetch(`${involvmentApi}apps/${involvmentApiId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id, username: name, comment }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};

export const getComment = async (id) => {
  try {
    const response = await fetch(`${involvmentApi}apps/${involvmentApiId}/comments?item_id=${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'value';
};
