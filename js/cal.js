function calc(op){
 let a = parseFloat(num1.value);
 let b = parseFloat(num2.value);
 let r;

 if(op=='+') r=a+b;
 if(op=='-') r=a-b;
 if(op=='*') r=a*b;
 if(op=='/') r=a/b;

 result.innerHTML="Result: "+r;
}