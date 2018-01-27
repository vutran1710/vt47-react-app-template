const path = require('path')

/* eslint-disable */
module.exports = {
  rootDir: '..',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  notify: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: [
    "raf/polyfill",
    "<rootDir>/config/setupJest.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir> /__mocks__/fileMock.js",
    "\\.(scss|less)$": "identity-obj-proxy"
  },
  "globals": {
    mock: path.join(__dirname, '../__mock__/mock.js')
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 100,
      lines: 90,
      statements: -10
    }
  },
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/public/",
    "<rootDir>/app/assets/",
    "<rootDir>/app/styles/"
  ],
  /* If you wanna see the kutie nyan-cat reporter, uncomment this block :)
  reporters: [
    [
      "jest-nyan-reporter",
      {
        "suppressErrorReporter": false
      }
    ]
  ],
  */
}
