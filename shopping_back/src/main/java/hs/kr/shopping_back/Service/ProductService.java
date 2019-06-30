package hs.kr.shopping_back.Service;

import hs.kr.shopping_back.Domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> GetAllProduct();
    Product GetProoduct(Long id);
    Product[] threeP();
    List GetCategory(String cate);
  //  boolean UploadProduct(Product p);
  //  byte[] GetImage();
//    boolean UploadImage(Product p);
}
