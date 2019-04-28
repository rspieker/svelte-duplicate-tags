import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');
const dev = Boolean(process.env.ROLLUP_WATCH || process.env.DEVELOP);

export default [
	{
		input: pkg.svelte,
		output: [
			{
				file: 'dist/sample.js',
				format: 'iife',
				name: 'Sample',
			},
			{
				file: 'dist/sample.mjs',
				format: 'es',
			},
		],
		plugins: [
			svelte({ dev, customElement: true, tag: 'my-sample' }),
			resolve({ browser: true }),
		],
	},
];
