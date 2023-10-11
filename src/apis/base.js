import axios from 'axios';

import { API_BASE_URL } from '../constants/environment-variables.js';

export class BaseApi {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async request(route, method = 'get', params= {}) {
    try {
      const response = await axios.request({
        method,
        url: this.baseUrl + route,
        params,
      });

      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
}
