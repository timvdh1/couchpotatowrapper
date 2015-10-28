Package.describe({
  name: 'lokenx:couchpotatowrapper',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for the Couch Potato API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lokenx/couchpotatowrapper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.addFiles('lib/server/methods/appAvailable.js', ['server']);
  api.addFiles('lib/server/methods/mediaGet.js', ['server']);
  api.addFiles('lib/server/methods/movieAdd.js', ['server']);
  api.addFiles('lib/server/methods/movieDelete.js', ['server']);
  api.addFiles('lib/server/export/functions.js', ['server']);

  api.use('meteor-base@1.0.1');
  api.use('check');
  api.use('http');

  api.export("CouchPotato");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lokenx:couchpotatowrapper');
  api.addFiles('couchpotatowrapper-tests.js');
});
