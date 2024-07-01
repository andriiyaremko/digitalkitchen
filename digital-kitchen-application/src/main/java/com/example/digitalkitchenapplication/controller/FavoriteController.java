package com.example.digitalkitchenapplication.controller;

import com.example.digitalkitchenapplication.data.model.Favorite;
import com.example.digitalkitchenapplication.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/recipe/favorite")
@RequiredArgsConstructor
public class FavoriteController {
    private final FavoriteService favoriteService;

    @PostMapping
    Favorite create(@RequestBody Favorite entity){
        return favoriteService.create(entity);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable UUID id){
        favoriteService.delete(id);
    }

    @GetMapping("/{personId}")
    List<Favorite> findByPerson(@PathVariable UUID personId){
        return favoriteService.findByPersonId(personId);
    }
}
