package com.example.demo.service;

import com.example.demo.model.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {

    public List<Animal> getAnimals();
    public Animal addAnimal(Animal animal);
    public void deleteAnimal(int id);
}
