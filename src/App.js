import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./pages/Home/Home"
import Search from './pages/Search/Search';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import { Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import Login from './pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setMenuItem } from './redux/actions/sidebar.actions';


const App = () => {

  const history = useHistory();

  const { pathname } = useLocation()

  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)

  const { selectedMenuItem } = useSelector(state => state.sidebar)

  useEffect(() => {
    if (!loading && !user) {
      history.push("/login")
    }
  }, [user, loading, history])


  useEffect(() => {
    if (pathname.includes("/search")) {
      dispatch(setMenuItem("Search"))
    }
    else if (pathname.includes("/watch")) {
      dispatch(setMenuItem("Watch"))
    }
    else if (pathname.includes("/feed")) {
      dispatch(setMenuItem("Feed"))
    }
    else {
      dispatch(setMenuItem("Home"))
    }
  }, [pathname, dispatch])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {/* <LinearProgress variant="determinate" value={progress} /> */}
          <Header componentStyle="white" />
        </Route>
        <Route path="/search/:query">
          <Header componentStyle="white" />
        </Route>
        <Route path="/watch/:videoId">
          <Header componentStyle="black" />
        </Route>
        <Route path="/feed/:menuItem">
          <Header componentStyle="white" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      {pathname !== "/login" && <div className="app__body">
        <Switch>
          <Redirect exact from="/home" to="/" />
          <Route exact path="/">
            <Sidebar />
            <Home />
          </Route>
          <Route path="/search/:query">
            <Sidebar />
            <Search />
          </Route>
          <Route path="/watch/:videoId">
            <VideoPlayer />
          </Route>
          <Route path="/feed/:menuItem">
            <Sidebar />
          </Route>
        </Switch>
      </div>}

    </div>
  );
}

export default App;
