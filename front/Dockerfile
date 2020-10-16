FROM alpine:3.10.3

RUN mkdir front
RUN mkdir front/src
RUN mkdir front/public

ADD ./front/package.json /front
ADD ./front/tsconfig.json /front
ADD ./front/.env /front

RUN apk update && apk add nodejs nodejs-npm
WORKDIR /front
RUN npm install

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
