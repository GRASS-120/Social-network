import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserData()
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