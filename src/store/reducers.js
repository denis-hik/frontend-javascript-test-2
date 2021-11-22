import {configRequest} from "../configs/config-redux";
import {setBookList} from "./actions";
import store from "./store";
import {configAPI} from "../configs/config-api";

export function reducer(state, action) {

    const getDataBook = () => {
        try {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.find}&maxResults=30&orderBy=${state.type}&key=${configAPI.apiKey}`).then(
                res => res.json()
            ).then(
                (result) => {
                    result ? store.dispatch(setBookList(result)) : alert('FAIL')
                }
            )

        } catch (e) {
            alert(e.toString())
        }
    }

    switch (action.type) {
        //Запрос книг
        case configRequest.getBookList:
            getDataBook();
            state.data = false
            return state

        //Когда функция нашла книги, то она добавляет в state книги
        case configRequest.setBookList:
            state.data = action.data;
            return state

        //Вызывается, когда нажали поиск
        case configRequest.setSearch:
            //меняем запрос на поисковой запрос
            state.find = action.data;
            //Запрашиваем заного данные
            getDataBook();
            return state

        default:
            return state;
    }
}