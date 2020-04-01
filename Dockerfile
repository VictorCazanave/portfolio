# Build website
FROM node:alpine AS builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Serve website
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html