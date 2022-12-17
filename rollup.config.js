import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/serve.js',
    format: 'cjs',
    exports: 'default',
    sourcemap: 'hidden',
  },
  plugins: [typescript(), uglify()],
};
