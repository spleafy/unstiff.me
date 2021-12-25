FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app

ENV REACT_APP_API_URL "http://164.90.194.91"
ENV REACT_APP_API_ADBE_PORT "9090"

# Cache and Install dependencies
COPY package*.json ./
RUN npm install --silent
# Copy app files
COPY . .
# Expose port
EXPOSE 7070
# Start the app
#CMD [ "yarn", "start" ]
RUN yarn install && yarn build




# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=development /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


