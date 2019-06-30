
const modules = {
    './utils/caculator': function (module, exports, require) {

        function add(a, b) {
            return a + b;
        }

        module.exports = {
            add: add
        };

    },
    './main': function (module, exports, require) {

        const caculator = require('./utils/caculator');
        const result = caculator.add(2, 5)
        document.write('Hello World');
        document.write('caculator.add(2, 5) = ' + result)

    }
};

(function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    const outputExports = __webpack_require__('./main');
    console.log(outputExports);

})(modules);


