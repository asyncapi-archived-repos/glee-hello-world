export default function () {
  console.log('$PORT is', process.env.PORT)
  return {
    websocket: {
      port: process.env.PORT,
    }
  }
}