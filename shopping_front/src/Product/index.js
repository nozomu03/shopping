import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import "./product.scss"

@inject("stores")
@observer
class index extends Component {
    state = {
        "item": ""
    }

    itemChange = (result) => {
        this.setState({
            item: result
        });
        console.log(this.state.item);
    }

    Back(){
        window.history.back();
    }

    componentDidMount() {
        let id = window.location.href;
        id = id.substring(id.lastIndexOf("/")+1);
        console.log(id);
        let temp = this.props.stores.productstore.getSome(id);
        temp.then((result) => {
            this.itemChange(result.data);
        });
    }
    render() {
        let item = this.state.item;
        console.log(item)
        return(
            <div id={"content"}>
                <div>아이디: {item.id}</div>
                <div>카테고리: {item.category}</div>
                <div>제품명: {item.name}</div>
                <div>내용: {item.content}</div>
                <div>판매자: {item.creater}</div>
                <div>정가: {item.price}</div>
                <div>판매가: {item.real_price}</div><br/>
                <div>설명</div>
                <div>{item.inform}</div>
                <button>장바구니</button><br/>
                <button onClick={()=>this.Back()}>돌아가기</button>
            </div>
        );
    }
}

export default index;