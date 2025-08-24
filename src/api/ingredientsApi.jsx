import axios from "axios";

const API_URL = "https://ingredients-service.onrender.com/api/ingredients"; // backend url

// Create ingredient
export const createIngredient = async (ingredientData) => {
  try {
    const res = await axios.post(API_URL, ingredientData);
    return res.data;
  } catch (err) {
    console.error("Error creating ingredient:", err);
    throw err;
  }
};

// Get all ingredients
export const getIngredients = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching ingredients:", err);
    throw err;
  }
};

// Get one ingredient by name
export const getIngredientByName = async (name) => {
  try {
    const res = await axios.get(`${API_URL}/${name}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching ingredient:", err);
    throw err;
  }
};

// Update ingredient
export const updateIngredient = async (id, updatedData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedData);
    return res.data;
  } catch (err) {
    console.error("Error updating ingredient:", err);
    throw err;
  }
};

// Delete ingredient
export const deleteIngredient = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting ingredient:", err);
    throw err;
  }
};
