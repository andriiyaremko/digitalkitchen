package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Comment;
import com.example.digitalkitchenapplication.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("api/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping("/{recipeId}")
    public Iterable<Comment> getByRecipeId(@PathVariable UUID recipeId){
        return commentService.findByRecipeId(recipeId);
    }

    @PostMapping
    public Comment create(@RequestBody Comment comment){
        return commentService.save(comment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id){
        commentService.deleteById(id);
    }
}
