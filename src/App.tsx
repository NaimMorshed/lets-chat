import React, { createContext } from 'react';
import './style/Parent/Parent.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import NewUser from './components/Authenticate/NewUser';
import ExistingUser from './components/Authenticate/ExistingUser';
export const UserContext = createContext<any>(null);

function App() {
  const [auth, setAuth] = React.useState({
    status: false,
    email: null,
    name: null,
    id: null,
    photo: null,
  });
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Welcome />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/existingUser">
            <ExistingUser />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
