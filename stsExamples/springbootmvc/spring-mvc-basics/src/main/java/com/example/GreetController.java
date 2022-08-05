package com.example;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class GreetController {
	@RequestMapping("/hello")
	public String sayHello(Model model) {
		//Model is an interface
		//create the data .usually this is the data from the backend
		
		String message = "Hello ! How are you?";
		//attach this data to a model
		//set the value in the interface using a dummy name(first parameter)
		//second parameter is the original data
		//this can be retrieved in success.jsp page using the the dummy 
		model.addAttribute("mymessage",message);
		return "success";
	}
//	@RequestMapping("/welcome")
//	public String welcomeGreet(Model model) {
//		
//		String message = "You are welcome in the world of MVC";
//		model.addAttribute("mywelcome",message);
//		return "welcome";
//	}
	@RequestMapping("/welcome")
	public String welcomeGreet(ModelMap model) {
		
//		String message = "You are welcome in the world of MVC";
		model.addAttribute("mywelcome","Welcome to MVC");
		return "welcome";
	}
	@RequestMapping("/greet")
	public String Greet(Model model) {
		String message = "Hello, Awadhesh, A very good morning";
		ModelAndView modelandView=new ModelAndView("success", message, model);
		model.addAttribute("mygreet",message);
		return "success";
	}

}
