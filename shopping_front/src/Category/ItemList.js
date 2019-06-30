import React from 'react';
import {Link} from "react-router-dom";

const ItemList = (props) => {
    let {item} = props;
    let link = `product/view/${item.id}`;
    return (
        <div className={"row"} id={"not"}>
            <span className={"cell col1"}><Link to={link}>{item.id}</Link></span>
            <span className={"cell col2"}><Link to={link}>{item.name}</Link></span>
            <span className={"cell col3"}><Link to={link}>{item.real_price}</Link></span>
            <span className={"cell col4"}><Link to={link}>{item.category}</Link></span>
        </div>
    );
};

export default ItemList;