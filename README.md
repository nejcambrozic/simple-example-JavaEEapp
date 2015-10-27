# simple-example-JavaEEapp
Simple example of JavaEE application with Maven

## Building

Ensure you have JDK 8 (or newer), Maven 3.2.1 (or newer) and Git installed

```bash
java -version
mvn -version
git --version
```

First clone the repository:

```bash
git clone https://github.com/nejcambrozic/simple-example-JavaEEapp.git
cd example-project
```

To build application run:

```bash
mvn clean install
```

## Set up database and datasource
This application was developed on [wildfly-9.0.1.Final](http://wildfly.org/downloads/) (download and extract Java EE7 Full & Web Distribution) using mysql database.

To create database you should have mysql server already installed. Run [exampledatabase.sql](https://gist.github.com/nejcambrozic/1c1431153cdbdac03b15) script which will generate and fill database with some data.

To use preconfigured [datasource](https://gist.github.com/nejcambrozic/1c1431153cdbdac03b15) paste this in wildfly-9.0.1.Final\standalone\configuration\standalone-full.xml inside  ```<datasources>``` tag

Or create new datasource and configure persistence.xml in JPA project.
Once server is started test your created datasource connection in [http://localhost:9990/console/App.html#profile/datasources](http://localhost:9990/console/App.html#profile/datasources)

## Web application 

will be avaible on [http://localhost:8080/web](http://localhost:8080/web)




