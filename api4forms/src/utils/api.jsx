import axios from "axios";

const API_BASE_URL = "https://api-4forms.vercel.app/api";

export const requestApiKey = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, {
      email,
    });
    return response.data.message;
  } catch (error) {
    console.error("Error generating API key:", error);
    throw error;
  }
};
