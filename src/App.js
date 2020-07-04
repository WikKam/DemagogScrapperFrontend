import React from 'react';
import logo from './logo.svg';
import './App.css';
import {List, TopList, Details, Component} from './components';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
    <div className="App">
      <Component/>
      <Switch>
        <Route exact path="/">
          <Redirect to = {'/coalitions'}/>
        </Route>
        <Route path = {'/coalitions'} exact render = {(props) => (
          <List key = {'coalitions'} type = {'coalitions'} {...props} side = {200} path = {'/coalitions'}></List>
        )}/>
        <Route path = {'/coalitions/:name'} render = {(props) => 
          (<Details {...props} type = 'coalitions'></Details>)}/>
        <Route path = '/parties/:name' render = {(props) => 
        (<Details {...props} type = 'parties'></Details>)}/>
        <Route path = '/members/:name' render = {(props) => 
        (<Details {...props} type = 'members'></Details>)}/>
        <Route path = '/parties' exact render = {(props) => 
        (<List key = {'parties'} type = {'parties'} {...props} side = {100} path = {'/parties'}></List>)}/>
        <Route path = '/members' exact render = {(props) => 
        (<List key = {'members'} type = {'members'} {...props} side = {100} path = {'/members'}></List>)}/>
        <Route path = '/topList/coalitions' render = {(props) => (
        <TopList key = {'coalitions'} {...props} type = 'coalitions' path = {'/coalitions/results'}></TopList>)}/>
        <Route path = '/topList/parties' render = {(props) => (
        <TopList key = {'parties'} {...props} type = 'parties' path = {'/parties/results'}></TopList>)}/>
        <Route path = '/topList/members' render = {(props) => (
        <TopList key = {'members'} {...props} type = 'members' path = {'/members'}></TopList>)}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
