FROM alpine:3.15
FROM node:12
COPY . /
COPY package.json .
RUN npm i
ENV PORT 9622
EXPOSE 9622

CMD ["npm","run","start"]
