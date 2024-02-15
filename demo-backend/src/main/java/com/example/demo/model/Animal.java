package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name="animals")
@Entity
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String name;
}
