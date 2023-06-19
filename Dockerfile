# Dockerfile

FROM node:16 as base
WORKDIR /app/sinsabridge/sinsa-bridge-react

COPY package.json package-lock.json ./
RUN npm ci

ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm run build

EXPOSE 8080 
CMD [ "npm", "start" ]