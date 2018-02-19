FROM node:latest

WORKDIR /app/

COPY package*.json ./

RUN npm install

ENV NODE_ENV=development

EXPOSE 8080

COPY . .

CMD ["npm", "start"]
