package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;


@RestController
public class UserController {
    
    @GetMapping("/user/list")
    public List<User> listUser(@RequestParam String param) {

        List<User> users = new ArrayList<>();

        return users;
    }
    
}
