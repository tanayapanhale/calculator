
var result = document.getElementById("result");

function display(n){
    result.value += n;
}

function calculate(){
    var final_no = result.value;
    var final_result = eval(final_no);
    result.value = final_result;
}

function ac(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0,-1);
}