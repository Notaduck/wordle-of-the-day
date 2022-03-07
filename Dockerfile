FROM node:17 AS builder
WORKDIR /app
COPY ./ .




RUN yarn global add gatsby-cli
RUN yarn install && yarn build

FROM nginx:alpine



WORKDIR /usr/share/nginx/html


# Installs latest Chromium (92) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      yarn


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Puppeteer v10.0.0 works with Chromium 92.
RUN yarn add puppeteer@13.4.1

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN rm -rf ./*
COPY --from=builder /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# # Name the node stage "builder"
# FROM node:14 AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# COPY . .
# # install node modules and build assets
# RUN yarn install && yarn build

# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/public .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
# # # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# # FROM node:17 as builder

# # WORKDIR /app

# # COPY package.json /app/
# # COPY yarn.lock /app/

# # RUN yarn install

# # COPY ./ /app/

# # RUN yarn build

# # # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# # FROM nginx:alpine


# # # Set working directory to nginx asset directory
# # WORKDIR /usr/share/nginx/html
# # RUN rm /etc/nginx/conf.d/default.conf
# # COPY ./nginx/nginx.conf /etc/nginx/conf.d
# # # Remove default nginx static assets
# # RUN rm -rf ./*
# # # Copy static assets from builder stage
# # COPY --from=builder /app/public .
# # # Containers run nginx with global directives and daemon off
# # ENTRYPOINT ["nginx", "-g", "daemon off;"]
