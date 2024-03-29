package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.Product;
import hs.kr.shopping_back.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    @PostConstruct
    void AddUPost(){
        this.rr.save(new Product("1", "WOW", "1", 1, 1, "food", "1"));
        this.rr.save(new Product("1", "WOW", "1", 1, 1, "cloth", "1"));
        this.rr.save(new Product("1", "WOW", "1", 1, 1, "hobby", "1"));
    }

    @Autowired
    private ProductRepository rr;

    @Override
    public List GetAllProduct() {
        List temp = this.rr.findAll();
        return temp;
    }

    @Override
    public Product GetProoduct(Long id) {
        Optional<Product> found =  this.rr.findById(id);
        if(found.isPresent()){
            return found.get();
        }
        else{
            return null;
        }
    }

    @Override
    public Product[] threeP() {
        List<Product> temp = this.rr.findAll();
        Product[] returnable = new Product[3];
        Collections.reverse(temp);
        for(int i = 0; i<3; i++){
            returnable[0] = temp.get(0);
            returnable[1] = temp.get(1);
            returnable[2] = temp.get(2);
        }
        return returnable;
    }

    @Override
    public List GetCategory(String cate) {
        return this.rr.findByCategory(cate);
    }
}
