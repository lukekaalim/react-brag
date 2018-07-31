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
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    resolve({
      browser: true,
      module: false, // Default: true
    }),
    commonjs(),
  ],
  external: ['react'],
};
