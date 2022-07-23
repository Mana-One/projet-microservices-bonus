# build 
FROM node:alpine3.15 as build
WORKDIR /app
COPY package.json yarn.lock tsconfig.json .
COPY src ./src
RUN yarn install && \
  yarn build && \
  npm prune --production && \
  rm -rf /app/src

# release
FROM build as release
COPY sequelize-conf ./sequelize-conf
COPY .sequelizerc docker-entrypoint.sh .
EXPOSE 3001
CMD ["yarn", "start"]