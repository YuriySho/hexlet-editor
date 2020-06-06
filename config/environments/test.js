/* eslint-disable no-param-reassign */
import faker from 'faker';

export default (app) => {
  app.config.logLevel = 'debug';
  app.config.cacheModules = true;
  app.config.db.name = faker.random.uuid();
};
