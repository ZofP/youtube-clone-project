import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SEARCHED_VIDEOS_FAIL, SEARCHED_VIDEOS_REQUEST, SEARCHED_VIDEOS_SUCCESS, SET_CURRENTVIDEO } from "../actionType";

export const homeVideosReducer = (
 state = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All"
 }, action) => {

 const { type, payload } = action;

 switch (type) {

  case HOME_VIDEOS_REQUEST:
   return {
    ...state,
    loading: true
   }
  case HOME_VIDEOS_SUCCESS:
   return {
    ...state,
    videos: state.activeCategory === payload.category
     ? [...state.videos, ...payload.videos]
     : payload.videos,
    loading: false,
    nextPageToken: payload.nextPageToken,
    activeCategory: payload.category
   }
  case HOME_VIDEOS_FAIL:
   return {
    ...state,
    loading: false,
    error: payload.error,
    activeCategory: payload.category
   }

  default: return state
 }
}


export const searchedVideosReducer = (
 state = {
  videos: [],
  loading: true,
 }, action) => {

 const { type, payload } = action;

 switch (type) {

  case SEARCHED_VIDEOS_REQUEST:
   return {
    ...state,
    loading: true
   }
  case SEARCHED_VIDEOS_SUCCESS:
   return {
    ...state,
    videos: payload,
    loading: false,
   }
  case SEARCHED_VIDEOS_FAIL:
   return {
    ...state,
    loading: false,
    error: payload
   }

  default: return state
 }


}


export const currentVideoReducer = (
 state =
  sessionStorage.getItem("youtube-clone-currentVideo") ? JSON.parse(sessionStorage.getItem("youtube-clone-currentVideo")) : null
 , action) => {

 const { type, payload } = action;

 switch (type) {

  case SET_CURRENTVIDEO:
   return payload


  default: return state
 }


}