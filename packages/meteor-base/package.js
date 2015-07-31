Package.describe({
  name: 'meteor-base',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Packages that every Meteor app needs to have',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.imply([
    // Super basic stuff about where your code is running and async utilities
    'meteor',

    // This package enables making client-server connections; currently Meteor
    // only supports building client/server web applications so this is not
    // removable
    'webapp',

    // Most Meteor core packages depend on Underscore right now
    'underscore',

    // Many client-side Meteor core packages depend on JQuery right now
    'jquery',

    // The protocol and client/server libraries that Meteor uses to send data
    'ddp',

    // A small client-side reactive programming library that underpins most of
    // Meteor frontend code
    'tracker',
    'deps', // XXX COMPAT WITH PACKAGES BUILT FOR 0.9.0.
  ]);
});
