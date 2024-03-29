FROM public.ecr.aws/docker/library/node:lts-slim
COPY . /
COPY package.json .
RUN npx webpack
RUN npm i

ENV PORT 9622
EXPOSE 9622

CMD ["npm","run","webpackstart"]
