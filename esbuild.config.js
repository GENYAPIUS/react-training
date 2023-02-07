const res = require('esbuild').buildSync({
  entryPoints: ['src/App.js'],
  bundle: true,
  minify: true,
  format: 'cjs',
  sourcemap: true,
  outfile: 'dist/output.js',
  loader: { '.js': "jsx", '.svg': 'text'}
})