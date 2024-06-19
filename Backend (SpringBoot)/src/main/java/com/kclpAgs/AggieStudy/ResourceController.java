package com.kclpAgs.AggieStudy;

import com.kclpAgs.AggieStudy.model.Resource;
import com.kclpAgs.AggieStudy.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resources")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;

    @GetMapping
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/{id}")
    public Resource getResourceById(@PathVariable Long id) {
        return resourceService.getResourceById(id);
    }

    @PostMapping
    public Resource createResource(@RequestBody Resource resource) {
        return resourceService.saveResource(resource);
    }

    @DeleteMapping("/{id}")
    public void deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
    }
}
