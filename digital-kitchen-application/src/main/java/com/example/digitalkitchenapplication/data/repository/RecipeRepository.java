package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface RecipeRepository extends CrudRepository<Recipe, UUID> {

    @Query(
        "SELECT " +
        "r FROM Recipe r " +
        "WHERE r.name LIKE %:name% " +
        "AND r.categoryId = :categoryId"
    )
    List<Recipe> findByNameAndCategoryId(@Param("name") String name, @Param("categoryId") UUID categoryId);

}
