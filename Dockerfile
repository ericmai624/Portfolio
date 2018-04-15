FROM node:9

# Create app directory
RUN mkdir -p /usr/src/www
WORKDIR /usr/src/www

# Install app dependencies
COPY package.json /usr/src/www/
RUN npm install -g yarn
RUN yarn install
RUN yarn build

# Bundle app source
COPY . /usr/src/www

EXPOSE 8080
CMD [ "yarn ", "start" ]