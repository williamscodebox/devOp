FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

# Create app directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./


USER root

RUN chown -R app:app .

USER app

RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "hello.js"]
