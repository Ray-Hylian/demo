package com.example.demo.controller;

import com.example.demo.model.Animal;
import com.example.demo.service.AnimalService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="animals")
@CrossOrigin("*")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping(path="/all")
    public ResponseEntity<List<Animal>> getAll(){
        List<Animal> animals = animalService.getAnimals();
        return ResponseEntity.ok(animals);
    }

    @PostMapping
    public ResponseEntity<Animal> createAnimal(@RequestBody Animal animal){
        Animal createdAnimal = animalService.addAnimal(animal);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAnimal);
    }
}
