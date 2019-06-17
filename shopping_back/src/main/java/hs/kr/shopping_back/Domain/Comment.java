package hs.kr.shopping_back.Domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Entity
public class Comment {
    @Id
    @GeneratedValue
    private Long id;
    private String account;
    private String content;
    @CreationTimestamp
    private LocalDateTime upload;
}
