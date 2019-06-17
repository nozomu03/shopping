package hs.kr.shopping_back.Domain;

import lombok.Data;
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
    private Byte[] image;
}
