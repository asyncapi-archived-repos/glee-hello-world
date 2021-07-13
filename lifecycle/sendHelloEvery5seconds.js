import { Message } from '@asyncapi/glee'

export default async function ({ glee }) {
  setInterval(() => {
    glee.send(new Message({
      channel: 'glee/hello',
      payload: 'Hello from Glee!'
    }))
  }, 5000)
}

export const lifecycleEvent = 'onConnect'
export const servers = ['mosquitto']