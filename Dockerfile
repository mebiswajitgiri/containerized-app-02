FROM node:18-alpine3.15
RUN mkdir -p /home/app
WORKDIR /home/app
COPY ./package.json .
RUN npm install
COPY . .
ENV PORT 4000  
EXPOSE $PORT
CMD ["npm","run","dev"]
