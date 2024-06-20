package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "Courses")
public class Course {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String description;
    private String name;

    @OneToMany(mappedBy = "course")
    private Set<Resource> resources;
}
