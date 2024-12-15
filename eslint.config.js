module.exports = [
    {
        files: ['js/**/*.js'],
        rules: {
            'no-const-assign': 'error',
        },
    },
    {
        ignores: ['.yarn/**/*.js', 'dist/**/*.js'],
    },
];
