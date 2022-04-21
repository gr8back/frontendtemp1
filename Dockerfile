FROM alpine:3.15
WORKDIR /src
COPY dist dist/
COPY package.json .

ENV PORT 9622
EXPOSE 9622

CMD ["node","newoutput.js"]
