export IDENTIFY_VERSION_KEY=$(shell git rev-parse HEAD . | md5sum | cut -d' ' -f1)
export VUE_APP_API_IP = 1.15.117.120
compose=docker-compose -f ./docker-compose.prod.yml

help:
	@cat Makefile

build:
	${compose} build --no-cache

build-api:
	${compose} build api

build-nginx:
	${compose} build nginx

up:
	${compose} up -d

uplog:
	${compose} up

down:
	${compose} down
up-api:
	${compose} up -d api

up-nginx:
	${compose} up -d nginx

pull:
	${compose} pull