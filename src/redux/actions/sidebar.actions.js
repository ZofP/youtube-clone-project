import { SIDEBAR_SETMENUITEM, SIDEBAR_TOGGLE } from "../actionType"


export const toggleSidebar = () => async (dispatch, getState) => {
 try {

  const sidebarOpen = getState().sidebar.sidebarOpen

  dispatch({
   type: SIDEBAR_TOGGLE,
   payload: !sidebarOpen
  })

  sessionStorage.setItem("youtube-clone-sidebarOpen", !sidebarOpen)


 } catch (error) {
  console.log(error.message);
  dispatch({
   type: SIDEBAR_TOGGLE,
   payload: true
  })
 }
}


export const setMenuItem = (menuItemTitle) => async (dispatch, getState) => {
 try {

  dispatch({
   type: SIDEBAR_SETMENUITEM,
   payload: menuItemTitle
  })

  sessionStorage.setItem("youtube-clone-selectedMenuItem", menuItemTitle)


 } catch (error) {
  console.log(error.message);
  dispatch({
   type: SIDEBAR_SETMENUITEM,
   payload: "Home"
  })
 }
}
