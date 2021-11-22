import {configRequest} from "../configs/config-redux";

export const getBookList = () => {
    return {
        type: configRequest.getBookList,
    }
}

export const setBookList = (data) => {
    return {
        type: configRequest.setBookList,
        data: data,
    }
}

export  const setSearch = (text) => {
    return {
        type: configRequest.setSearch,
        data: text,
    }
}