import createReducer from 'helpers/createReducer';
import { combineReducers } from 'redux';
import {
  BLOG,
  BLOGS,
  COURSE,
  COURSES,
  DARK_MODE,
  TEAMMEMBERS,
  WEBSITE_SETTINGS
} from 'configs/types';

const darkMode = (state = false, action) => {
  switch (action.type) {
    case DARK_MODE:
      return action.payload;
    default:
      return state;
  };
};

const blogItem = createReducer(BLOG);
const course = createReducer(COURSE);
const blogItems = createReducer(BLOGS);
const courses = createReducer(COURSES);
const teamMembers = createReducer(TEAMMEMBERS);
const website_settings = createReducer(WEBSITE_SETTINGS)

const rootReducer = combineReducers({
  course,
  courses,
  blogItem,
  darkMode,
  blogItems,
  teamMembers,
  website_settings
});

export default rootReducer;
