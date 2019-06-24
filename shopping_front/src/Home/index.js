import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Store from "../Stores"

@inject("stores")
@observer
class Index extends Component {
    state={
        "items" : ""
    }
    componentDidMount() {
        this.props.stores.productstore.getThree();
    }

    testFunc(){
     //   console.log(Store.productstore.getThree());
    }

    render() {
        let p = this.props.stores.productstore;
       // console.log(p.items.target.value);
        return (
            <div>
                <header>
                    <h3>xx에 오신 것을 환영합니다.</h3>
                </header>
                <section>
                    <p>상품 목록</p>
                </section>
            </div>
        );
    }
}

export default Index;