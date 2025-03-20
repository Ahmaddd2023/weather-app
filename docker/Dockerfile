ARG NODE_IMAGE
ARG NGINX_IMAGE
ARG ENV_FILE

FROM ${NODE_IMAGE} as biuld
WORKDIR /app
COPY ./code/package*.json /app/
RUN npm install
COPY ./code/. /app/
ARG ENV_FILE
RUN npm run build -- --configuration $ENV_FILE

FROM ${NGINX_IMAGE} as NGINX_IMG
COPY --from=biuld /app/dist/code/ /usr/share/nginx/html
#COPY ./docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]