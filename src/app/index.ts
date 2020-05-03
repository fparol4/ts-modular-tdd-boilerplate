
import { ModuleInterface } from '@interfaces/index'
import { Router } from 'express'

class AppModule implements ModuleInterface {
  public modules: Array<ModuleInterface>[]

  constructor () {
    this.modules = []
  }
}

// import { ModuleInterface, AppModuleInterface } from '@interfaces/index'

// class AppModule implements  {
//   public readonly
//   public readonly modules: Array<ModuleInterface>

//   constructor () {
//     this.routers = []
//   }
// }

// export default AppModule
