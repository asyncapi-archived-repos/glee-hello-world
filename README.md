This is a [Glee](https://github.com/asyncapi/glee) project bootstrapped with [`create-glee-app`](https://github.com/asyncapi/create-glee-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

You can start editing the API by modifying `functions/onHello.js` and `asyncapi.yaml`. The server auto-updates as you edit the file.

## Learn More

To learn more about Glee features and API, take a look at the [documentation](https://asyncapi.org/glee/docs).

You can check out [the Glee Github repository](https://github.com/asyncapi/glee/) - your feedback and contributions are welcome!

## Usage

This app is deployed on Heroku. Use your favorite WebSocket client and connect to `wss://glee-hello-world.herokuapp.com/hello`.

### Using [Websocat](https://github.com/vi/websocat)

```
websocat wss://glee-hello-world.herokuapp.com/hello
```

### Using Postman

Learn more about [using WebSocket in Postman](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/websocket/).