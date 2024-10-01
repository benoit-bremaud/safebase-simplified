# Step 1: Use the official Node.js image
FROM node:18

# Create and use the /app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port 4200 for Angular development server
EXPOSE 4200

# Run the Angular development server
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
