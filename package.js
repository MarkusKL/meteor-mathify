Package.describe({
  name: 'markuskl:mathify',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A mathematical expression checker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MarkusKL/meteor-mathify',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('coffeescript');
  api.addFiles('mathify.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('coffeescript')
  api.use('markuskl:mathify');
  api.addFiles('mathify-tests.coffee')
});
