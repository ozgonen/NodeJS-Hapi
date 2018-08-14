import {Config} from "../interface/config";

const _mode = process.env.NODE_ENV;
const _devConfig: Config = {
    paths: {
        MongoDB: `mongodb://localhost:27017`,
        host: 'localhost',
        url: 'http://localhost:8000'
    },
    port: 8000,
};
const _productionConfig : Config = {
    paths: {
        MongoDB: ``,
        host: '',
        url: ''
    },
    port: 0,
};
export const CONFIG: Config = (_mode == 'development') ? _devConfig : _productionConfig;
export const APP_NAME = 'hapi NodeJS';
