import React, { createContext } from 'react';
import './style/Parent/Parent.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
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

          <Route>
            <Welcome />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
