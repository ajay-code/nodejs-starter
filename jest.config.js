/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    transform: {},
    moduleNameMapper: {
        '#src/(.*)': '<rootDir>/dist/$1',
    },
}
