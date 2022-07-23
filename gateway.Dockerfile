# build 
FROM node:16-buster as build
WORKDIR /app
COPY package.json yarn.lock tsconfig.build.json .
COPY packages/gateway packages/gateway
RUN yarn install && yarn gateway build

# release
FROM build as release
EXPOSE 3002
CMD ["yarn", "gateway", "start"]