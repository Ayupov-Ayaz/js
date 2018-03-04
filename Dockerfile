FROM php:7-apache
MAINTAINER ayupov ayaz.ayupov@gmail.com

RUN apt-get -y update \
    && apt-get install -y php-xdebug  

ADD ./php.ini /usr/local/etc/php/