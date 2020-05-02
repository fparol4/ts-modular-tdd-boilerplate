import { Router } from 'express'
import { RouterAbstract } from '@core/abstracts'
import { RouterInterface } from '@interfaces/index'

export class AppRouter extends RouterAbstract implements RouterInterface {
  routes () {
    this.router.get('/', (Request, Response) => {
      Response.json({ ok: true })
    })
  }
}
