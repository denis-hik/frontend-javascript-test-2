import React from "react";
import store from "../../store/store";
import {setShowBook} from "../../store/actions";
import {Image} from "react-bootstrap";

import style from './BookDialog.module.css'

const BookDialog = () => {

    const data: any = store.getState().showBook

    const exitDialog = () => {
        store.dispatch(setShowBook(false))
    }

    return (data ?
        <div className={style.bg} onClick={exitDialog}>
            <div className={style.body} onClick={(e) => e.stopPropagation()}>
                <Image className={style.image} src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.smallThumbnail : ''} />
                <div className={style.des}>
                    <h2 className={style.title}>{data.volumeInfo.title ? data.volumeInfo.title : ''}</h2>
                    <span className={style.tag} >{data.volumeInfo.categories ? data.volumeInfo.categories.join('/') : ''}</span>
                    <span className={style.athor}>Авторы: {data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : ''}</span>
                    <h5 className={style.text}>{data.searchInfo ? data.searchInfo.textSnippet : ''}</h5>
                </div>
            </div>
        </div>
            :
            null
    )
};

export default BookDialog;