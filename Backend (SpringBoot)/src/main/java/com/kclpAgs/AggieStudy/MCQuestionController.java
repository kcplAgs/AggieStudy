package com.kclpAgs.AggieStudy;


import com.kclpAgs.AggieStudy.model.MCQuestion;
import com.kclpAgs.AggieStudy.service.MCQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/mc-questions")
public class MCQuestionController {

    @Autowired
    private MCQuestionService MCQuestionService;

    @GetMapping
    public List<MCQuestion> getAllQuestions() {
        return MCQuestionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public MCQuestion getQuestionById(@PathVariable UUID id) {
        return MCQuestionService.getQuestionById(id);
    }
}
