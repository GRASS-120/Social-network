import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div className={style.pagination}>
            {pages.map(page => {
                return <span className={currentPage === page && style.selected_page} onClick={(event) => {onPageChange(page)}}>{page}</span>
            })}
        </div>
    )
}

export default Paginator