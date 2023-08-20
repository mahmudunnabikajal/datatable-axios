// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/datatable-axios.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/datatable-axios.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/datatable-axios.umd.js',
            format: 'umd',
            name: 'datatable-axios',
            globals: {
                axios: 'axios'
            },
        },
    ],
    plugins: [resolve(), commonjs()],
    external: ['axios']
}
