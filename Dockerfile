FROM node:current-alpine3.12

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts

COPY . ./

CMD ["npm", "start"]
#CMD ["npm", "run", "dev"]
#CMD ["npm", "run", ${RUN_COMMAND}]