FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app

ENV REACT_APP_API_URL "164.90.194.91"
ENV REACT_APP_API_ADBE_PORT "9090"

# Cache and Install dependencies
COPY package*.json ./
RUN npm install --silent
# Copy app files
COPY . .
# Expose port
EXPOSE 7070
# Start the app
CMD [ "yarn", "start" ]
