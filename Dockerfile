FROM node:14.18.2

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

CMD [ "node", "bot.js" ]
