import Login from "./Pages/Login/Login";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./Pages/Home/Home";
import { useContext } from "react";
import CartContext from "./Pages/ContextAPI/cart-context";
import Profile from "./Pages/Profile/Profile";

function App() {

  const api = useContext(CartContext)
  const login = api.login

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login'/>
        </Route>
        {login && <Route path='/login'><Redirect to='/home' /></Route>}
        <Route path='/login'>
           <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='*'>
          <h3>404 Error</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
