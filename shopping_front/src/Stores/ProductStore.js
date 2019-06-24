import React, {Component} from 'react';
import {action, observable} from "mobx";
import axios from "axios";

class ProductStore extends Component {
    static __instance = null;
    static getInstance(){
        if(ProductStore.__instance == null){
            ProductStore.__instance = new ProductStore();
        }
        return ProductStore.__instance;
    }
    @observable items = null;
    @action getThree = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/product/get/three',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000
            });
            if(response.status == 200){
                this.items = response.data;
            }
        }catch(ex){
            alert(ex.toString());
        }
    }
}

export default ProductStore.getInstance();