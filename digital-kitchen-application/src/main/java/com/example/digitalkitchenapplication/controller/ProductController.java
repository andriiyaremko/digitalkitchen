package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Product;
import com.example.digitalkitchenapplication.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public Iterable<Product> getCategories(){
        return productService.findAll();
    }

    @PostMapping
    public Product create(@RequestBody Product product){
        return productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id){
        productService.deleteById(id);
    }
}
