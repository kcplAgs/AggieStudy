package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Courses")
public class Course {

    @Id
    private String id;
    private String name;
}
