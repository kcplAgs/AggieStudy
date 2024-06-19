package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Resources")
public class Resource {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String type;
    private String description;
    private String url;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

}
