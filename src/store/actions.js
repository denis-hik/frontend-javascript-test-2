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

export const setSort = (text) => {
    return {
        type: configRequest.setSort,
        data: text,
    }
}

export const moreBook = () => {
    return {
        type: configRequest.moreBook,
    }
}

export const setFilter = (text) => {
    return {
        type: configRequest.setFilter,
        data: text,
    }
}

export const setShowBook = (index) => {
    return {
        type: configRequest.setShowBook,
        data: index,
    }
}