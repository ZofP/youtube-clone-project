import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SEARCHED_VIDEOS_FAIL, SEARCHED_VIDEOS_REQUEST, SEARCHED_VIDEOS_SUCCESS, SET_CURRENTVIDEO } from "../actionType"

import request from "../../api"

export const getPopularVideos = () => async (dispatch, getState) => {
 try {
  dispatch({
   type: HOME_VIDEOS_REQUEST,
  })

  const { data } = await request("/videos", {
   params: {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    regionCode: "CZ",
    maxResults: 20,
    pageToken: getState().homeVideos.nextPageToken
   }
  })

  dispatch({
   type: HOME_VIDEOS_SUCCESS,
   payload: {
    videos: data.items,
    nextPageToken: data.nextPageToken,
    category: "All"
   }

  })

 } catch (error) {
  console.log(error.message);
  dispatch({
   type: HOME_VIDEOS_FAIL,
   payload: {
    error: error.message,
    category: "All"
   }
  })
 }


}

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
 try {
  dispatch({
   type: HOME_VIDEOS_REQUEST,
  })

  const { data } = await request("/search", {
   params: {
    part: "snippet",
    maxResults: 20,
    pageToken: getState().homeVideos.nextPageToken,
    q: keyword,
    type: "video"
   }
  })

  dispatch({
   type: HOME_VIDEOS_SUCCESS,
   payload: {
    videos: data.items,
    nextPageToken: data.nextPageToken,
    category: keyword
   }
  })

 } catch (error) {
  console.log(error.message);
  dispatch({
   type: HOME_VIDEOS_FAIL,
   payload: {
    error: error.message,
    category: keyword
   }
  })
 }


}

export const getVideosBySearch = keyword => async dispatch => {
 try {
  dispatch({
   type: SEARCHED_VIDEOS_REQUEST,
  })

  const { data } = await request("/search", {
   params: {
    part: "snippet",
    maxResults: 20,
    q: keyword,
    type: "video"
    // , channel

   }
  })

  dispatch({
   type: SEARCHED_VIDEOS_SUCCESS,
   payload: data.items

  })

 } catch (error) {
  console.log(error.message);
  dispatch({
   type: SEARCHED_VIDEOS_FAIL,
   payload: error.message
  })
 }


}

export const setCurrentVideo = (currentVideo) => async (dispatch) => {
 // try {

 //  dispatch({
 //   type: SET_CURRENTVIDEO,
 //   payload: currentVideo
 //  })

 //  sessionStorage.setItem("youtube-clone-currentVideo", JSON.stringify(currentVideo))


 // } catch (error) {
 //  console.log(error.message);
 //  dispatch({
 //   type: SET_CURRENTVIDEO,
 //   payload: {}
 //  })
 // }


 dispatch({
  type: SET_CURRENTVIDEO,
  payload: currentVideo
 })

 sessionStorage.setItem("youtube-clone-currentVideo", JSON.stringify(currentVideo))

}