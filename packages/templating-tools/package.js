Package.describe({
  name: 'templating-tools',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'underscore',
    'ecmascript',
    'spacebars-compiler',

    // minifiers is a weak dependency of spacebars-compiler; adding it here
    // ensures that the output is minified.  (Having it as a weak dependency means
    // that we don't ship uglify etc with built apps just because
    // boilerplate-generator uses spacebars-compiler.)
    // XXX maybe uglify should be applied by this plugin instead of via magic
    // weak dependency.
    'minifiers'
  ]);

  api.addFiles([
    'templating-tools.js',
    'html-scanner.js',
    'compile-tags-with-spacebars.js',
    'throw-compile-error.js',
    'code-generation.js'
  ]);

  api.export('TemplatingTools');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'templating-tools',
    'ecmascript'
  ]);

  api.addFiles('html-scanner-tests.js', 'server');
});
