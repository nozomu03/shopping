import React, {Component} from 'react';
import Store from "../Stores";
import {observer, inject} from "mobx-react";

@inject("stores")
@observer
class Index extends Component {

    state = {
        account : "",
        pw : "",
        address : "",
        email : "",
        hp : "",
        hpn : "",
        name : "",
        postcode : "",
        code : ""
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

    changeAdress = (e) => {
        console.log(this.state.address);
        this.setState({
            ...this.state,
            address: e.target.value
        })
    };

    changeEmail = (e) => {
        console.log(this.state.email);
        this.setState({
            ...this.state,
            email: e.target.value
        })
    };

    changeHp= (e) => {
        console.log(this.state.hp);
        this.setState({
            ...this.state,
            hp: e.target.value
        })
    };

    changeHpn = (e) => {
        console.log(this.state.hpn);
        this.setState({
            ...this.state,
            hpn: e.target.value
        })
    };

    changeName = (e) => {
        console.log(this.state.name);
        this.setState({
            ...this.state,
            name: e.target.value
        })
    };

    changePostcode = (e) => {
        console.log(this.state.postcode);
        this.setState({
            ...this.state,
            postcode: e.target.value
        })
    };

    join(){
       let temp = Store.userstore.join(this.state.account, this.state.pw, this.state.address, this.state.email, this.state.hp, this.state.hpn, this.state.name, this.state.postcode);
       console.log("temp: " + temp.item);
    }

    render() {
        return (
            <div>
                <input type={"text"} onChange={this.changeAccount} values={this.state.account}
                placeholder="아이디"/><br/>
                <input type="password" onChange={this.changePw} values={this.state.pw} placeholder="패스워드"/><br/>
                <input type="text" onChange={this.changeAdress} values={this.state.address} placeholder="주소"/><br/>
                <input type="text" onChange={this.changeEmail} values={this.state.email} placeholder="이메일"/><br/>
                <input type="text" onChange={this.changeHp} values={this.state.hp} placeholder="휴대전화"/><br/>
                <input type="text" onChange={this.changeHpn} values={this.state.hpn} placeholder="집전화"/><br/>
                <input type="text" onChange={this.changeName} values={this.state.name} placeholder="이름"/><br/>
                <input type="text" onChange={this.changePostcode} values={this.state.postcode} placeholder="우편번호"/><br/>
                <button onClick={() => this.join()}>확인</button>
            </div>
        );
    }
}

export default Index;