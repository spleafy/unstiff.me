FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

ENV ADMIN_PORT "9090"
ENV ADMIN_FE_PORT "3000"
ENV API_URL "http://164.90.194.91"
ENV TOKEN_SECRET "supersecret"
ENV SESSION_SECRET "supersecret"

ENV MONGODB_HOST=localhost
ENV MONGODB_PORT=27017
ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=rootpassword
ENV MONGODB_DATABASE=Unstiff

ADD ./images /usr/src/app/images

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9090
CMD [ "node", "server.js" ]
