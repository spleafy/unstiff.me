FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json ./
RUN npm install --silent
# Copy app files
COPY . .
# Expose port
EXPOSE 7070
# Start the app
CMD [ "yarn", "start" ]
