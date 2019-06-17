package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.User;
import hs.kr.shopping_back.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository ur;

    @Override
    public boolean Join(User u) {
        this.ur.save(u);
        return true;
    }

    @Override
    public boolean Login(User u) {
        if(this.ur.findByAccount(u.getAccount()).isPresent()){
            if(this.ur.findByPw(u.getPw()).isPresent()) {
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
}
