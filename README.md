# typescript-react-error

This project tries to reproduce a strange behavior when you try to run a *.js test of *.ts file which has an uncompiled dependency. (See: [issue #970](https://github.com/kulshekhar/ts-jest/issues/970) of the `ts-jest` github page).

## How to reproduce

 - Install the dependencies:

    ```
        npm i
    ```
 - Run the tests:

    ```
        npm test
    ```
 - Now you will see this error output on your console:
    ```
    FAIL  src/index.test.js
    Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
    • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
    • If you need a custom transformation specify a "transform" option in your config.
    • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    C:\Users\dalfonso\Playground\typescript-react-error\node_modules\arlas-web-core\index.js:19
    export { CollaborativesearchService } from './services/collaborativesearch.service';
    ^^^^^^

    SyntaxError: Unexpected token export

    > 1 | import { CollaborativesearchService } from 'arlas-web-core';
        | ^
    2 | import { Configuration } from 'arlas-api';
    3 |
    4 | export class Test {

    at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/ScriptTransformer.js:440:17)
    at Object.<anonymous> (src/index.ts:1:1)
    at Object.<anonymous> (src/index.test.js:1:1)

    Test Suites: 1 failed, 1 total
    Tests:       0 total
    Snapshots:   0 total
    Time:        18.445s
    Ran all test suites.
    ```

## Branching strategy

 - master:

    This branch contains all the latest version of the dependencies, including the `jest` 24, which is not currently supported by `ts-jest` right now.

 - babel-6-compatibility:

    This branch downgrade the `jest` library to the 23 version, which makes necessary to install a babel-core bridge to make this working as this `jest` version doesn't support babel 7. The purpose of this separate branch is to prove that the error happens even if you work with a compatible version of `jest` with `ts-jest`.

 - typescript-tests:
    
    The purpose of this branch is to try to avoid as much explicit babel dependencies as possible.
