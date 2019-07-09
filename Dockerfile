FROM ubuntu:latest

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs nginx cowsay \
  && ln -s /usr/games/cowsay /usr/bin/cowsay

WORKDIR /usr/myApp
  
COPY . .
COPY /nginx.conf /etc/nginx/conf.d/myApp.conf
  
RUN npm install 
RUN npm run build


CMD cowsay "You are the best of the best!" \
    && nginx -g 'daemon off;' 

EXPOSE 91

#use docker build -t vladislavsergeyevich/myapp .
#use docker run -p 91:91 vladislavsergeyevich/myapp
#use http://192.168.99.100:91

