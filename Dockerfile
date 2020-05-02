FROM node:12-alpine
ENV NODE_ENV=production   
EXPOSE 3000
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start:prod"]
