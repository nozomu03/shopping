package hs.kr.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHpn() {
        return hpn;
    }

    public void setHpn(String hpn) {
        this.hpn = hpn;
    }

    public String getHp() {
        return hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

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

    public User() {
    }
}
