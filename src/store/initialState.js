export const initialState = {
    filter: false,
    //Данные книг
    data: false,
    //Поиск по названию
    find: '-',
    //Для начала рендринга
    startIndex: 0,
    //Тип
    type: 'relevance',
    //Для прогрузки больше книг
    concat: false,
    //сюда добавляется индекс книги из массива для показа подробного
    showBook: false,
}