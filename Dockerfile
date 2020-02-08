FROM node:10

WORKDIR /app

COPY frontend/package.json .
COPY frontend/package-lock.json .

RUN npm install

COPY frontend .

EXPOSE 4000

CMD npm start