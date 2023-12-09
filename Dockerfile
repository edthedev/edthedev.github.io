FROM node:21.4 as builder

# COPY qemu-*-static /usr/bin/

FROM builder

MAINTAINER Edward Delaporte 


RUN npm add --location=global npm @11ty/eleventy
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN cd /app;npm install

ENTRYPOINT ["npx", "eleventy", "--serve"]
