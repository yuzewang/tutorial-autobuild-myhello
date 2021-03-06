FROM ubuntu:trusty
MAINTAINER alaudadoc alaudadoc@alauda.cn

RUN apt-get update && apt-get install -y nodejs
EXPOSE 9000
COPY server.js /
CMD ["nodejs", "/server.js"]
