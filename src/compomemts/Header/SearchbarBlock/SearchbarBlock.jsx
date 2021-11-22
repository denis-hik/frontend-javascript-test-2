import React, {useState} from "react";
import {Form, Image} from "react-bootstrap";

const SearchbarBlock = (props) => {

    const [input, setInput] = useState('');

    return (
        <div style={{display: 'flex'}}>
            <Form.Control value={input} onChange={(e) => setInput(e.target.value)} size="lg" type="text" placeholder="Book name.."/>
            <Image src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" rounded onClick={() => props.onClick(input)} />
        </div>
    )
};

export default SearchbarBlock;