[![Build Status](https://travis-ci.org/huxaiphaer/java_meetup.svg?branch=develop)](https://travis-ci.org/huxaiphaer/java_meetup)
[![CircleCI](https://circleci.com/gh/huxaiphaer/java_meetup.svg?style=svg)](https://circleci.com/gh/huxaiphaer/java_meetup)
[![codecov](https://codecov.io/gh/huxaiphaer/java_meetup/branch/develop/graph/badge.svg)](https://codecov.io/gh/huxaiphaer/java_meetup)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac472386550f7b6280b0/maintainability)](https://codeclimate.com/github/huxaiphaer/java_meetup/maintainability)

# Java MeetUp Application.

This application is capable to register members who are to attend the Java MeetUp.



# Getting Started.

This project is categorized into two :

1. Backend
2. Frontend.


**NOTE** : 

_This project was developed on windows, most of the configurations are windows based,
 though there are some mac configurations as well._


## Backend

### How to set up the project (Backend).

1 . Clone the project by running the command below :

`git clone https://github.com/huxaiphaer/java_meetup.git`

2 . Then change to the backend directory by running :

`cd backend`.

3 . Download [PostgreSQL](https://www.postgresql.org/download/) if you don't have it, then create 2 databases with these 2 names :

`users_regsitration` and `users_regsitration_test`. 

`users_regsitration` is the application database whereas `users_regsitration_test` is the testing database.


4 . After that,  Add the following environment variables in your system to ensure that 
`application.properties` and `application-test.properties` files environment variable 
placeholders are populated. 


##### On a Mac

Follow this [guide](https://medium.com/@youngstone89/setting-up-environment-variables-in-mac-os-28e5941c771c) to set the environment variables on a mac.
The following are the variables to set :

`SPRING_DB_HOST` - _set your host e.g `localhost`_

`SPRING_DB_PORT` - _set your port. e.g for postgres 5432_

`SPRING_DB_USERNAME` - _set your username e.g postgres_

`SPRING_DB_PASSWORD` - _set your password e.g password_


##### On  Windows

Follow this [guide](https://docs.oracle.com/en/database/oracle/r-enterprise/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0) to set up the environment variables with the GUI.


The following are the variables to set :

`SPRING_DB_HOST` - _set your host e.g `localhost`_

`SPRING_DB_PORT` - _set your port. e.g for postgres 5432_

`SPRING_DB_USERNAME` - _set your username e.g postgres

`SPRING_DB_PASSWORD` - _set your password e.g password_


The above are [PostgresSQL](https://www.postgresql.org/download/) settings, however you can use any database of your choice. This needs new configuration with `application.properties` and `application-test.properties`  file. 
For example if you want to use MySQL you can click [here](https://spring.io/guides/gs/accessing-data-mysql/) to get details 
of the `application.properties` and `application-test.properties`. the same applies to other databases (e.g MariaDB, H2 In memory DB etc).



4 . Then, build the backend project with the following Maven command :

`mvn install`  and then also run `mvn package`.

5 . Running the backend project, run the following command 

`mvn spring-boot:run`

After successfully running , open **postman** and test the registration endpoint :

`http://localhost:8090/api/v1/users`. Then add the following parameters ,
in the body section :

```
{
 "name" :"anyname",
 "password" :"anypassword",
 "address" : "loction",
 "email" :"anyemail@gmail.mm",
 "number" :"070459000"
}
```

If you hit **POST** in postman, you should get a **201** status code meaning a resource has been created, 
thus you hve successfully set the backend


_If you get any Exceptions , just go back to step 1 and cross check 
if you have done all the steps._


### How to run backend Tests.

To run backend tests run the following command :

`mvn test`

The above test will run all the tests and provide the test coverage as well with the 
help of Jacoco.

To check the coverage, navigate to the following directory :

`backend/src/target/site/jacoco/index.html`. Then click and browse the `index.hmtl` folder to see the test coverage.


### Backend endpoints :

The Base URL is :  `http://localhost:8090`

| HTTP Method   | End Point                                 | Action                         |
| ------------- | ------------------------------------------|--------------------------------|
| POST          | /api/v1/users                       |Registers Java users.            |



### Technologies Used :
1. Spring boot. (_Spring boot Web_)
2. Maven.
3. JPA.
4. Java Hibernate.
5. PostgreSQL.
6. Junit.
7. Jacoco.
8. Java 8



##Frontend

### How to set up the Frontend Project.

1 .   After cloning the project, then change to the frontend directory by running :

`cd frontend`. 

However if you were in the `backend` directory you need to run 

`cd ..` then `cd frontend`

2  . Then, install all the necessary dependencies, you can either use [yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm), if you don't have them download them (_I recommend yarn_) :

`yarn add` or `npm install` 

3 . you can also compile and minify the project by running :


 `yarn build` or `npm run build`

4 . Then finally run the project by running :

`yarn serve` or `npm run serve`

If the application finishes running in the console you'll be provided this [link](http://localhost:8080/)
to navigate to the application.

5 . If you contribute to the project ensure that you keep on linting with the command below :

`npm run lint`


### How to run Frontend tasks :

`yarn test:unit` or `npm run test:unit`

_The above command will also display the code coverage_.


### Tools/Framework Used :
- Vue.js
- Vuex. _This is the state management tool_.
- Vuetify. T*his is the CSS framework*.
- Jest. _The one for unit testing and mocking HTML components_.


## CI/CD and other Tools

The following are the tools which help to continuously integrate and deploy :

1. Travis
2. Circle CI.
3. CodeCov
4. Code Climate

The above tools help in building the application. **Travis** builds the backend project and finally deploys the test coverage to 
**CodeCov**, then also **Circle CI** builds for the frontend (Vue.js) project and deploys it to CodeCov as well. So these tools are triggered in parallel 
when when one raises a PR, which makes **CodeCov** get the average code coverage.

**CodeClimate**. This one checks for the code quality of all the projects.

_When contributing to this project watch out for the above._




### Authors

- Lutaaya Huzaifah Idris
- K15t Devs.