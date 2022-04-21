var path = require('path');

module.exports= {
		entry: ['./app.js'],
		target: "node",
		mode: "development",
	node: {
  __dirname: true
},
	  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
		      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
	    resolve: {
      extensions: ['', '.js','html','.css']
    },
		 output: {
		 // the output bundle
		 filename: 'newoutput.js',
		 // saves the files into the dist/static folder
		 path: path.resolve(__dirname, './'),
		 // set static as src="static/main.js as relative path
		 publicPath: 'public/'
		 },
	}
