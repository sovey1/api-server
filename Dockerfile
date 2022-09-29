FROM node:14-alpine3.15 AS builder
WORKDIR /app
COPY package.json   ./
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE 4000
CMD ["npm", "start"]
