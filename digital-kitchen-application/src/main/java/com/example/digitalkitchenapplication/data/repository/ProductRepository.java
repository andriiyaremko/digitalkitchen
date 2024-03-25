package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends CrudRepository<Product, UUID> {

    Optional<Iterable<Product>> findByCategoryId(UUID uuid);
}
