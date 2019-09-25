# Use node version 10.x
FROM node:10


# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app


ADD package.json /app/

RUN npm install

# copy all file from current dir to /app in container
COPY . /app/

# expose port 4040 for API
EXPOSE 4040

# cmd to start service
CMD [ "npm", "run", "dev" ]
