function calculate(){
    var a=document.getElementById("disp").value;
    console.log(a);
    var res=eval(a);
    console.log(res);
    document.getElementById("disp").value=res;
}