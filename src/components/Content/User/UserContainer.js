import React from 'react';
import User from './User';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/posts-reducer';
import { withRouter } from 'react-router-dom';

// {postsPage, dispatch}

class UserContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId){
      userId = 2;
    }

    axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(Response => {
        this.props.setUserProfile(Response.data);
    });
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

// const UserContainer = connect

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);