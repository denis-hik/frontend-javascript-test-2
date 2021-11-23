import React from "react";
import BookItem from "./BookItem/BookItem";

import style from './BooksGrid.module.css';
import store from "../../../store/store";
import {setShowBook} from "../../../store/actions";

const BooksGrid = (props) => {

    const itemOnClick = (index) => {
        store.dispatch(setShowBook(index));
    }

    return (
        <div className={style.body}>
            {props.list ? props.list.map((data, i) => (
                <BookItem
                    onClick={() => itemOnClick(i)}
                    key={i}
                    id={i}
                    athor={data.volumeInfo.authors ? data.volumeInfo.authors : ''}
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