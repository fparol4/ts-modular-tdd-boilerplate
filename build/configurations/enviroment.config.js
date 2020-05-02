"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var EnviromentConfiguration = /** @class */ (function () {
    function EnviromentConfiguration() {
    }
    EnviromentConfiguration.getEnviroment = function (nodeEnv) {
        return this.enviroments[nodeEnv] || this.enviroments.dev;
    };
    EnviromentConfiguration.load = function (nodeEnv) {
        dotenv_1.default.config({
            path: path_1.default.resolve('enviroments', this.getEnviroment(nodeEnv))
        });
    };
    EnviromentConfiguration.enviroments = {
        dev: '.env.development',
        prod: '.env.production',
        test: '.env.test'
    };
    return EnviromentConfiguration;
}());
EnviromentConfiguration.load(process.env.NODE_ENV || 'dev');
