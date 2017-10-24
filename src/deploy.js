var deploy = require('heroku-deploy-tarball');

var config = {
 app: 'my-heroku-app',
 tarball: 'path/to/build.tar.gz'
}

deploy(config);