# Docker Volumes Beispiel
### Vorbereitung
Alles löschen zur guten Übersicht `docker system prune`

## Das Problem
1. Datenbank OHNE VOLUME starten:
`docker run --name iws-mysql -h localhost -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root-pw -d mysql:latest`

2. API starten über IntelliJ
(weil kein Docker Network konfiguriert ist)

3. Über Postman die Produkte ausgeben

4. Datenbank stoppen und löschen
    * `docker stop iws-mysql`
    * `docker rm iws-mysql`

5. Datenbank neu starten OHNE VOLUME
`docker run --name iws-mysql -h localhost -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root-pw -d mysql:latest`

6. Mit Postman die Produkte ausgeben
    - Welches Problem haben wir?

## DIE LÖSUNG:

1. Volume erstellen
`docker volume create mysql_volume`

2. Datenbank MIT VOLUME starten:
    * Aber erst die alte DB löschen:
    * `docker stop iws-mysql`
    * `docker rm iws-mysql`

`docker run --name iws-mysql -h localhost -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root-pw -d -v mysql_volume:/var/lib/mysql mysql:latest`

3. API neustarten, um Schema neu zu generieren

4. Mit Postman die Produkte ausgeben

5. Container stoppen und löschen

6. Container neu erstellen und ausführen

7. Mit Postman Produkte ausgeben