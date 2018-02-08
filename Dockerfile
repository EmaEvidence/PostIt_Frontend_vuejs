FROM node:latest

WORKDIR /the/workdir/path

COPY package*.json ./

RUN yarn install

EXPOSE 3300
