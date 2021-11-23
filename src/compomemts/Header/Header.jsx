import React from "react";
import SearchbarBlock from "./SearchbarBlock/SearchbarBlock";
import style from './Header.module.css';
import TitleBlock from "./TitleBlock/TitleBlock";
import TypesBlock from "./TypesBlock/TypesBlock";
import store from "../../store/store";
import {setFilter, setSearch, setSort} from "../../store/actions";

const Header = (props) => {

    const onSearch = (text) => {
        store.dispatch(setSearch(text));
    }

    const onSort = (text) => {
        store.dispatch(setSort(text));
    }

    const onFilter = (text) => {
        store.dispatch(setFilter(text))
    }

    return (
        <div className={style.body}>
            <TitleBlock />
            <SearchbarBlock onClick={onSearch} />
            <TypesBlock onFilter={onFilter} onSort={onSort}/>
        </div>
    )
};

export default Header;