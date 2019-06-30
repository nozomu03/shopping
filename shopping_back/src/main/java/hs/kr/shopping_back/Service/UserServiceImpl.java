package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.BasketAttach;
import hs.kr.shopping_back.Domain.Product;
import hs.kr.shopping_back.Domain.User;
import hs.kr.shopping_back.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @PostConstruct
    void AddUPost(){
        this.ur.save(new User("1", "1", "1", "1", "1", "1", "1", "1"));
        this.ur.save(new User("2", "2", "1", "1", "1", "2", "1", "1"));
    }

    @Autowired
    UserRepository ur;

    @Override
    public boolean Join(User u) {
        if(this.ur.findByAccount(u.getAccount()).isPresent())
            return false;
        this.ur.save(u);
        return true;
    }

    @Override
    public boolean Login(User u) {
        Optional<User> find = this.ur.findByAccount(u.getAccount());
        if(find.isPresent()){
            if(find.get().getPw().equals(u.getPw())) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean Edit(User u) {
        this.ur.save(u);
        System.out.print("진입");
        return true;
    }

    @Override
    public List GetAll() {
        return this.ur.findAll();
    }

    @Override
    public boolean SetBasket(String account, BasketAttach b) {
        Optional<User> find =  this.ur.findByAccount(account);
        if(find.isPresent()){
            User temp = find.get();
            List<BasketAttach> basket = temp.getBasketet();
            basket.add(b);
            temp.setBasketet(basket);
            this.ur.save(temp);
            return true;
        }
        return false;
    }

    @Override
    public List GetBasket(String account) {
        Optional<User> find = this.ur.findByAccount(account);
        if(find.isPresent()){
            return find.get().getBasketet();
        }
        return null;
    }

    @Override
    public boolean DeleteBasket(String account, BasketAttach b) {
        Optional<User> find = this.ur.findByAccount(account);
        if(find.isPresent()){
            List basket = find.get().getBasketet();
            basket.remove(b);
            find.get().setBasketet(basket);
            this.ur.save(find.get());
            return true;
        }
        return false;
    }
}
