FROM node:alpine AS client-build

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn release

FROM nginx:stable

COPY --from=client-build /app/build /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d

EXPOSE 80