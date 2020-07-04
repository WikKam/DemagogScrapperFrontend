import React from 'react';
import logo from './logo.svg';
import './App.css';
import {List, TopList, Details, Component} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Component/>
      <Switch>
        <Route path = {'/coalitions'} exact render = {(props) => (
          <List type = {'coalitions'} {...props} side = {200} path = {'/coalitions'}></List>
        )}/>
        <Route path = {'/coalitions/:name'} render = {(props) => 
          (<Details {...props} type = 'coalitions'></Details>)}/>
        <Route path = '/parties/:name' render = {(props) => 
        (<Details {...props} type = 'parties'></Details>)}/>
        <Route path = '/members/:name' render = {(props) => 
        (<Details {...props} type = 'members'></Details>)}/>
        <Route path = '/parties' exact render = {(props) => 
        (<List type = {'parties'} {...props} side = {100} path = {'/parties'}></List>)}/>
        <Route path = '/members' exact render = {(props) => 
        (<List type = {'members'} {...props} side = {100} path = {'/members'}></List>)}/>
        <Route path = '/topList/coalitions' render = {(props) => (
        <TopList {...props} type = 'coalitions' path = {'/coalitions/results'}></TopList>)}/>
        <Route path = '/topList/parties' render = {(props) => (
        <TopList {...props} type = 'parties' path = {'/parties/results'}></TopList>)}/>
        <Route path = '/topList/members' render = {(props) => (
        <TopList {...props} type = 'members' path = {'/members'}></TopList>)}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
