import '@configs/enviroment.configuration'
import Express, { Application } from 'express'
import AppModule from './app'

class App {
  public app: Application;

  constructor () {
    this.app = Express()
  }
}

export default new App()
