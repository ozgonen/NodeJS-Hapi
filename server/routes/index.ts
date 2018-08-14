const fs = require('fs');

const index       = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true,
    }
  }
};
export let ROUTES = [index];

fs.readdirSync(__dirname)
    .filter(file => file != 'index.ts')
    .forEach(file => {
      ROUTES = ROUTES.concat(require(`./${file}`));
    });
