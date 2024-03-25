package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Ingredient;

import java.util.Optional;
import java.util.UUID;

public interface IngredientService {

    Optional<Iterable<Ingredient>> findAllByRecipeId(UUID id);
}
