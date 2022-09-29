FROM node:14-alpine3.15 AS builder
WORKDIR /app
COPY package.json   ./
RUN npm install
COPY . .
ENV PORT=4000
ENV MONGODB_URL=mongodb+srv://root:adminADMIN1@cluster0.vwbeuut.mongodb.net/sovey?retryWrites=true&w=majority
EXPOSE 4000
CMD ["npm", "start"]
