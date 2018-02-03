module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "protractor": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    'rules': {
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        'indent': ['error', 4, {'SwitchCase': 1, 'FunctionDeclaration': {'parameters': 'first'}}],
        'spaced-comment': ['error', 'always', {'exceptions': ['-', '+']}],
        'no-console': 'off',
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};