package com.kclpAgs.AggieStudy;

import com.kclpAgs.AggieStudy.model.Course;
import com.kclpAgs.AggieStudy.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        Optional<Course> course = courseService.getCourseById(id);
        return course.orElse(null);
    }

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course course) {
        course.setId(id); // Ensure the ID in the URL is used
        return courseService.updateCourse(id, course);
    }
}
