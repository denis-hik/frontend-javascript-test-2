import React, {useState} from "react";
import {Form, Image} from "react-bootstrap";

const SearchbarBlock = (props) => {

    const [input, setInput] = useState('');

    const lisanerEnter = (e) => {
        var ev = e || window.event;
        var key = ev.keyCode;
        if (key === 13)
        {
            props.onClick(input);
        }
    }
    return (
        <div style={{display: 'flex', padding: '10px'}}>
            <Form.Control onKeyDown={(e) => lisanerEnter(e)} value={input} onChange={(e) => setInput(e.target.value)} size="lg" type="text" placeholder="Book name.."/>
            <Image height={'50px'} src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg" rounded onClick={() => props.onClick(input)} />
        </div>
    )
};

export default SearchbarBlock;