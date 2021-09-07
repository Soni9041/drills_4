function obbj(){
    var cnt=5;
    let obj={
        increment : function(){
            cnt=cnt+1
            return cnt;
        },
        decrement : function(){
            cnt=cnt-1
            return cnt;
        }
    }
    console.log(obj.increment());
    console.log(obj.decrement());
}
//console.log(obbj());
module.exports={obbj};
