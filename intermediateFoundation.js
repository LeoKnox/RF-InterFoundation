//sigma
function sigma(a) {
    var total=0;
    for (var x=1; x<a; x++) {
        total+=a;
    }
    return(total);
}

//factorial
function fact(a) {
    var total=0;
    for (var y=1; y<a; y++) {
        total*=a;
    }
    return(toal);
}

//fibonacci
function fibo(a) {
    var total=0;
    var fone=0;
    var ftwo=1;
    if(a=0) {
        return(fone);
    }
    if(a=1) {
        return(ftwo);
    }
    for (var z=2; z<=a; z++) {
       total = fone+ftwo;
       fone = ftwo;
       ftwo = total;
    }
    return(total);
}

//second to last
function seclast(arr) {
    if (arr<2) {
        return(arr[arr.length-2])
    }
    return(null);
}

//nth to last
function nlast(arr, n) {
    if (arr.length-1 <= n) {
        return(arr([arr.length-n]));
    }
}

// second largest
function seclarg(arr) {
    newarr=[];
    for (var x=0; x<arr.length; x++) {
        newarr.pop(arr[x]);
        newarr.pop(arr[x]);
    }
    return(newarr);
}

//fibonacci recursive
function fib(n) {
    if (n == 0)||(n==1) {
        return(n);
    }
    return (fib(n-1) + fib(n-2));
}