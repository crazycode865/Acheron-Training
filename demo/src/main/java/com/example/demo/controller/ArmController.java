///**
// * @Author:Awadhesh
// * @Date:05-07-2022
// * @Time:10:13
// * @Project Name:demo
// */
//package com.example.demo.controller;
//
//import com.example.demo.models.User;
//import com.example.demo.utils.KeycloakTokenUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//@Controller
//public class ArmController {
//    @Autowired
//    KeycloakTokenUtil keycloakTokenUtils;
//
//
//
//    @RequestMapping("/logout")
//    public String logout(HttpServletRequest request) throws ServletException {
//        request.logout();
//        return "/";
//    }
//
//   // Make our api
//    //place these two lines at the beginning of the home page method
////        User userDetails = keycloakTokenUtils.getUserDetails(request);
////        model.addAttribute("user", userDetails);
//
//}
