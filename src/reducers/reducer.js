import {
  SAVE_STORY,
  REMOVE_STORY,
  ADD_STORY,
  FETCH_STORY_IDS_SUCCESS,
  ADD_STORIES
} from "../actions/action";
import { combineReducers } from "redux";

const storyIdsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STORY_IDS_SUCCESS:
      return [...state,...action.payload];
    default:
      return state;
  }
};

const savedStoryReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_STORY:
      const exist = state.some(story => {
        return story.id === action.payload.id;
      });
      if (!exist) return [...state, action.payload];
      return state;
    case REMOVE_STORY:
      const newState = state.filter(story => story.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
};

const newStoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STORY:
      const exist = state.some(story => {
        return story.id === action.payload.id;
      });
      if (!exist) return [...state, action.payload];
      return state;
    case ADD_STORIES:
      return [...state,...action.payload];
    default:
      return state;
  }
};

const reducer = combineReducers({
  storyIds: storyIdsReducer,
  savedStories: savedStoryReducer,
  newStories: newStoryReducer
});

export default reducer;
