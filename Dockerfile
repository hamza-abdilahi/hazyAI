FROM node:18

WORKDIR /hazyAI

COPY package*.json ./
RUN npm install

COPY server.js ./

COPY hazyAI-frontend/package*.json hazyAI-frontend/
RUN npm install --prefix hazyAI-frontend

COPY hazyAI-frontend/ hazyAI-frontend/
RUN npm run build --prefix hazyAI-frontend

EXPOSE 8080

CMD ["node", "server.js"]
