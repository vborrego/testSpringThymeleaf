# testSpringThymeleaf
Sample Spring MVC with thymeleaf and AngularJS web application. 

Uses Maven.

## Git steps 
 * In https://github.com/new create new repository testSpringThymeleaf
 * git init 
 * nano README.md
 * nano .gitignore
 * git add .
 * git commit -m 'Initial commit for testSpringThymeleaf'
 * git remote add origin git@github.com:vborrego/testSpringThymeleaf.git
 * git push origin master

# Build 
```sh
mvn clean compile package
cp target/testSpringMVCThymeleaf-0.1.0.war /opt/apache-tomcat-7.0.53/webapps/
```

# Test 
 * Access http://localhost:8081/testSpringMVCThymeleaf-0.1.0/hello?name=aaa
 * Access http://localhost:8081/testSpringMVCThymeleaf-0.1.0/examplex to see AngularJS page
 
 