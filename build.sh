ng build --prod
rm blog-web.zip
zip -r blog-web.zip dist package.json server.js
