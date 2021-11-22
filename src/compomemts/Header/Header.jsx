import React from "react";
import SearchbarBlock from "./SearchbarBlock/SearchbarBlock";
import style from './Header.module.css';
import TitleBlock from "./TitleBlock/TitleBlock";
import TypesBlock from "./TypesBlock/TypesBlock";
import store from "../../store/store";
import {setSearch} from "../../store/actions";

const Header = (props) => {

    const onSearch = (text) => {
        store.dispatch(setSearch(text));
    }

    return (
        <div className={style.body}>
            <TitleBlock />
            <SearchbarBlock onClick={onSearch} />
            <TypesBlock />
        </div>
    )
};

export default Header;