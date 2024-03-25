package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Product;
import java.util.Optional;
import java.util.UUID;

public interface ProductService {
    Iterable<Product> findAll();

    Optional<Product> findById(UUID id);

    Optional<Iterable<Product>> findByCategoryId(UUID id);

    Product save(Product product);

    void deleteById(UUID id);
}
