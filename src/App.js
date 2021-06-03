import './App.scss';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Search from './pages/Search';
import VideoPlayer from './pages/VideoPlayer';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const App = () => {

  const history = useHistory();

  const { accessToken, loading } = useSelector(state => state.auth)

  useEffect(() => {

    if (!loading && !accessToken) {
      history.push("/login")
    }

  }, [accessToken, loading, history])


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
      <div className="app__body">
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
      </div>

    </div>
  );
}

export default App;
