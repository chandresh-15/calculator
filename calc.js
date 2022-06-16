/*function putvalue(num){
     document.getElementById("myText").value += num;
}*/
var equation;
var answer=[],eq=[];
var docvalue =  document.querySelector("#myText");
var questioninput = document.querySelector("#subtext");
var x = document.querySelector(".history");
function cleardisplay(){
    docvalue.value = null;
    questioninput.value = null;
}
function putvalue(num) {
    if(docvalue.value == '0'){
        docvalue.value = num;
    }
    else{
        docvalue.value += num;
    }
}
function equals(){
    equation = docvalue.value+ " = ";
    docvalue.value = eval(docvalue.value);
    questioninput.value = equation;
    answer.push(eval(docvalue.value));
    eq.push(equation);
   
}
function history(){
    if (x.style.display == "block") 
    {
        x.style.display = "none";
    } else 
    {
        x.style.display = "block";
    }
    var history="<div>";
    for(let i=0;i<eq.length;i++)
    {
        history+="<div class='his'><p>"+eq[i]+"</p><p>"+answer[i]+"</p></div>";
    }
    history+="</div>";
    document.querySelector("#history").innerHTML=history;
}
function clearhis(){
    document.querySelector("#history").innerHTML = " ";
    eq= [];
    answer=[];
}