import React, {Component} from 'react';
import {observer} from "mobx-react/dist/mobx-react";
import Stores from "../Stores";

@observer
class Index extends Component {
    state = {
        account : "",
        pw : ""
    }

    changeAccount = (e) => {
        console.log(this.state.account);
        this.setState({
            ...this.state,
            account: e.target.value
        })
    };

    changePw = (e) => {
        console.log(this.state.pw);
        this.setState({
            ...this.state,
            pw: e.target.value
        })
    };

    login(){
        if(Stores.userstore.login(this.state.account, this.state.pw)){
            localStorage.setItem("login", "" + true);
            localStorage.setItem("account", this.state.account);
            window.location.reload();
        }
    }
    render() {
        if(!localStorage.login) {
            return (
                <div id={"login"}>
                    <input type={"text"} onChange={this.changeAccount} values={this.state.account}
                           placeholder="아이디"/><br/>
                    <input type="password" onChange={this.changePw} values={this.state.pw} placeholder="패스워드"/>
                    <button onClick={() => this.login()}>로그인</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <span>{localStorage.account}님 로그인 하셨습니다.</span>
                </div>
            );
        }
    }
}

export default Index;