package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.BasketAttach;
import hs.kr.shopping_back.Domain.Product;
import hs.kr.shopping_back.Domain.User;

import java.util.List;

public interface UserService {
    boolean Join(User u);
    boolean Login(User u);
    boolean Edit(User u);
    List GetAll();
    boolean SetBasket(String account, BasketAttach b);
    List GetBasket(String account);
    boolean DeleteBasket(String acount, BasketAttach b);
}
