FROM alpine:3.15
FROM node:12
COPY app.js dist/
COPY package.json .

ENV PORT 9622
EXPOSE 9622

CMD ["node","app.js"]
