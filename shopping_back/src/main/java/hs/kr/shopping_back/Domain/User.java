package hs.kr.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, unique = true)
    private String account;
    @Column(nullable = false)
    private String pw;
    private String name;
    private String email;
    private String hpn;
    @Column(unique = true)
    private String hp;
    private String postcode;
    private String adress;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private List<BasketAttach> basketet;

    public User(String account, String pw) {
        this.account = account;
        this.pw = pw;
    }

    public User(String account, String pw, String name, String email, String hpn, String hp, String postcode, String adress) {
        this.account = account;
        this.pw = pw;
        this.name = name;
        this.email = email;
        this.hpn = hpn;
        this.hp = hp;
        this.postcode = postcode;
        this.adress = adress;
    }
}
