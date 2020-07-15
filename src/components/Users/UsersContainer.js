import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/users-reducer';
import * as axios from 'axios'
import Users from './Users';
import style from './Users.module.css';

// let Users = (props) => {

//     let getUsers = () => {
//         if (props.users.length === 0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
//                 props.setUsers(Response.data.items)
//             })
//         }
//     }

//     return <div>
//         <button onClick={getUsers()}>SHOW USERS</button>
//         {
//             props.users.map(u => <div >
//                 <div>
//                     <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
//                     { u.followed ?
//                      <button onClick={ () => {props.unfollow(u.id)} }>UNFOLLOW</button> :
//                      <button onClick={ () => {props.follow(u.id)} }>FOLLOW</button> 
//                     }
//                 </div>
//                 <div>
//                     <div>
//                         <p>{u.name}</p>
//                         <p>{'u.location.country'}</p>
//                         <p>{'u.location.city'}</p>
//                     </div>
//                     <div>
//                         <p>{u.status}</p>
//                     </div>
//                 </div>
//             </div>)
//         }
//     </div>
// }

class UsersContainer extends React.Component {

    // ! конструктор писать не надо, если класс только отрисовывает, все ПО УМОЛЧАНИЮ

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(Response.data.items);
        });
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChange={this.onPageChange}
                      isFetching={this.props.isFetching}
                      toggleIsFetching={this.props.toggleIsFetching}/>
            
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)