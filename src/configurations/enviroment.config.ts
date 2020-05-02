import Dotenv from 'dotenv'
import Path from 'path'

interface EnviromentsInterface {
  [key: string]: string;
}

class EnviromentConfiguration {
  private static readonly enviroments: EnviromentsInterface = {
    dev: '.env.development',
    prod: '.env.production',
    test: '.env.test'
  };

  private static getEnviroment (nodeEnv: keyof EnviromentsInterface) {
    return this.enviroments[nodeEnv] || this.enviroments.dev
  }

  public static load (nodeEnv: string) {
    Dotenv.config({
      path: Path.resolve('enviroments', this.getEnviroment(nodeEnv))
    })
  }
}

EnviromentConfiguration.load(process.env.NODE_ENV || 'dev')
