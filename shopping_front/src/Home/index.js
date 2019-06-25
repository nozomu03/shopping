import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Store from "../Stores"
import ItemList from "./ItemList";
import "./home.scss";

@inject("stores")
@observer
class Index extends Component {
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
        let temp = this.props.stores.productstore.getThree();
        temp.then((result) => {
            console.log(result.data);
            this.itemChange(result.data);
        });
    }


    testFunc(){
     //   console.log(Store.productstore.getThree());
    }

    render() {
        const items = this.state.items;
        let p = this.props.stores.productstore;
        console.log(p.items);
        return (
            <div id={"every"}>
                <header>
                    <h3>xx에 오신 것을 환영합니다.</h3>
                </header>
                <section>
                    <p>상품 목록</p>
                    <div id={"table"}>
                        <div className={"row"} id={"first"}>
                            <span className={"cell col1"}>아이디</span>
                            <span className={"cell col2"}>상품명</span>
                            <span className={"cell col3"}>가격</span>
                            <span className={"cell col4"}>카테고리</span>
                        </div>
                        {items.map(item => <ItemList item={item}/>)}
                    {/*    1241242*/}
                    </div>
                </section>
            </div>
        );
    }
}

export default Index;