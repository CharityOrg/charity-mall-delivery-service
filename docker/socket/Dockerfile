FROM node:14.18.3-alpine3.15 as final

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

CMD nest start --config socket-listener.json
