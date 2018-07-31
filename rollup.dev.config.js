import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/demo.js',
  output: [
    {
      file: 'demo/react-brag.umd.dev.js',
      format: 'umd',
      name: 'REACT_BRAG',
      globals: {
        react: 'React',
      },
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
  ],
  external: ['react'],
};
