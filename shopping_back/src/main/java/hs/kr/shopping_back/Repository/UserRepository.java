package hs.kr.shopping_back.Repository;

import hs.kr.shopping_back.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByAccount(String account);
    Optional<User> findByPw(String pw);
}
