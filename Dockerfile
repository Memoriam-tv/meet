FROM node:18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# COPY package.json ./
# COPY yarn.lock ./

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "run", "dev"]
