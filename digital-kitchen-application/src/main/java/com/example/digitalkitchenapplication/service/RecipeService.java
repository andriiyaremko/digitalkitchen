package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Recipe;

import java.util.UUID;

public interface RecipeService {

    Iterable<Recipe> findAll();

    Recipe save(Recipe recipe);

    Recipe update(Recipe recipe);

    void deleteById(UUID id);
}
