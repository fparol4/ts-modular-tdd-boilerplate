import Dotenv from 'dotenv'
import Path from 'path'

const enviroments = {
  dev: './development.env',
  prod: './production.env',
  test: './production.env',
}

export default Dotenv.config({
  path: Path.resolve('env', enviroments[process.env.NODE_ENV]),
})
