import CreateActionCreator  from 'helpers/createActionCreator';
import {
  BLOG,
  BLOGS,
  COURSE,
  COURSES,
  DARK_MODE,
  TEAMMEMBERS,
  WEBSITE_SETTINGS
} from 'configs/types';

const fetchTeamMembers = _ => CreateActionCreator.read({
    path: 'team-members',
    type: TEAMMEMBERS,
});

const fetchBlogItems = (page = 0, limit = 9) => CreateActionCreator.read({
  path: `blog?page=${page}&limit=${limit}`,
  type: BLOGS,
});

const fetchWebsiteSettings = _ => CreateActionCreator.read({
  path: 'website-settings',
  type: WEBSITE_SETTINGS,
});

const fetchBlogItem = id => CreateActionCreator.read({
  path: `blog/${id}`,
  type: BLOG,
});

const fetchCourses = _ => CreateActionCreator.read({
  path: 'courses',
  type: COURSES,
});



const fetchCourse = id => CreateActionCreator.read({
  path: `courses/${id}`,
  type: COURSE,
});

const toggleDarkMode = (darkMode) => ({
  type: DARK_MODE,
  payload: darkMode
});

export {
  fetchCourse,
  fetchCourses,
  fetchBlogItem,
  fetchBlogItems,
  toggleDarkMode,
  fetchTeamMembers,
  fetchWebsiteSettings
};
