FROM node:21

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Instalar TypeScript globalmente (opcional)
RUN npm install -g ts-node-dev

EXPOSE 3000

CMD ["npm", "run", "dev"]
