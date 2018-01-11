import { combineReducers, createStore, applyMiddleware } from 'redux';

import showLinks from './show-links';
import showProfile from './show-profile';
// import formInput from './form-input';

import changeTitle from './change-title';
import changeUrl from './change-url';
import changeTags from './change-tags';
import searchLink from './search-link';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    showLinks,
    showProfile,
    changeTitle,
    changeUrl,
    changeTags,
    searchLink
});

// const store = createStore(reducers);
const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;