module.exports = {
  name: 'some-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/some-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
