docker build -t 1.0.0 . && docker run -p 80:80 -p 443:443 -v `pwd`:/www/ --name nginx-nest-react 1.0.0

npm i

npm run build

npm run start

http://127.0.0.1/index.html
