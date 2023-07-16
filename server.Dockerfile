FROM node:20-slim

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app


COPY package*.json ./ 

RUN npm install

COPY . ./

EXPOSE 8000

CMD ["npm", "run", "dev"]