import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {

  return (
      <div className="app-wrapper">
        <HeaderContainer/>   
        <Nav />
            <Route path="/profile/:userId?" render={ () => <Content/>}/> 
            <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
            <Route path="/news" render={ () => <News/> }/>
            <Route path="/music" render={ () => <Music/> }/>
            <Route path="/users" render={ () =>  <UsersContainer/> }/>
            <Route path="/settings" render={ () => <Settings/> }/>
      </div>
  ); 
}


export default App
 