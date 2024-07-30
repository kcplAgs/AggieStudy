package com.kclpAgs.AggieStudy;


import com.kclpAgs.AggieStudy.model.MCQuestion;
import com.kclpAgs.AggieStudy.model.OpenQuestion;
import com.kclpAgs.AggieStudy.service.MCQuestionService;
import com.kclpAgs.AggieStudy.service.OpenQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/open-questions")
public class OpenQuestionController {

    @Autowired
    private OpenQuestionService openQuestionService;

    @GetMapping
    public List<OpenQuestion> getAllQuestions() {
        return openQuestionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public OpenQuestion getQuestionById(@PathVariable UUID id) {
        return openQuestionService.getQuestionById(id);
    }
}
