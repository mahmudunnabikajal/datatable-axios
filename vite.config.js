export default {
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'datatable-axios'
        }, rollupOptions: {
            external: ['axios'], // Add any external dependencies
            output: {
                globals: {
                    axios: 'axios', // Specify the global variable name for axios
                },
            },
        },
    }
}