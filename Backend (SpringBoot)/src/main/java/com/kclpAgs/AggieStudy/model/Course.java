package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Courses")
public class Course {

    @Id
    private String id;

    private String name;
    private String description;

    public Course(){}

    public Course(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
