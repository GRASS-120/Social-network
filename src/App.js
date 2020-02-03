import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ( {STATE, dispatch} ) => {

  let {postsPage, dialogsPage, navPage} = STATE

  return (
      <div className="app-wrapper">
        <Header/>   
        <Nav navPage={navPage}/>
            <Route path="/profile" render={ () => <Content postsPage={postsPage} dispatch={dispatch}/> }/> 
            <Route path="/dialogs" render={ () => <DialogsContainer dialogsPage={dialogsPage} dispatch={dispatch}/> }/>
            <Route path="/news" render={ () => <News/> }/>
            <Route path="/music" render={ () => <Music/> }/>
            <Route path="/settings" render={ () => <Settings/> }/>
      </div>
  ); 
}


export default App;
 