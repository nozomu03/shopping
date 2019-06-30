import React, {Component} from 'react';
import {action, observable} from "mobx";
import axios from "axios";

class UserStore{
    static __instance = null;
    static getInstance(){
        if(UserStore.__instance == null){
            UserStore.__instance = new UserStore();
        }
        return UserStore.__instance;
    }
    @observable item = null;
    @action login = async(account, pw) => {
        try{
            let response = await  axios({
               url: "http://localhost:8080/login",
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: "post",
                data: {
                   "account" : account,
                    "pw" : pw
                }
            });
            console.log("response: " +response)
        }catch (ex) {
            alert(ex.toString());
        }
    }

    @action addBasket = async(id, data) => {
        let response;
        try{
            response = await  axios({
                url: "http://localhost:8080/addBasket/"+id,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: "post",
                data: JSON.stringify(data)
            });
            alert("추가되었습니다");
        }catch(ex) {
            alert("이미 추가된 상품입니다.");
        }
    }

    @action join = async(account, pw, adress, email, hp, hpn, name, postcode) => {
        try{
            let response = await  axios({
                url: "http://localhost:8080/join",
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: "post",
                data: {
                    "account" : account,
                    "pw" : pw,
                    "adress" : adress,
                    "email": email,
                    "hp" : hp,
                    "hpn" : hpn,
                    "name": name,
                    "postcode" : postcode
                }
            });
            if(response.data){
                alert("등록");
                window.location.assign("/");
            }
            else {
                alert("이미 등록된 ID");
            }
            //if(response.status == 200)
            //    alert("등록됨");
            //else if(response.status == 304)
             //   alert("중복 ID/휴대전화 번호");

        }catch(ex){
            alert(ex.toString());
        }
    }

    @action getBasket = async(id) =>{
        try {
            let response = await axios({
                url: "http://localhost:8080/getBasket/" + id,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: "get"
            });
            return response.data;
        }catch(ex){
            alert(ex.toString());
        }
    }
    @action deleteBasket = async(id, data) => {
        try {
            let response = await axios({
                url: "http://localhost:8080/deleteBasket/" + id,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: "delete",
                data : JSON.stringify(data)
            });
            return response.data;
        }catch(ex){
            alert(ex.toString());
        }

    }
}

export default UserStore.getInstance();