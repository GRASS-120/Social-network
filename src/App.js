import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render(){

    if(!this.props.initialized){
      return <Preloader/>
    } 
      return (
        <div className="app-wrapper">
          <HeaderContainer/>   
          <Nav/>
              <Route path="/profile/:userId?" render={ () => <Content/>}/> 
              <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
              <Route path="/news" render={ () => <News/> }/>
              <Route path="/music" render={ () => <Music/> }/>
              <Route path="/users" render={ () =>  <UsersContainer/> }/>
              <Route path="/settings" render={ () => <Settings/> }/>
              <Route path="/login" render={ () => <Login/> }/>
        </div>
      )
    
  }  
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// Оборачиваем в withRouter для улучшения роутинга
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
 