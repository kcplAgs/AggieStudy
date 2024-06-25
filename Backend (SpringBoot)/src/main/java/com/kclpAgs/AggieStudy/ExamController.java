package com.kclpAgs.AggieStudy;

import com.kclpAgs.AggieStudy.model.Exam;
import com.kclpAgs.AggieStudy.model.Question;
import com.kclpAgs.AggieStudy.service.CourseService;
import com.kclpAgs.AggieStudy.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamController {
    @Autowired
    private ExamService examService;

    @GetMapping
    public List<Exam> getAllExams() {
        return examService.getAllExams();
    }

    @GetMapping("/questions/{examId}")
    public List<Question> getQuestionByExamId(@PathVariable String examId){
        return examService.getQuestionsByExamId(examId);
    }

    @GetMapping("/course/{courseId}")
    public List<Exam> getExamsByCourseId(@PathVariable String courseId){
        return examService.getExamsByCourseId(courseId);
    }

    @GetMapping("/{id}")
    public Exam getExamById(@PathVariable String id) {
        return examService.getExamById(id);
    }

    @PostMapping
    public Exam addExam(@RequestBody Exam exam) {
        exam.getQuestions().forEach(question -> question.setExam(exam));
        return examService.saveExam(exam);
    }

    @DeleteMapping("/{id}")
    public void deleteLink(@PathVariable String id) {
        examService.deleteExam(id);
    }
}
