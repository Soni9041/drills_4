var n=5;
function cb(value){
    console.log(value);
}
const f1 = require('../limit');
const result=f1.limitFunctionCallCount(cb, n);
console.log(result)