# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./ 
RUN npm install --legacy-peer-deps

COPY . . 
RUN NODE_OPTIONS=--max-old-space-size=4096 npm run build  # Build the app

# Stage 2: Serve the build with a lightweight web server (nginx)
FROM nginx:alpine AS production

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf  

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
