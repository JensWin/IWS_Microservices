FROM openjdk:11
#ARG JAR_FILE=build/libs/productcatalog-0.0.1-SNAPSHOT.jar
ARG JAR_FILE=productcatalog-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]