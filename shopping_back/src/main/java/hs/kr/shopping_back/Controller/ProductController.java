package hs.kr.shopping_back.Controller;

import hs.kr.shopping_back.Domain.Product;
import hs.kr.shopping_back.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService ps;

    @GetMapping("product/getAll")
    public List GetAll(){
        List temp = this.ps.GetAllProduct();
        return temp;
    }

    @GetMapping("product/get/{id}")
    public Product Get(@PathVariable Long id){
        return this.ps.GetProoduct(id);
    }

    @GetMapping("product/get/three")
    public Product[] Three(){
        return this.ps.threeP();
    }
}
