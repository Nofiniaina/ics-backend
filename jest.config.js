module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/__tests__/**/*.test.(ts|js)'],
    global: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};