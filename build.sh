#!/bin/sh
mvn clean compile package
cp target/testSpringMVCThymeleaf-0.1.0.war /opt/apache-tomcat-7.0.53/webapps/