FROM nginx:stable-alpine

RUN apk -U upgrade

ARG APP_DIR=dist

COPY --chown=node:node nginx.conf /etc/nginx/nginx.conf

COPY --chown=node:node $APP_DIR /usr/share/nginx/html