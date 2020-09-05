import React from 'react';
import User from './User';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/posts-reducer';
import { withRouter } from 'react-router-dom';

class UserContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId){
      userId = 2;
    }

    this.props.setUserProfile(userId);
  }

  render(){
    return (
      <User {...this.props} profile={this.props.profile}/>
  );
  }
};

let mapStateToProps = (state) => ({
  profile: state.postsPage.profile
})

let WithUrlDataContainerComponent = withRouter(UserContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);