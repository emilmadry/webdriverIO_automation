const path = require('path');

const SERVER_URL = process.env.npm_config_server_url;

const TIMEOUT = 10000;
const DATABASE_POPULATION_TIMEOUT = 60 * 1000 * 6;
const MAX_TIMEOUT = Math.max(TIMEOUT, DATABASE_POPULATION_TIMEOUT);

const SCREENSHOTS = 'screenshots';

const DIFF_PATH = `${SCREENSHOTS}/diff`;
const TAKEN_PATH = `${SCREENSHOTS}/taken`;
const REFERENCE_PATH = `${SCREENSHOTS}/reference`;

const USERNAME = process.env.npm_config_username || 'y';
const PASSWORD = process.env.npm_config_password || 'z';


module.exports = {
    SERVER_URL,
    USERNAME,
    PASSWORD,
    TIMEOUT,
    MAX_TIMEOUT,
    DATABASE_POPULATION_TIMEOUT,
    DIFF_PATH,
    TAKEN_PATH,
    REFERENCE_PATH,
    SCREENSHOTS,
};