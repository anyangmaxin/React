module.exports= {
    entry: "./src/index.tsx",
    output: {
        path:"/dist",
        filename:"bundle.js"
    },
    //Enable sourcemaps for debugging webpack`s output.
    devetool: "source-map",
    resolve: {
        //Add '.ts'  and '.tsx' as resolvable extensions.
        extensions:["",".webpack.js",".web.js",".ts",".tsx",".js"]
    },
    module: {
        loaders: [
        //All files with a '.ts'  or '.tsx'  extension will be handled by 'ts-loader'.
            {test:/\.tsx?$/,loader:"ts-loader"}
        ],
        preLoaders: [
            //All output '.js'  files will have any sourcemaps re-processed by 'source-map-loader'.
            {test:/\.js$/,loader:"source-map-loader"}
        ]
    },



    /**
     *     
     when importing a module whose path mathches one of the following,just
    assume a corresponding global varibale exists and use that instead.
    this is important because it allows us to avoid bundling all of our
    dependencies,which allows browsers to cache those libraries between builds.
    */
    externals: {
        "react": "React",
        "react-dom":"ReactDOM"
    }
}