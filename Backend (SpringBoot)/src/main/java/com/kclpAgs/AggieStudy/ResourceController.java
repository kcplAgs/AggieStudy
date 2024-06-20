package com.kclpAgs.AggieStudy;

import com.kclpAgs.AggieStudy.model.Course;
import com.kclpAgs.AggieStudy.model.Resource;
import com.kclpAgs.AggieStudy.service.CourseService;
import com.kclpAgs.AggieStudy.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/resources")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/course/{courseId}")
    public List<Resource> getResourcesByCourseId(@PathVariable Long courseId){
        return resourceService.getResourcesByCourseId(courseId);
    }

    @GetMapping("/{id}")
    public Resource getResourceById(@PathVariable Long id) {
        return resourceService.getResourceById(id);
    }

    @PostMapping
    public Resource addResource(@RequestBody Resource resource) {

        Optional<Course> courseOptional = courseService.getCourseById(resource.getCourseId());
        if (courseOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid course ID");
        }

        return resourceService.saveResource(resource);
    }
    @DeleteMapping("/{id}")
    public void deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
    }
}
