FROM node:17.6.0

WORKDIR /app

COPY package.json /app
COPY bot.js /app/bot.js
COPY config /app/config
RUN npm install

CMD [ "node", "bot.js" ]
