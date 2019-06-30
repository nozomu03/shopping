import React from 'react';
import Store from "../Stores"
import {Link} from "react-router-dom";

const ItemList = (props) => {
    let {item} = props;
    let link = `product/view/${item.id}`;

    function Delete(id, name){
        let data = new Object();
        data.id = id;
        data.name = name;
        Store.userstore.deleteBasket(localStorage.account, data);
        window.location.reload();
    }

    return (
        <div className={"row"} id={"not"}>
            <span className={"cell col1"}><Link to={link}>{item.id}</Link></span>
            <span className={"cell col2"}><Link to={link}>{item.name}</Link></span>
            <button onClick={()=>Delete(item.id, item.name)}>삭제</button>
        </div>
    );
};

export default ItemList;