const warn = document.getElementById("invis");
const text = document.getElementById("chat");
const unshow  = document.getElementById("centered");
let a = document.getElementById("inpt");
const mess = document.getElementById("message");
bd =[] //база данных 
function chat(){
    
    if (a.value !==""){
       unshow.style.display = "None";
       text.style.display = "inherit";
    }
    else{
        warn.style.display = "inherit";
    };
};
function add_message(){ //Вставляем в бд и выводим
    const text = document.getElementById("text");
    bd += "<p>"+a.value +": "+text.value+ "</p>";
    mess.innerHTML = bd;
    text.value = "";
};

