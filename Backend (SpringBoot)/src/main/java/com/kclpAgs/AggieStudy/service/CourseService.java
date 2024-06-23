package com.kclpAgs.AggieStudy.service;

import com.kclpAgs.AggieStudy.model.Course;
import com.kclpAgs.AggieStudy.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(String id) {
        return courseRepository.findById(id);
    }

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }

    public Course updateCourse(String id, Course course) {
        course.setId(id); // Ensure the ID in the URL is used
        return courseRepository.save(course);
    }

    public List<Course> searchCourses(String query) {
        return courseRepository.findByNameOrIdContainingIgnoreCase(query);
    }
}
