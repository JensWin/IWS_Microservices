## Run MySQL Container
`$ docker run --name iws-mysql -h localhost -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root-pw -d mysql:latest`

## Build docker image
1. `gradle build`
2. `docker build -t productcatalog .`

## Run Container
`docker run -p 9000:9000 -e JAVA_OPTS=-Dserver.port=9000 productcatalog`

## Swagger API documentation
http://localhost:8080/swagger-ui.html