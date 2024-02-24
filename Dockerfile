# build step
FROM node:16.13.2-alpine as build
WORKDIR /app

ENV API_URL=http://api-1
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx:1.21.5-alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 5030
CMD ["nginx", "-g", "daemon off;"]