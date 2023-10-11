import { BaseApi } from './base.js';

export class TopStoriesApi extends BaseApi {
  constructor() {
    super();

    this.route = '/top-stories';
  }

  async findByPage(page) {
    return await this.request(`${this.route}/${page}`);
  }
}
