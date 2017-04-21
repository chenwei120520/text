//function test1(){
 //   document.getElementById("p1").style.background="black";
//    document.getElementById("p2").style.background="#999";
 //   document.getElementById("p3").style.background="#999";
//    document.getElementById("d1").style.display="block";
//    document.getElementById("d2").style.display="none";
  //  document.getElementById("d3").style.display="none";
//}
//function test2(){
 //   document.getElementById("p1").style.background="#999";
  //  document.getElementById("p2").style.background="black";
  //  document.getElementById("p3").style.background="#999";
  //  document.getElementById("d1").style.display="none";
  //  document.getElementById("d2").style.display="block";
  //  document.getElementById("d3").style.display="none";
//}
//function test3(){
 //   document.getElementById("p1").style.background="#999";
 //   document.getElementById("p2").style.background="#999";
 //   document.getElementById("p3").style.background="black";
 //   document.getElementById("d1").style.display="none";
  //  document.getElementById("d2").style.display="none";
 //   document.getElementById("d3").style.display="block";
    
//}
function test(num){
    var val=document.getElementById("u").getElementsByTagName("li").length;
    for(i=1;i<=val;i++){
        var p='p'+i;
        var d='d'+i;
        document.getElementById(d).style.display="none";
        document.getElementById(p).style.background="#999";
    }
    var ps='p'+num;
    var ds='d'+num;
    document.getElementById(ds).style.display="block";
    document.getElementById(ps).style.background="black";
}

