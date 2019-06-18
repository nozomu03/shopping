package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.User;
import hs.kr.shopping_back.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
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
}
