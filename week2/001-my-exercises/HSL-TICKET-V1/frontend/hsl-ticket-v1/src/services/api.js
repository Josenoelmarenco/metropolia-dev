// src/services/api.js
const API_URL = "http://localhost:3001";

export const getContactInfo = async () => {
  const response = await fetch(`${API_URL}/contact`);
  return response.text();
};

export const getTicket = async (id) => {
  const response = await fetch(`${API_URL}/ticket/${id}`);
  return response.text();
};
