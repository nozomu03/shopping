import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import "./product.scss"

@inject("stores")
@observer
class index extends Component {
    state = {
        "item": "",
        "id" : ""
    }

    itemChange = (result) => {
        this.setState({
            item: result
        });
        console.log(this.state.item);
    }

    InBasket(name, real_price, category){
        let data = new Object();
        data.id = this.state.id;
        data.name = name;
        data.rea_price = real_price;
        data.category = category;
        this.props.stores.userstore.addBasket(localStorage.account, data);
    }

    Back(){
        window.history.back();
    }

    componentDidMount() {
        let id = window.location.href;
        id = id.substring(id.lastIndexOf("/")+1);
        this.state.id = id;
        console.log(this.state.id);
        let temp = this.props.stores.productstore.getSome(id);
        temp.then((result) => {
            this.itemChange(result.data);
        });
    }
    render() {
        let item = this.state.item;
        console.log(item)
        if(localStorage.login == null) {
            return (
                <div id={"content"}>
                    <div>아이디: {item.id}</div>
                    <div>카테고리: {item.category}</div>
                    <div>제품명: {item.name}</div>
                    <div>내용: {item.content}</div>
                    <div>판매자: {item.creater}</div>
                    <div>정가: {item.price}</div>
                    <div>판매가: {item.real_price}</div>
                    <br/>
                    <div>설명</div>
                    <div>{item.inform}</div>
                    <button onClick={() => this.Back()}>돌아가기</button>
                </div>
            );
        }else {
            return (
                <div id={"content"}>
                    <div>아이디: {item.id}</div>
                    <div>카테고리: {item.category}</div>
                    <div>제품명: {item.name}</div>
                    <div>내용: {item.content}</div>
                    <div>판매자: {item.creater}</div>
                    <div>정가: {item.price}</div>
                    <div>판매가: {item.real_price}</div>
                    <br/>
                    <div>설명</div>
                    <div>{item.inform}</div>
                    <button onClick={() => this.InBasket(item.name, item.real_price, item.catagory)}>장바구니</button>
                    <br/>
                    <button onClick={() => this.Back()}>돌아가기</button>
                </div>
            );
        }
    }
}

export default index;