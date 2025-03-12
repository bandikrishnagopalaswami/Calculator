let s=``,operator="",final_res="",res1="";
let display_value=document.querySelector(".res");
function display(value){
  if(value==="ac"){
      final_res="";
      res1="";
      s=``;
      operator="";
  }
  else if(value=="+"||value=="-"||value=="*"||value=="/"){
      if(operator.length==0){
          operator=value;
      }
      else{
          result();
          operator=value;
      }
      if(final_res.length===0){
          final_res=res1;
      }
      res1="";
      s+=value;
  }
  else{
res1+=value;
s+=value;
//console.log(res1);
}
display_value.innerHTML=`${s}`;
}
function result(){
final_res=Number(final_res);
res1=Number(res1);
if(operator=="+"){
final_res=final_res+res1;
display_value.innerHTML=`${final_res}`;
}
else if(operator=="-"){
final_res=final_res-res1;
display_value.innerHTML=`${final_res}`;
}
else if(operator=="*"){
final_res=final_res*res1;
display_value.innerHTML=`${final_res}`;
}
else{
if(res1==0){
    display_value.innerHTML=`Math error`;
}
else{
final_res=final_res/res1;
display_value.innerHTML=`${final_res}`;
}
}
console.log(final_res,res1);
operator="";
res1="";
s=final_res;
}