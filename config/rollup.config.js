import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
// import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

var external = Object.keys(require('../package.json').dependencies);

export default config => {
  return {
    input: 'src/index.ts',
    output: {
      format: config.format,
      file: config.dest
    },
    external: external,
    plugins: [
      json({
        include: 'docs/**/*.json',
        exclude: 'node_modules/**',
        // preferConst: true,
        // indent: '  ',
        compact: true,
        // namedExports: false,
      }),
      // typescript(
      //   {
      //     rollupCommonJSResolveHack: false,
      //   }
      // ),
      typescript(
        // {
        //   rollupCommonJSResolveHack: false,
        // }
      ),
      resolve(
        // {
        //   extensions: ['.js', '.json']
        // }
      ),
      commonjs(),
      buble(),
      replace({'process.browser': JSON.stringify(!!config.browser)})
    ]
  };
};
