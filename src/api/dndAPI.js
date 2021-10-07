import axios from 'axios';

const BASE_URL = "https://www.dnd5eapi.co"


class DndAPI {
  static async request(endpoint) {
    const url = `${BASE_URL}/${endpoint}`;

    try {
      return (await axios.get(url)).data;
    } catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}