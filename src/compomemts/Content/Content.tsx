import store from "../../store/store";
import LoadingGrid from "./LoadingGrid/LoadingGrid";
import BooksGrid from "./BooksGrid/BooksGrid";
import MoreBookBlock from "./MoreBookBlock/MoreBookBlock";
import {moreBook} from "../../store/actions";

interface dataBooksI {
    totalItems: number | bigint,
    items?: object,
    error?: object,
}

const Content = () => {

    const dataBooks: dataBooksI = store.getState().data;
    const posItems: string = store.getState().startIndex
    const showMoreButton: boolean = (dataBooks ? dataBooks.totalItems > (posItems + 30) : false);
    console.log(dataBooks.items)

    const onMoreBlock = () => {
        store.dispatch(moreBook())
    }

    return (
        <div>
            {dataBooks ? <div>
                <h4>{dataBooks.totalItems ? `Founded:  ${dataBooks.totalItems}` : `Error ${dataBooks.error.message}`}</h4>
                <BooksGrid list={dataBooks.items ? dataBooks.items : false}/>
                    {showMoreButton ? <MoreBookBlock onClick={onMoreBlock} /> : null}
            </div> :
                <LoadingGrid/>}
        </div>
    )
};

export default Content;