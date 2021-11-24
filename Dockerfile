FROM node:16.13.0
WORKDIR /app

COPY package.json package-lock.json .
RUN npm i

COPY . .
RUN npm run build

FROM nginx:1.21.4
RUN rm -rf /usr/share/nginx/html
COPY --from=0 /app/build /usr/share/nginx/html
