process.env.NODE_ENV = 'testing';
process.env.RESTAPI_PORT = '4000';
import App from '../../src/App';
import 'reflect-metadata';
import * as rc from 'routing-controllers';
import * as td from 'typedi';
import * as dotenv from 'dotenv';

dotenv.config();
rc.useContainer(td.Container);

const storage = rc.getMetadataArgsStorage();

export default App.main();
