package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Product;
import com.example.digitalkitchenapplication.data.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findById(UUID id) {
        return productRepository.findById(id);
    }

    @Override
    public Optional<Iterable<Product>> findByCategoryId(UUID id) {
        return productRepository.findByCategoryId(id);
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteById(UUID id) {
        productRepository.deleteById(id);
    }
}
