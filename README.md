[![Build Status](https://travis-ci.org/huxaiphaer/java_meetup.svg?branch=develop)](https://travis-ci.org/huxaiphaer/java_meetup)

# Java MeetUp Application.

This application is capable to register members who are to attend the Java MeetUp.



### How to set up the project (Backend).

Add the `application.properties` file in this directory or path `src/main/resources` then add the following information :

```
## PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/your_db
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true


spring.jpa.hibernate.ddl-auto = update
```

The above are postgres settings, however you can use any database to configure for example if you want to use MySQL you can click [here](https://spring.io/guides/gs/accessing-data-mysql/) to get details 
of the `application.properties`. the same applies to other databases.