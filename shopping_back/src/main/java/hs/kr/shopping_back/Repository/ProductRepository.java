package hs.kr.shopping_back.Repository;

import hs.kr.shopping_back.Domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
