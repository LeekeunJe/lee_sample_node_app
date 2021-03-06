FROM node:12.16.1-alpine

COPY ./src /sample

WORKDIR /sample

RUN npm install

CMD ["npm","start"]

EXPOSE 3000
