FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies including devDependencies for build
RUN npm ci

COPY . .

# Build the application
RUN npm run build

# Prune dev dependencies to keep image small
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
