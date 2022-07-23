# build 
FROM node:16-buster as build
WORKDIR /app
COPY package.json yarn.lock tsconfig.build.json .
COPY packages/contracts packages/contracts
RUN yarn install && yarn contracts build

# release
FROM build as release
EXPOSE 3000
CMD ["yarn", "contracts", "start"]