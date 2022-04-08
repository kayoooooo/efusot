FROM node:17.4.0

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

CMD [ "node", "bot.js" ]
