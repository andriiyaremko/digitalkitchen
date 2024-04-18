package com.example.digitalkitchenapplication.data.repository;

import com.example.digitalkitchenapplication.data.model.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CommentRepository extends CrudRepository<Comment, UUID> {
    Iterable<Comment> findByRecipeId(UUID recipeId);
}
