package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Exams")

public class Exam {
    @Id
    String id;

    String name;
    String description;

    private String courseId;

    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;

    public Exam(){}

    public Exam(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}
