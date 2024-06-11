FROM node:latest
WORKDIR /dashboard
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]