FROM node:13-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY src src
COPY main.ts .
COPY webpack.config.ts .
COPY tsconfig.json .
RUN npm run build
RUN ls ./dist

FROM node:13-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN chown node:node .
USER node
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["node", "app.js"]