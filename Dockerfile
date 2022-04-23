FROM alpine:3.15
FROM node:12
COPY . /
COPY package.json .
RUN npx webpack
RUN npm i

ENV PORT 9622
EXPOSE 9622

CMD ["npm","run","webpackstart"]
