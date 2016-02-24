Package.describe({
  name: 'markuskl:mathify',
  version: '0.0.1',
  summary: 'A mathematical expression checker',
  git: 'https://github.com/MarkusKL/meteor-mathify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.addFiles('lib/mathify.js','server');
  api.addAssets('Main.exe','server');

  api.export('Mathify','server');
});

Npm.depends({
    "cross-spawn": "2.1.5"
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('coffeescript')
  api.use('markuskl:mathify');

  api.addFiles('tests/standardTests.coffee','server');
});
