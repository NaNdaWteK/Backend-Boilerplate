import { koaSwagger } from 'koa2-swagger-ui';
import Router from 'koa-router';
import morgan from 'koa-morgan';
import * as rc from 'routing-controllers';
import * as to from 'typeorm';
import Docs from './controllers/Docs';
import config from './config/default';
import CustomLogger from './infrastructure/CustomLogger';
import HealthzController from './controllers/HealthzController';

export default class App {
  static async main() {
    const router = new Router();
    router.get(
      '/docs',
      koaSwagger({
        title: 'Billar API',
        swaggerOptions: {
          url: '/api/v1/docs',
        },
      })
    );
    const app = rc.createKoaServer({
      controllers: [HealthzController, Docs],
    });
    app.use(morgan('dev'));
    app.use(router.routes()).use(router.allowedMethods());
    const dataSource = new to.DataSource({
      type: 'postgres',
      database: config.databaseName,
      synchronize: true,
      host: config.databaseHost,
      port: parseInt(config.databasePort),
      username: config.databaseUser,
      password: config.databasePassword,
      entities: [__dirname + '/entities/*{.ts,.js}'],
      migrations: [__dirname + '/migration/*.ts'],
      migrationsTableName: 'migrations',
    });
    await dataSource.initialize();
    const server = app.listen(config.port, () => {
      new CustomLogger().info(`Listening on port ${config.port}`);
      App.databaseReady();
    });
    return server;
  }

  static databaseReady() {
    new CustomLogger().info('Database ready');
  }
}
