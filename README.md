[![Build Status](https://travis-ci.org/huxaiphaer/java_meetup.svg?branch=develop)](https://travis-ci.org/huxaiphaer/java_meetup)
[![codecov](https://codecov.io/gh/huxaiphaer/java_meetup/branch/develop/graph/badge.svg)](https://codecov.io/gh/huxaiphaer/java_meetup)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac472386550f7b6280b0/maintainability)](https://codeclimate.com/github/huxaiphaer/java_meetup/maintainability)

# Java MeetUp Application.

This application is capable to register members who are to attend the Java MeetUp.



### How to set up the project (Backend).

Add the following environment variables in your system to ensure that 
`application.properties` and `application-test.properties` files environment variable 
placeholders are populated. 
Ensure you download it and set it up if you don't have it.

#### On a Mac

Follow this [guide](https://medium.com/@youngstone89/setting-up-environment-variables-in-mac-os-28e5941c771c) to set the environment variables.
The following are the variables to set :

`SPRING_DB_HOST` - _set your host e.g `localhost`_

`SPRING_DB_PORT` - _set your port. e.g for postgres 5432_

`SPRING_DB_USERNAME` - _set your username e.g postgres_

`SPRING_DB_PASSWORD` - _set your password e.g password_


#### On  Windows

Follow this [guide](https://docs.oracle.com/en/database/oracle/r-enterprise/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0) to set up the environment variables with the GUI.


The following are the variables to set :

`SPRING_DB_HOST` - _set your host e.g `localhost`_

`SPRING_DB_PORT` - _set your port. e.g for postgres 5432_

`SPRING_DB_USERNAME` - _set your username e.g postgres

`SPRING_DB_PASSWORD` - _set your password e.g password_


The above are [PostgresSQL](https://www.postgresql.org/download/) settings, however you can use any database of your choice  to configure `application.properties` file. 
For example if you want to use MySQL you can click [here](https://spring.io/guides/gs/accessing-data-mysql/) to get details 
of the `application.properties`. the same applies to other databases.