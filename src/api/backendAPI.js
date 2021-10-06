import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class BackendAPI {
  static token;

  static async request(endpoint, data = {}, method="get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = (method === "get") ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async register(data) {
    const res = await this.request(`users/register/`, data, "post");
    return res.token;
  }

  static async login(data) {
    const res = await this.request(`users/login/`, data, "post");
    return res.token;
  }

  static clearToken() {
    this.token = null;
  }

  static setToken(token) {
    this.token = token;
  }
}

export default BackendAPI;