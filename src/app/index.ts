import { Router } from 'express'
import { } from '@interfaces/index'

class AppModule implements AppModuleInterface {
  public readonly routers: Array<ModuleInterface>

  constructor () {
    this.routers = []
  }
}

export default AppModule
