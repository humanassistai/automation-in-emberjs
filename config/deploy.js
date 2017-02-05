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
    filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html,json}',
    accessKeyId: "AKIAJT3DY7F35XQEYXAA",
    secretAccessKey: "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",
    bucket: "com.humanassistai",
    region: "us-east-1"
  },
  's3-index': {
    accessKeyId: "AKIAJT3DY7F35XQEYXAA",
    secretAccessKey: "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",
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
