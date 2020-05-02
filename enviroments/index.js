import Dotenv from "dotenv";
import Path from "path";

class Enviroment {
  static enviroments = {
    dev: "./.env.development",
    prod: "./.env.production",
    test: "./.env.test",
  };

  static getEnvPath(nodeEnv) {
    const envFileName = enviroments[nodeEnv] || enviroments.dev;
    return Path.resolve(__dirname, envFileName);
  }
}

export default Dotenv.config({
  path: Enviroment.getEnvPath(process.env.NODE_ENV),
});
