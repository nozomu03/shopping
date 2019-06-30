import React, {Component} from 'react';
import {inject} from "mobx-react";
import ItemList from "../Home/ItemList";

@inject("stores")
class Hobby extends Component {
    state={
        "items" : []
    }

    itemChange = (result) => {
        this.setState({
            items: result
        });
        console.log(this.state.items);
    }

    componentDidMount() {
        let temp = this.props.stores.productstore.getCategory("hobby");
        temp.then((result) => {
            console.log(result.data);
            this.itemChange(result.data);
        });
    }

    render() {
        let items = this.state.items;
        return (
            <div>
                <p>상품 목록</p>
                <div id={"table"}>
                    <div className={"row"} id={"first"}>
                        <span className={"cell col1"}>아이디</span>
                        <span className={"cell col2"}>상품명</span>
                        <span className={"cell col3"}>가격</span>
                        <span className={"cell col4"}>카테고리</span>
                    </div>
                    {items.map(item => <ItemList item={item}/>)}
                </div>
            </div>
        );
    }
}

export default Hobby;