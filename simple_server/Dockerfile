# syntax=docker/dockerfile:1

FROM node:20.6.0-alpine3.18

WORKDIR /app

#install the dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

#copy the rese of souce code
COPY . .

#make the build
RUN npm run build

#start the server
CMD ["node", "dist/index.js"]
EXPOSE 3000