FROM node:19.2.0-alpine

# Create app directory

RUN mkdir /app
WORKDIR /app
RUN chmod -R +x /app

# RUN npm install
COPY package.json package.json
RUN npm install && mv node_modules /node_modules

# Bundle app source
COPY . .

LABEL maintainer="JoeNonExotic"

# EXPOSE 80
EXPOSE 80

# Run application
CMD node index.js
