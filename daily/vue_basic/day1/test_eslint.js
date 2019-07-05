
var obj = {
    name: 'zhang'
}

var ____backAage;
// 数据劫持  对普通属性的访问 进行拦截 监控
Object.defineProperty(obj, 'age', {
    get() {
        console.log('正在获取age属性')
        return ____backAage
    },
    set(value) {
        console.log('正在设置age 属性', value)
        ____backAage = value;
    }
});

console.log(obj.name)

 console.log(obj.age)

obj.age = 1000;

console.log(obj.age)

