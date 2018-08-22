import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

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
    resolve({
      module: false,
      browser: true,
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  external: ['react'],
};
