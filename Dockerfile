FROM node:10
WORKDIR /build
COPY . /build
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
