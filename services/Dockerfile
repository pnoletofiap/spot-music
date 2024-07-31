FROM node:lts-alpine

RUN apk add dumb-init

ARG APP_DIR=dist

RUN apk -U upgrade

COPY --chown=node:node node_modules ./node_modules

COPY --chown=node:node $APP_DIR ./dist

USER node

CMD ["dumb-init", "node", "dist/main.js"]