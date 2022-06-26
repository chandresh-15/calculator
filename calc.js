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
        history+="<div class='his'><button class='backto')><i  id='"+i+"' class='bi bi-caret-left-square-fill'></i></button><p>"+eq[i]+"</p><p>"+answer[i]+"</p></div>";
    }
    history+="</div>";
    document.querySelector("#history").innerHTML=history;
}
function clearhis(){
    alert("Are you sure you want to delete history ?");
    document.querySelector("#history").innerHTML = " ";
    eq= [];
    answer=[];
}

//deleting last digit from the input
function lastnumdel(){
    if(docvalue.value != "")
    {
        if(docvalue.value.length>1){
                docvalue.value = docvalue.value.slice(0,-1);
        }
        else{
            docvalue.value = docvalue.value.slice(0,-1);
            docvalue.value = "0";
        }
    }
    else{
        docvalue.value="0";
    }
}
document.querySelector("#history").addEventListener('click',function(e)
{   
    if(e.target.id){
        questioninput.value = eq[e.target.id];
        docvalue.value = answer[e.target.id];
    }
})