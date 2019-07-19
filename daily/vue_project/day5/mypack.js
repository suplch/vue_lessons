const modules = {
    './utils/caculator': function (module, exports, require) {  //  ./utils/caculator.js 的文件内容


        function add(a, b) {
            return a + b;
        }
        module.exports = {
            add
        };
    },
    './main': function (module, exports, require) {  //  ./main.js 的文件内容

        const { add } = require('./utils/caculator');
        console.log('hello world');
        let result = add(2, 3);
        console.log(result);

    }
};
(function (modules) {
    // 用来缓存已经加载的模块
    var installedModules = {};
    // 实现 require 函数
 	function __webpack_require__(moduleId) {
 	    // 如果模块已经 被加载, 那么直接 返回 模块的 exports 属性
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		//  创造一个 module 对象 然后 缓存到 installedModules 对象里
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
			exports: {}
 		};
 		// moduleId 表示 模块路径,  将 模块对象 传给 对应的模块 文件
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.l = true;
		// 返回导出的 对象
 		return module.exports;
 	}
 	// 启动 ./main 入口文件
    __webpack_require__('./main');
})(modules);



























// var obj = {
//     name: 'zhang',
//     age: 123,
//     '#^_^)*': '你好',
//     './src/utils/caculator.js': ''
// }
//
//
// console.log(obj.name)
// console.log(obj.age)
//
// console.log(obj['#^_^)*'])
