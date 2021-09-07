function limitFunctionCallCount(cb, n) {
    return function callbackinvk(){
        if (n === 0 || n<0){
            return null;
        }
        for(let i=n;i>0;i--){
            cb(i);
        }
    }
}  
module.exports={limitFunctionCallCount};      