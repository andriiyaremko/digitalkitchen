package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Recipe;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RecipeService {

    Iterable<Recipe> findAll();

    Recipe save(Recipe recipe);

    Optional<Recipe> findById(UUID id);

    void deleteById(UUID id);

    List<Recipe> findByNameAndCategoryId(String name, UUID categoryId);
}
