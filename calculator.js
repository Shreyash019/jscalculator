var arr=[];
var a='';
var b='';
var ans;
function myfunc(num){
    arr.push(num);
    if(arr.length<1){
        a=''
        console.log(`Console print(myfunc):: ${a}`);
        document.getElementById('screen').innerHTML = parseInt(a);
    }
    else{    
        a=''
            for(i=0; i<arr.length ; i++){
                a =a+ arr[i];
            }
            console.log(`Console print(myfunc):: ${a}`);
            document.getElementById('screen').innerHTML = a;}
}

function myEqual(){
    document.getElementById('screen').innerHTML = '';
    for(i=0;i<arr.length;i++){
        b+=arr[i];
    }
    console.log(`Before Calculation(myEqual):: ${ans}`);
    ans=eval(b);
    console.log(`After Calculation(myEqual):: ${ans}`);
    document.getElementById('screen').innerHTML = ans;
    while(arr.length > 0){
    	arr.pop();				// emptying the array "num"
	}
    arr.push(ans.toString());
    console.log(`Array after Equal operator(myEqual):: ${arr}`);
    ans=''
    b=''
    return;
}

function myDel(){
    var p = arr.pop();
    console.log(`Deleted element:: ${p}`)
}

function myClear(){
    arr=[];
    a=''
    document.getElementById('screen').innerHTML = a;
}