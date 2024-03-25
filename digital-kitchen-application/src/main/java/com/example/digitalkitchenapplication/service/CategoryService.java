package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Category;

import java.util.UUID;

public interface CategoryService {

    Iterable<Category> findAll();

    Category save(Category category);

    void deleteById(UUID id);
}
