import React from 'react';
import './App.scss';
import { MainCoursePage } from './components/MainCoursePage';
import { SecondCoursePage } from './components/SecondCoursePage';
import { ClusterPage } from './components/ClusterPage';
import { SideBar } from './components/SideBar';
import { Chem } from './components/Chem';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <div className="main">
          <SideBar />
          
          <Switch>
            <Route path="/" exact component={ MainCoursePage } />
            <Route path="/SecondCoursePage" exact component={ SecondCoursePage } />
            <Route path="/ClusterPage" exact component={ ClusterPage } />
            <Route path="/Chem" exact component={ Chem } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
