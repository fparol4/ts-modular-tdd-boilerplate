import { Router } from 'express'
import { ControllerInterface } from '@interfaces/index'

export default interface ModuleInterface {
  router: Router,
  controller: ControllerInterface
}
