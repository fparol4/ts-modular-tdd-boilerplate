import { Router } from 'express'

export class RouterFactory {
  static build (): Router {
    const router = Router()
    return router
  }
}
