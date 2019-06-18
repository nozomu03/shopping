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
}

export default UserStore.getInstance();