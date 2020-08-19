import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as axios from 'axios'
import { setAuthUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get( `https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true}).then(Response => {  // withCredentials - позволяет делать кроссдоменные запросы
            // this.props.toggleIsFetching(true);
            if (Response.data.resultCode === 0){
              // this.props.toggleIsFetching(true);
              let {id, email, login} = Response.data.data
              this.props.setAuthUserData(id, email, login);
            }
        });
      }
    
      render(){
        return (
          <Header {...this.props} />
        );
    }
};


let mapStateToProps = (state) => ({
    // id: state.,
    // email
    isAuth: state.auth.isAuth,
    login: state.auth.login
  })
  
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);