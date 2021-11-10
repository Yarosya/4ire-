 function filterBy(arr, type){
        if(type == "null"){
            return arr.filter(element => element !== null);
        }else if(type === "object"){
            return  arr.filter(element => (typeof element !== type || element == null ));
        } else {
            return arr.filter(element => (typeof element !== type))
        }
}

let arr = ['hello', 'world', 23, '23', null, 1n, true, 'false', [],{}, null, undefined, null];
console.log(filterBy(arr, 'bigint'));
