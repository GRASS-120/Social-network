import React from 'react';
import User from './User';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile, getUserStatus, updateUserStatus } from '../../../redux/posts-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UserContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId){
      userId = this.props.authUserId;
    }

    this.props.setUserProfile(userId);
    this.props.getUserStatus(userId); 
  }

  render(){
    return (
      <User {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
  );
  }
};

let mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
  status: state.postsPage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {setUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  // withAuthRedirect,
)(UserContainer)