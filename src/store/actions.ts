import {configRequest} from "../configs/config-redux";

export const getBookList = () => {
    return {
        type: configRequest.getBookList,
    }
}

export const setBookList = (data: string) => {
    return {
        type: configRequest.setBookList,
        data: data,
    }
}

export const setSearch = (text: string) => ({
    type: configRequest.setSearch,
    data: text,
})

export const setSort = (text: string) => {
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

export const setFilter = (text: string) => {
    return {
        type: configRequest.setFilter,
        data: text,
    }
}

export const setShowBook = (index: boolean | number) => {
    return {
        type: configRequest.setShowBook,
        data: index,
    }
}