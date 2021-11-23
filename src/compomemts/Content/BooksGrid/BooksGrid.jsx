import React from "react";
import BookItem from "./BookItem/BookItem";

import style from './BooksGrid.module.css';

const BooksGrid = (props) => {

    return (
        <div className={style.body}>
            {props.list ? props.list.map((data) => (
                <BookItem
                    id={data.id}
                    athor={data.volumeInfo.authors ? data.volumeInfo.authors.join() : ''}
                    title={data.volumeInfo.title}
                    image={data.volumeInfo.imageLinks ?
                        data.volumeInfo.imageLinks.smallThumbnail :
                        false
                    }
                    tag={data.volumeInfo.categories ? data.volumeInfo.categories[0] : ''}
                />
            )) : null}
        </div>
    )
};
export default BooksGrid;