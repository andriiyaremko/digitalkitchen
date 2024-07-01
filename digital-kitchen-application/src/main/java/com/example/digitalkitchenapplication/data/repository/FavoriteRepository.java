package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Favorite;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FavoriteRepository extends CrudRepository<Favorite, UUID> {
    Optional<Favorite> findByRecipeIdAndPersonId(UUID recipeId, UUID personId);

    Optional<List<Favorite>> findAllByPersonId(UUID recipeId);
}
