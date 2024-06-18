package com.clpAgs.AggieStudy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "TamuClass")
public class TamuClass {
    @Id
    private long id;
    private String name;
}
