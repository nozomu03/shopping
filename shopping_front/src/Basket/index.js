import React, {Component} from 'react';
import ItemList from "./ItemList";
import Store from "../Stores";
import "./home.scss";

class Index extends Component {
    state={
        "items" : []
    }

    componentDidMount() {
        let temp = Store.userstore.getBasket(localStorage.account);
        console.log(temp);
        temp.then((result) => {
            console.log(result);
            this.setState({
                items: result
            });
        });
    }


    testFunc(){
        //   console.log(Store.productstore.getThree());
    }

    render() {
        const items = this.state.items;
        console.log(items);
        if(localStorage.login != null) {
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
                            </div>
                            {items.map(item => <ItemList item={item}/>)}
                            {/*    1241242*/}
                        </div>
                    </section>
                </div>
            );
        }
        else{
            return(
              <h3 id={"every"}>비로그인자 접근 불가</h3>
            );
        }
    }
}

export default Index;