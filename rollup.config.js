import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';


export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'packageJson.main',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'packageJson.module',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    {
        input: 'dist/esm/types/index.ts',
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()]
    }
];