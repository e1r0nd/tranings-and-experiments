package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/hello")
@RestController
public class HelloWorldController {

    @GetMapping
    public List<String> getHelloWorld() {
        return List.of("Hello", "World");
    }
}
