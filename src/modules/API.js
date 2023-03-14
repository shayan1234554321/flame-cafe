import { meal_api } from "./secrets";

export const searchByName = async (Name) => {
    try {
        const response = await fetch(`${meal_api}search.php?s=${Name}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
}

export const searchByLetter = async (letter) => {
    try {
        const response = await fetch(`${meal_api}search.php?f=${letter}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
}



export const searchById = async (id) => {
    try {
        const response = await fetch(`${meal_api}lookup.php?i=${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
}

