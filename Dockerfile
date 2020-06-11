FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 4000

RUN ls

CMD [ "npm", "start"]
CMD [ "npm", "test"]
