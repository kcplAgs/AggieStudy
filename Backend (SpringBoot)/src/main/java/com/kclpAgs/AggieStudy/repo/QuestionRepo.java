package com.kclpAgs.AggieStudy.repo;

import com.kclpAgs.AggieStudy.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;


@RepositoryRestResource
public interface QuestionRepo extends JpaRepository<Question, UUID> {
}
