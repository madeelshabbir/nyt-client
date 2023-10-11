import { TopStoriesApi } from '../apis/top-stories';
import { notify } from '../utils/toastify';

export const topStoriesActions = {
  index: async (page) => {
    const topStories = await new TopStoriesApi().findByPage(page);

    if (topStories.error) {
      notify(topStories.error?.message, 'error');
    }

    return topStories;
  },
}
