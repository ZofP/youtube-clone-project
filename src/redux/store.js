import { createStore, applyMiddleware, combineReducers } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import thunk from "redux-thunk"

import { authReducer } from "./reducers/auth.reducer"
import { sidebarReducer } from "./reducers/sidebar.reducer"

import { currentVideoReducer, homeVideosReducer, searchedVideosReducer } from "./reducers/videos.reducer"


const rootReducer = combineReducers({
 auth: authReducer,
 homeVideos: homeVideosReducer,
 searchedVideos: searchedVideosReducer,
 sidebar: sidebarReducer,
 currentVideo: currentVideoReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store