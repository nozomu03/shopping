package hs.kr.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String content;
    private String inform;
    private int price;
    private int real_price;
    private String category;
    private String creater;

    public void setCreater(String creater) {
        this.creater = creater;
    }

    public Product(String name, String content, String inform, int price, int real_price, String category, String creater) {
        this.name = name;
        this.content = content;
        this.inform = inform;
        this.price = price;
        this.real_price = real_price;
        this.category = category;
        this.creater = creater;
    }

    public Product(String name) {
        this.name = name;
    }

    public Product() {
    }
}
