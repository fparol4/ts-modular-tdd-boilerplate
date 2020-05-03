import app from '@app'
import { Application } from 'express'
import ServerConfiguration from '@configs/server.configuration'

class Server {
  private readonly app: Application
  public readonly port: number

  constructor () {
    this.app = app.app
    this.port = ServerConfiguration.PORT
    this.init(this.app, this.port)
  }

  init (app: Application, port: number) {
    app.listen(port)
    console.warn(`Running on host localhost:${port}`)
  }
}

export default new Server()
