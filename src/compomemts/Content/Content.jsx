import React from "react";
import store from "../../store/store";
import LoadingGrid from "./LoadingGrid/LoadingGrid";
import BooksGrid from "./BooksGrid/BooksGrid";
import MoreBookBlock from "./MoreBookBlock/MoreBookBlock";
import {moreBook} from "../../store/actions";

const Content = (props) => {

    const dataBooks = store.getState().data;
    const posItems = store.getState().startIndex;
    const showMoreButton = (dataBooks ? dataBooks.totalItems > (posItems + 30) : false);
    console.log(dataBooks.items)

    const onMoreBlock = () => {
        store.dispatch(moreBook())
    }

    return (
        <div>

            {dataBooks ? <>
                <h4>{dataBooks.totalItems ? `Founded:  ${dataBooks.totalItems}` : `Error ${dataBooks.error.message}`}</h4>
                <BooksGrid list={dataBooks.items ? dataBooks.items : false}/>
                    {showMoreButton ? <MoreBookBlock onClick={onMoreBlock} /> : null}
            </> :
                <LoadingGrid/>}
        </div>
    )
};

export default Content;