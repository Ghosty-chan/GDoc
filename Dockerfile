FROM node:14-alpine3.13
ENV NODE_ENV=production

LABEL maintainer="Lukas Ghostychan N <ghostychan8100@gmail.com>" \
      description="Lightweight Docusaurus container with Node.js based on Alpine Linux"

WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
RUN npm run build

CMD [ "npm", "run serve -- --build --port 80 --host 0.0.0.0" ]
