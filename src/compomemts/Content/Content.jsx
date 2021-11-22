import React from "react";
import store from "../../store/store";
import LoadingGrid from "./LoadingGrid/LoadingGrid";
import BooksGrid from "./BooksGrid/BooksGrid";

const Content = (props) => {

    const dataBooks = store.getState().data;
    console.log(dataBooks)

    return (
        <div>

            {dataBooks ? <>
                <h4>{dataBooks.totalItems ? `Founded:  ${dataBooks.totalItems}` : `Error ${dataBooks.error.message}`}</h4>
                <BooksGrid list={dataBooks.items ? dataBooks.items : false}/>
            </> :
                <LoadingGrid/>}
        </div>
    )
};

export default Content;