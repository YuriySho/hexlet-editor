import Application from '../Application.js';

export default class Test extends Application {
  async init() {
    super.init();
    this.config.logLevel = 'debug';
    this.config.cacheModules = true;
    this.config.db = {
      type: 'sqlite',
      synchronize: true,
      logging: true,
      database: 'db/test.sqlite3',
      entities: [
        `${__dirname}/../../app/entities/*.js`,
      ],
    };
  }
}
