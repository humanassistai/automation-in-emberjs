/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
          environment: deployTarget
    },
    'revision-data': {
        type: 'git-commit'
    },
    // include other plugin configuration that applies to all deploy targets here
  's3': {
    accessKeyId: "XXXXXXXXX",
    secretAccessKey: "XXXXXXXXXXX",
    bucket: "com.humanassistai",
    region: "us-east-1"
  },
  's3-index': {
    accessKeyId: "XXXXXXXXX",
    secretAccessKey: "XXXXXXXXXXXX",
    bucket: "com.humanassistai",
    region: "us-east-1",
    allowOverwrite: true
  },
 };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
