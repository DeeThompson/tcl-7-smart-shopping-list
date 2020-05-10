import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/list-view">
              <Listview />
            </Route>
            <Route path="/add-item">
              <Additem />
            </Route>
          </Switch>
        </main>
        <footer>
          <nav>
            <NavLink to="/list-view">
              <img src="/img/list.svg" alt="view list" />
            </NavLink>
            <NavLink to="/add-item">
              <img src="/img/add.svg" alt="add item" />
            </NavLink>
          </nav>
        </footer>
      </Router>
    </div>
  );
}

function Listview() {
  return <h2>This is the list view!</h2>;
}

function Additem() {
  return <h2>This is where you'd add an item!</h2>;
}

export default App;
