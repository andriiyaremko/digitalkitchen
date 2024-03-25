package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Recipe;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface RecipeRepository extends CrudRepository<Recipe, UUID> {
}
