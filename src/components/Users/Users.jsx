import React from 'react';
import style from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/6xQ6_ADKgiQ.jpg'

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

class Users extends React.Component {

    // ! конструктор писать не надо, если класс только отрисовывает, все ПО УМОЛЧАНИЮ

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

        return <div className={style.users}>

        {/* Отображение пользователей */}
         {
            this.props.users.map(u => <div className={style.users_item}>
                <div className={style.left_block}>
                    <img src={ u.photos.small !== null ? u.photos.small : userPhoto} className={style.user_img}/>
                    { u.followed ?
                     <button onClick={ () => {this.props.unfollow(u.id)}} className={style.unfollow_button}>UNFOLLOW</button> :
                     <button onClick={ () => {this.props.follow(u.id)}} className={style.follow_button}>FOLLOW</button> 
                    }
                </div>
                <div className={style.right_block}>
                    <div className={style.user_inf}>
                        <p className={style.name}>{u.name}</p>
                        <p className={style.country}>{'u.location.country'}</p>
                        <p className={style.city}>{'u.location.city'}</p>
                    </div>
                    <div className={style.user_status}>
                        <p>{u.status !== null ? u.status : 'status'}</p>
                    </div>
                </div>
            </div>)
        }

        <div className={style.pagination}>
            {pages.map(page => {
                return <span className={this.props.currentPage === page && style.selected_page} onClick={(event) => {this.onPageChange(page)}}>{page}</span>
            })}
        </div>

    </div>
    }
}

export default Users;