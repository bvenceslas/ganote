# GaNote

backend app for note management

## Getting Started

The project is public

## Built With

- NodeJS
- express
- MongoDB
- Docker & Docker compose

## How it works

- Create a Dockerfile (without extension) and specify the version, the work directory, the commands to be runned and copy everything to the path.

- Create a docker-compose file with the extension **.yml** and specify the version and the services and link the services inside that file

- don't forget to respect the ndentation

- create a dockerignore file to ignore some elements

**Dockerfile**
```
FROM node:10-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]
```

**docker-compose.yml**

```
version: '3'
services:
  app:
    container_name: docker-node-mongo
    restart: always
    build: .
    ports: 
      - '80:5000'
    links:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    ports: 
      - '27017:27017'
```

**.dockerignore**

```
node_modules
npm-debug.log
```

- To run the app we will do : ```docker-compose up```

- To maintain the app in the background we will do : ```docker-compose up -d```

## Author

👤 Venceslas Burongu

- Github: @bvenceslas [@bvenceslas](https://github.com/bvenceslas)
- Twitter: [@bvenceslas](https://twitter.com/bvenceslas)
- Linkedin: [Venceslas Burongu](https://www.linkedin.com/in/venceslas-burongu-8271b519a/)

## 🤝Contributing

Contributions, issues and feature requests are welcome!!!

## Show your support

Give a ⭐️ if you like this project!
