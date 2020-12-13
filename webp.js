//jshint esversion: 8

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['public/img/*.{jpg,png}'], {
  destination: __dirname + '/public/img/webp/',
  plugins: [
    imageminWebp({
      quality: 75,
    })
  ]
}).then(() => {
  console.log('Images optimized');
});