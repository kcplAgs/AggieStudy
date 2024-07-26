package com.kclpAgs.AggieStudy;


import com.kclpAgs.AggieStudy.model.Exam;
import com.kclpAgs.AggieStudy.model.Question;
import com.kclpAgs.AggieStudy.repo.ExamRepo;
import com.kclpAgs.AggieStudy.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;
    private ExamRepo examRepository;

    @PostMapping("/add")
    public ResponseEntity<Question> addQuestion(@RequestParam String examId, @RequestBody Question question) {
        Exam exam = examRepository.findById(examId).orElseThrow(() -> new ResourceNotFoundException("Exam not found"));
        question.setExam(exam);
        Question savedQuestion = questionService.saveQuestion(question);
        return ResponseEntity.ok(savedQuestion);
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable UUID id) {
        return questionService.getQuestionById(id);
    }
}
