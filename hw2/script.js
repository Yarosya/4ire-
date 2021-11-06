let flag;

do{
    let f0 =+prompt('Please, enter the first member of the Fibonacci sequence', 0),
        f1 =+prompt('Please, enter the second member of the Fibonacci sequence', 1),
        n =+prompt('Please, enter the ordinal number of the Fibonacci number', 5);
  
        const fibonacciSequence = (f0,f1,n)=>{
            let nAbsolute = Math.abs(n);
            while(nAbsolute > 2){
                [f0,f1] = [f1,f0 + f1];
                nAbsolute--;
            }
            return n > 0 ? f1 : Math.pow(-1, Math.abs(n))*f1;
        }

        if(!Number.isInteger(f0) || !Number.isInteger(f1) || !Number.isInteger(n)){
            alert(`Please, enter integer numbers`);
        }else if(n === 0 || (f0 === 0 && f1 === 0)){
            alert(`Your Fibonacci number: ${f0}`);
        }else if( n === 1){
            alert(`Your Fibonacci number: ${f1}`);
        }else{
            alert(`Your Fibonacci number: ${fibonacciSequence(f0,f1,n)}`);
        }
        flag = confirm(`Do you want to continue?`);
}while(flag)
