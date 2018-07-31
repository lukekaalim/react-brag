import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
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
      module: false,
    }),
    commonjs(),
    image(),
  ],
  external: ['react'],
};
