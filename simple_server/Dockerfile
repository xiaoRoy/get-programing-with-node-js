# syntax=docker/dockerfile:1

FROM node:20.6.0-alpine3.18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3000