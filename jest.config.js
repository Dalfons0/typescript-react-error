
module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
            isolatedModules: false,
            diagnostics: false
        }
    },
    'transformIgnorePatterns': [
        'node_modules/(?!(arlas-web-core|arlas-api)/)'
    ],
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    'moduleNameMapper': {
        '\\.(c|le|sa|sc)ss$': 'identity-obj-proxy'
    },
    'testURL': 'http://localhost',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
}
