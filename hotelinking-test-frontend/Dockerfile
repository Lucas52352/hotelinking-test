# Use the official Node.js image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the application in development mode
CMD npm run dev