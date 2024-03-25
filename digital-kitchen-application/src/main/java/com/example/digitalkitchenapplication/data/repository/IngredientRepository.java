package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Ingredient;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface IngredientRepository extends CrudRepository<Ingredient, UUID> {
    Optional<Iterable<Ingredient>> findAllByRecipeId(UUID id);

}
