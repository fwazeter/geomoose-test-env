import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path';

const ASSET_PATH = process.env.ASSET_PATH || 'build';
export default {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(process.cwd(), 'dist'), // Changed __dirname to process.cwd() for ESM
		publicPath: ASSET_PATH,
		clean: true, // clean output dir before emit.
	},
	plugins: [
		new HtmlWebpackPlugin({
			                      template: './src/index.html', // Path to your template
		                      }),
		new CopyPlugin({
			patterns:[
				{from: 'src', to: 'build'},
				{from: 'geomoose', to: 'geomoose' }
			]
		               })
	],
	mode: 'development',
	devServer: {
		static: {
			directory: path.resolve(process.cwd(), 'dist') //'./dist'
		},
		hot: true,
		compress: true,
		port: 9394,
		allowedHosts: 'all' // DO NOT DO THIS IN PROD!!!!
	},
	module: {
		rules: [
			// CSS Rule for Webpack 5
			{
				test: /\.css$/,
				use:  [ 'style-loader', 'css-loader' ],
			}
		],
	}
};

