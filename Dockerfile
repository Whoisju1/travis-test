FROM node:alpine

WORKDIR /api

COPY ./package.json .

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]
