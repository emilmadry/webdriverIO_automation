const path = require('path');
const fs = require('fs');
const {TIMEOUT, MAX_TIMEOUT, TAKEN_PATH, DIFF_PATH, REFERENCE_PATH, SERVER_URL} = require('./parameters');
const {makeFolder} = require('./utils');

require('shelljs/global');

const VisualRegressionCompare = require('wdio-visual-regression-service/compare');

const {parse} = require('platform');

const getScreenshotLocation = (basePath, {testName, suiteName, createFolder}) => {
    const pathSegments = [basePath, suiteName];

    if (createFolder) {
        const screnshotFolder = path.join(...pathSegments);

        makeFolder(screnshotFolder);
    }

    pathSegments.push(`${testName}.png`);

    return path.join(...pathSegments);
};

const getBrowserVersion = (version) => parseInt(/\d+/.exec(version)[0], 10);

const getScreenshotName = (basePath) => (context) => {
    const testName = context.test.title;
    const suiteName = context.test.parent;

    // const resolution = context.meta.width || context.meta.orientation || 'unknown';
    const browserVersion = getBrowserVersion(context.browser.version);
    const browserName = context.browser.name;

    return getScreenshotLocation(basePath, {testName, suiteName, browserName, browserVersion});
};

const getTests = (testsList) => testsList.map((suite) => `tests/${suite}.test.js`);

exports.config = {

    specs: getTests([
        'exampleTest'
        // 'example'
    ]),
    // Patterns to exclude.
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: {
            }
        }// ,
        /* {
          browserName: 'firefox',
        },
        {
          browserName: 'phantomjs',
          'phantomjs.binary.path': require('phantomjs').path,
        }*/
    ],
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: SERVER_URL,
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    plugins: {
        'wdio-screenshot': {}
    },
    services: [
        'selenium-standalone',
        'visual-regression'
    ],
    visualRegression: {
        compare: new VisualRegressionCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(REFERENCE_PATH)),
            screenshotName: getScreenshotName(path.join(TAKEN_PATH)),
            diffName: getScreenshotName(path.join(DIFF_PATH)),
            misMatchTolerance: 0
        }),
        viewportChangePause: 300
    },
    // Options for selenium-standalone
    // Path where all logs from the Selenium server should be stored.
    seleniumLogs: 'logs/',
    port: 35357,
    seleniumArgs: {
        seleniumArgs: ['-port', '35357']
    },
    // execArgv: ['--max_old_space_size=4096', '--optimize_for_size', '--stack_size=4096'],
    // execArgv: ['--trace_gc', '--trace_gc_verbose'],
    framework: 'mocha',
  // reporters: ['teamcity'],
    reporters: ['json'],
    reporterOptions: {
        outputDir: path.join(TAKEN_PATH),
        filename: 'report',
        combined: true
    },
    waitforTimeout: TIMEOUT,
    mochaOpts: {
        ui: 'bdd',
        timeout: MAX_TIMEOUT,
        compilers: [
            'js:babel-register'
        ]
    }
};