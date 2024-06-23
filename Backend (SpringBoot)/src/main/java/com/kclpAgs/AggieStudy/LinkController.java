package com.kclpAgs.AggieStudy;

import com.kclpAgs.AggieStudy.model.Course;
import com.kclpAgs.AggieStudy.model.Link;
import com.kclpAgs.AggieStudy.service.CourseService;
import com.kclpAgs.AggieStudy.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/links")
public class LinkController {
    @Autowired
    private LinkService linkService;
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Link> getAllLinks() {
        return linkService.getAllLinks();
    }

    @GetMapping("/course/{courseId}")
    public List<Link> getLinksByCourseId(@PathVariable String courseId){
        return linkService.getLinksByCourseId(courseId);
    }

    @GetMapping("/{id}")
    public Link getLinkById(@PathVariable String id) {
        return linkService.getLinkById(id);
    }

    @PostMapping
    public Link addLink(@RequestBody Link link) {

        Optional<Course> courseOptional = courseService.getCourseById(link.getCourseId());
        if (courseOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid course ID");
        }

        return linkService.saveLink(link);
    }
    @DeleteMapping("/{id}")
    public void deleteLink(@PathVariable String id) {
        linkService.deleteLink(id);
    }
}
