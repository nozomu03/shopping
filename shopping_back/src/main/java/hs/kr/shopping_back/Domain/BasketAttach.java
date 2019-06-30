package hs.kr.shopping_back.Domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class BasketAttach {
    @Id
    Long id;
    String name;
}
