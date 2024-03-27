package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Recipe;
import com.example.digitalkitchenapplication.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/recipe")
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping
    public Iterable<Recipe> getCategories(){
        return recipeService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Recipe> getCategoryById(@PathVariable("id") UUID id){
        return recipeService.findById(id);
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe){
        return recipeService.save(recipe);
    }

    @PutMapping
    public Recipe update(@RequestBody Recipe recipe){
        return recipeService.save(recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id){
        recipeService.deleteById(id);
    }
}
