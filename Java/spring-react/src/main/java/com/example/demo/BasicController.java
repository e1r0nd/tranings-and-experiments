package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/")
@RestController
public class BasicController {
    @GetMapping("hello")
    public List<String> getHelloWorld() {
        return List.of("Hello", "World");
    }

    @GetMapping("jokes")
    public String getJokes() {
        return "Justice is a dish best served cold, if it were served warm it would be just water.";
    }
}
