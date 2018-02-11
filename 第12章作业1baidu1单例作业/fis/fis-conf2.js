fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });
// 
// 启用 fis-spriter-csssprites 插件
// fis.match('::package', {
//      spriter:fis.plugin('csssprites')
// })
// // 对 CSS 进行图片合并
// fis.match('*.css', {// 给匹配到的文件分配属性 `useSprite`
//      useSprite: true
// });


fis.match('::packager', {
    spriter : fis.plugin('csssprites')
});

fis.match('*.css', {
    useSprite : true,
    optimizer : fis.plugin('clean-css')
});

// fis.match('*.png', {
//     optimizer : fis.plugin('png-compressor')
// }); 