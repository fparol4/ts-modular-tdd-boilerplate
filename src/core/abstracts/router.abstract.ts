import { RouterFactory } from '@core/factories'
import { Router } from 'express'

export class RouterAbstract {
  public router: Router

  constructor () {
    this.router = RouterFactory.build()
  }
}
