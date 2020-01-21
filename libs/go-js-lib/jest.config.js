module.exports = {
  name: 'go-js-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/go-js-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
