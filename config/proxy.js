export default {
    dev: {
        '/sensor': {
            target: 'https://10.92.214.187:7890/',
            changeOrigin: true,
            pathRewrite: { '^': '' },
            secure: false,
        },
    },
    test: {
        '/api/': {
            target: 'https://proapi.azurewebsites.net',
            changeOrigin: true,
            pathRewrite: {
                '^': '',
            },
        },
    },
    pre: {
        '/api/': {
            target: 'your pre url',
            changeOrigin: true,
            pathRewrite: {
                '^': '',
            },
        },
    },
};