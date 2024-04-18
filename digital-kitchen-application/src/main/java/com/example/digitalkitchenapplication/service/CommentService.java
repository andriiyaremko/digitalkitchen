package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Comment;

import java.util.UUID;

public interface CommentService {
    Iterable<Comment> findByRecipeId(UUID recipeId);

    Comment save(Comment comment);

    void deleteById(UUID id);
}
