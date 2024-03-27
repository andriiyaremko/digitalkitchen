package com.example.digitalkitchenapplication.service;

import com.example.digitalkitchenapplication.data.model.Recipe;
import com.example.digitalkitchenapplication.data.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecipeServiceImpl implements RecipeService{
    private final RecipeRepository recipeRepository;

    @Override
    public Iterable<Recipe> findAll() {
        return recipeRepository.findAll();
    }

    @Override
    public void deleteById(UUID id) {
        recipeRepository.deleteById(id);
    }

    @Override
    public Recipe save(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Recipe update(Recipe recipe){
        return recipeRepository.save(recipe);
    }

    @Override
    public Optional<Recipe> findById(UUID id){
        return recipeRepository.findById(id);
    }
}
