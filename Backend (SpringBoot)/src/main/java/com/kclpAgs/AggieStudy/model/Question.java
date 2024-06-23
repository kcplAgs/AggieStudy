package com.kclpAgs.AggieStudy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Questions")
public class Question {

    @Id
    String id;

    String topic;
    String question;
    String answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exam_id")
    private Exam exam;

    public Question(){}

    public Question(String id, String topic, String question, String answer) {
        this.id = id;
        this.topic = topic;
        this.question = question;
        this.answer = answer;
    }

}
