FROM node:10-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]