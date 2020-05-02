import './configurations/enviroment.config'
import Express, { Application } from 'express'

class App {
  public app: Application

  constructor () {
    this.app = Express()
  }

  load (): void {}
}

export default App
