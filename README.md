# DevCamp Shipping Demo

Demo for:

- GitHub Actions CI
- Docker build
- Deploy to Render after CI passes

## Run locally

npm install
npm test
npm start

## Docker

docker build -t devcamp-shipping-demo .
docker run -p 3000:3000 devcamp-shipping-demo
