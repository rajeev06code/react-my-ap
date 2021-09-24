
import './App.css';
import Home from '../src/page/home/Home'
import Profile from '../src/page/profile/Profile'
import Login from '../src/page/login/Login'
import Register from './page/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div >
    <Router>
      <Switch>
         <Route exact path='/'>
         <Home/>
         </Route>
         <Route path='/profile'>
         <Profile/>
         </Route>
         <Route path='/login'>
         <Login/>
         </Route>
         <Route path='/register'>
         <Register/>
         </Route>
      </Switch>
    </Router>
  
   
  
  
    </div>
  );
}

export default App;
