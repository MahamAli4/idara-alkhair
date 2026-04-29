# Use Node.js as base image
FROM node:20-alpine

# Install dependencies for Prisma and other tools
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with network resilience
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm install --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js for production
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
