package rs.ac.singidunum.tf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BibliotekaApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(BibliotekaApplication.class, args);
	}

}
