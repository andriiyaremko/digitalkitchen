package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Comment;
import com.example.digitalkitchenapplication.data.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;

    public Iterable<Comment> findByRecipeId(UUID recipeId){
        return commentRepository.findByRecipeId(recipeId);
    }

    @Override
    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public void deleteById(UUID id) {
        commentRepository.deleteById(id);
    }
}
