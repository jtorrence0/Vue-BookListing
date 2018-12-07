module.exports = [

    {
        entry: {
            "booklist"  : "./src/components/BookForm.vue",
        },
        output: {
            filename: "./dist/bundle.js"
        },
        module: {
            loaders: [
                { 
                    test: /\.vue$/,
                    loader: "vue-loader"
                }
            ]
        }
    }

];