FROM nginx:latest

COPY ./ /usr/share/nginx/html

EXPOSE 80

## docker build -t my-nginx-webserver .

## docker run -d -p 8080:80 --name my-nginx-container my-nginx-webserver