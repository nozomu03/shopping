package hs.kr.shopping_back.Repository;

import hs.kr.shopping_back.Domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String cate);
}
