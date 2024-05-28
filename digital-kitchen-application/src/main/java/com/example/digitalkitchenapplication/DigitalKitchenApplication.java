package com.example.digitalkitchenapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration;

@SpringBootApplication
public class DigitalKitchenApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalKitchenApplication.class, args);
	}

}