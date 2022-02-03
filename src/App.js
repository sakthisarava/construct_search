import React from 'react';
import { useContext,useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/home/Home';
import Dev from './pages/Dev/Dev';
import Login from './pages/Login/login';
import AuthApi from './Auth/Auth';
import S3 from './pages/s3/S3';
import Assets from './pages/assets/Assets';
import Notification from './pages/notification/Notification';
import Cookies from 'js-cookie';

function App() {

  const [auth,setAuth] = useState(false);
  const readCookie = () =>{
    const user = Cookies.get("user");
    if(user){
      setAuth(true);
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  return (
    <>
    <div>
      <AuthApi.Provider value={{auth,setAuth}}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
    </>
  )
}


const Routes = () =>{
  const Auth = useContext(AuthApi)
  return(
    <Switch history={useHistory}>
      <ProtectedLogin  path='/login' auth={Auth.auth} component={Login} />
      <ProtectedRoute  path='/home' auth={Auth.auth} component={Home} />    
      <Route  path='/dev' auth={Auth.auth} component={Dev} />
      <Route  path='/s3' auth={Auth.auth}  component={S3} />
      <Route  path='/assets' auth={Auth.auth}  component={Assets} />
      <Route  path='/notification' auth={Auth.auth}  component={Notification} />
    </Switch>
  )
  
}

const ProtectedRoute = ({auth,component:Component,...rest})=>{
  return(
    <Route {...rest}
    render={()=>auth?(
      <Component />
    ):
      (
        <Redirect to="/login" />
      )
    }
    />
  )
}


const ProtectedLogin = ({auth,component:Component,...rest})=>{
  return(
    <Route {...rest}
    render={()=>!auth?(
      <Component />
    ):
      (
        <Redirect to="/home" />
      )
    }
    />
  )
}



export default App;
