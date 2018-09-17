import { fetchNewStoryIds, fetchItemDetail } from "../apis/api";

// actions
export const SAVE_STORY = "SAVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const ADD_STORY = "ADD_STORY";
export const ADD_STORIES = "ADD_STORIES";
export const FETCH_STORY_IDS_SENT = "FETCH_USER_SENT";
export const FETCH_STORY_IDS_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_STORY_IDS_FAILED = "FETCH_USER_FAILED";
export const FETCH_STORIES_SENT = "FETCH_STORIES_SENT";

// action creators
export const saveStory = story => ({
  type: SAVE_STORY,
  payload: story
});

export const removeStory = story => ({
  type: REMOVE_STORY,
  payload: story
});

export const addStory = story => ({
  type: ADD_STORY,
  payload: story
});

export const fetchStoryIds = () => async dispatch => {
  dispatch({ type: FETCH_STORY_IDS_SENT });
  try {
    const ids = await fetchNewStoryIds();
    dispatch({ type: FETCH_STORY_IDS_SUCCESS, payload: ids });
  } catch (err) {
    dispatch({ type: FETCH_STORY_IDS_FAILED, payload: err.message });
  }
};

export const fetchStories = ids => async dispatch => {
  dispatch({ type: FETCH_STORIES_SENT });
  try {
    const newStoriesPromises = ids.map(async id => {
      const newStory = await fetchItemDetail(id);
      return newStory;
    });
    const newStories = await Promise.all(newStoriesPromises);
    dispatch({ type: ADD_STORIES, payload: newStories });
  } catch (err) {}
};
