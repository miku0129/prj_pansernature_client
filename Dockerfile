# Use the latest LTS version of Node.js
FROM node:23-alpine3.20
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json .
 
# Copy the rest of your application files
COPY . .

# Install dependencies
RUN npm install
 
# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["npm", "start"]