# ---------- Base Stage ----------
FROM node:20-alpine AS base

# Create non-root user
RUN addgroup app && adduser -S -G app app
WORKDIR /app
USER app

# Copy package files first (better caching)
COPY package*.json ./

# ---------- Development Stage ----------
FROM base AS dev

USER root
RUN mkdir -p /app/node_modules && chown -R app:app /app
USER app

# Install all dependencies (including dev)
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 4000

# Install nodemon globally (or keep in devDependencies)
RUN npm install -g nodemon

# Start with nodemon for hot reload
CMD ["nodemon", "hello.js"]

# ---------- Production Stage ----------
FROM base AS prod

# Switch to root to adjust permissions
USER root
RUN chown -R app:app /app
USER app

# Install only production dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

EXPOSE 4000

# Start with plain node
CMD ["node", "hello.js"]
