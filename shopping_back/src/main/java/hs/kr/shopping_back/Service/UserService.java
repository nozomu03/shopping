package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.User;

import java.util.List;

public interface UserService {
    boolean Join(User u);
    boolean Login(User u);
    boolean Edit(User u);
    List GetAll();
}
