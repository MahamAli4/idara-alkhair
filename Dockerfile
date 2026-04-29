# Use Node.js as base image
FROM node:20-alpine

# Install dependencies for Prisma and other tools
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
