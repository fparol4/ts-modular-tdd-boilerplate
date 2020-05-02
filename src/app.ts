import '@configs/enviroment.config'
import Express, { Application } from 'express'
import AppModule from './app'

class App {
  public app: Application

  constructor () {
    this.app = Express()
    this.module = new AppModule()
  }
}

export default App
