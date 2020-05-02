import { Router } from 'express'
import { ControllerInterface } from '@interfaces/index'

export interface ModuleInterface {
  router: Router,
  modules: Array<ModuleInterface>[]
  controller?: ControllerInterface
  service?: any // @TODO: ServiceInterface
  model?: any // @TODO: ModelInterface
}
