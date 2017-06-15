FROM node:6.9.1-slim

MAINTAINER roylee0704@gmail.com

RUN apt-get update \
    && apt-get install -y \
	build-essential \
        python \
    && apt-get clean \
    && rm -Rf /var/lib/apt/lists/*

RUN npm install -g nodemon

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
COPY . /src

EXPOSE 8080

CMD ["nodemon", "/src/index.js"]
