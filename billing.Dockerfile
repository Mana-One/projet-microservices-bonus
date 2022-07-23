# build 
FROM node:16-buster as build
WORKDIR /app
COPY package.json yarn.lock tsconfig.build.json .
COPY packages/billing packages/billing
RUN yarn install && yarn billing build

# release
FROM build as release
EXPOSE 3001
CMD ["yarn", "billing", "start"]