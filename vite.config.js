export default {
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'datatable-axios'
        }, rollupOptions: {
            external: ['axios'],
            output: {
                globals: {
                    axios: 'axios'
                },
            },
        },
    }
}