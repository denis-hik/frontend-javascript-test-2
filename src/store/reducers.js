import {configRequest} from "../configs/config-redux";
import {setBookList} from "./actions";
import store from "./store";
import {configAPI} from "../configs/config-api";

export function reducer(state, action) {

    const getDataBook = () => {
        try {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.find}${state.filter ? '+subject:' + state.filter : ''}&startIndex=${state.startIndex}&maxResults=30&orderBy=${state.type}&key=${configAPI.apiKey}`).then(
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

            if (state.concat) {
                //объединение два массива в один
                state.data.items = [...state.data.items, ...action.data.items]
                state.concat = false
            } else {
                state.data = action.data;
                state.startIndex = 0
            }
            return state

        //Вызывается, когда нажали поиск
        case configRequest.setSearch:
            //меняем запрос на поисковой запрос
            if (action.data == '') {
                state.find = 'all'
            }else {
                state.find = action.data;
            }
            //Запрашиваем заново данные
            getDataBook();
            return state

        //Вызывается, когда меняют сортировку
        case configRequest.setSort:
            //меняем запрос на сортировку
            state.type = action.data;
            //Запрашиваем заново данные
            getDataBook();
            return state;

        //Вызывается при запросе на прогрузку езе +30 книг
        case configRequest.moreBook:
            state.concat = true;
            //Теперь книги будут загружаться с 30 позиции
            state.startIndex = state.startIndex + 30;
            getDataBook();
            return state;

        case configRequest.setFilter:
            //меняем запрос на тип
            if (action.data !== 'all') {
                state.filter = action.data;
            }else {
                state.filter = false;
            }
            //Запрашиваем заново данные
            getDataBook();
            return state;

        //ОТкрывает панель с книгой
        case configRequest.setShowBook:
            state.showBook = state.data.items[action.data];
            return state;

        default:
            return state;
    }
}