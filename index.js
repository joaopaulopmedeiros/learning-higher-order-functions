/**
 * Play here
*/

function doSomethingOverTime(n, action){
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

doSomethingOverTime(4, console.log)