const emptyArray = [];

export const topStoriesRequest = () => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
    transform: body => ({
      topStoryIds: body
    }),
    update: {
      topStoryIds: (prev, next) => {
        return next;
      }
    }
  };
};

export const itemRequest = itemId => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
    transform: body => ({
      itemsById: {
        [itemId]: body
      }
    }),
    update: {
      itemsById: (prev, next) => {
        return {
          ...prev,
          ...next
        };
      }
    }
  };
};

export const getTopStoryIds = state => {
  return state.entities.topStoryIds || emptyArray;
};

export const getItem = (state, itemId) => {
  return (state.entities.itemsById || {})[itemId];
};
