import React from "react";
import BookItem from "./BookItem/BookItem";

import style from './BooksGrid.module.css';

const BooksGrid = (props) => {

    return (
        <div className={style.body}>
            {props.list ? props.list.map((data) => (
                <BookItem
                title={data.volumeInfo.title}
                image={data.volumeInfo.imageLinks ?
                    data.volumeInfo.imageLinks.smallThumbnail :
                    false
                }
            />
            )) : null}
        </div>
    )
};
export default BooksGrid;