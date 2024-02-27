var selectField = document.getElementById("selectorField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("option");
var list = document.getElementById("list");
var arrow=document.getElementById("arrow")
selectField.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
}
for(option of options){
    option.onclick=function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate")
    }
}
