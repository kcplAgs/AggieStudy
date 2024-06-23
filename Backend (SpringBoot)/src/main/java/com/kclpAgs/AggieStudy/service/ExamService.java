package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Exam;
import com.kclpAgs.AggieStudy.repo.ExamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {
    @Autowired
    private ExamRepo examRepository;

    public List<Exam> getAllExams(){
        return examRepository.findAll();
    }
    public Exam getExamById(String id){
        return examRepository.findById(id).orElse(null);
    }
    public Exam saveExam(Exam exam) {
        return examRepository.save(exam);
    }
    public void deleteExam(String id) {
        examRepository.deleteById(id);
    }
    public List<Exam> getExamsByCourseId(String courseId){
        return examRepository.findByCourseId(courseId);
    }
}
