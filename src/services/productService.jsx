import { products } from "../data/products.jsx";
import { categoryList } from "../data/categories.jsx";

const SIMULATED_DELAY_MS = 300;

const delay = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), SIMULATED_DELAY_MS));

export const fetchAllProducts = async () => {
  return delay(products);
};

export const fetchProductById = async (id) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("Failed to fetch product");
  }

  return delay(product);
};

export const fetchCategories = async () => {
  const categories = categoryList.map(({ id, name }) => ({ id, name }));
  return delay(categories);
};

export const fetchProductsByCategory = async (categoryId) => {
  const filtered = products.filter((p) => p.category.id === categoryId);
  return delay(filtered);
};
