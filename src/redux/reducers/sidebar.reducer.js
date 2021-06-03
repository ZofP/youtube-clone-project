import { SIDEBAR_CHANGE_TYPE, SIDEBAR_TOGGLE, SIDEBAR_SETMENUITEM } from "../actionType"


const initialState = {
 sidebarType: sessionStorage.getItem("youtube-clone-sidebarType") ? sessionStorage.getItem("youtube-clone-sidebarType") : "permanent",
 sidebarOpen: sessionStorage.getItem("youtube-clone-sidebarOpen") ? sessionStorage.getItem("youtube-clone-sidebarOpen") : true,
 selectedMenuItem: sessionStorage.getItem("youtube-clone-selectedMenuItem") ? sessionStorage.getItem("youtube-clone-selectedMenuItem") : "Home"
}

export const sidebarReducer = (prevState = initialState, action) => {
 const { type, payload } = action

 switch (type) {
  case SIDEBAR_TOGGLE:
   return {
    ...prevState,
    sidebarOpen: payload
   }
  case SIDEBAR_CHANGE_TYPE:
   return {
    ...prevState,
    sidebarType: payload
   }
  case SIDEBAR_SETMENUITEM:
   return {
    ...prevState,
    selectedMenuItem: payload
   }


  default: return prevState
 }
}