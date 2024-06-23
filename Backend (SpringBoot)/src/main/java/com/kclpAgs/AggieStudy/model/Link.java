package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Links")
public class Link {

    @Id
    private String id;

    private String type;
    private String description;
    private String url;
    private String courseId;

    public Link(){}

    public Link(String type, String description, String url, String courseId) {
        this.type = type;
        this.description = description;
        this.url = url;
        this.courseId = courseId;
    }

}
