const warn = document.getElementById("invis");
const text = document.getElementById("chat");
const unshow  = document.getElementById("centered");
let a = document.getElementById("inpt");
const mess = document.getElementById("message");
bd =[]
function chat(){
    
    if (a.value !==""){
       unshow.style.display = "None";
       text.style.display = "inherit";
    }
    else{
        warn.style.display = "inherit";
    };
};
function add_message(){
    const text = document.getElementById("text");
    bd += "<p>"+a.value +": "+text.value+ "</p>";
    mess.innerHTML = bd;
    text.value = "";
};

