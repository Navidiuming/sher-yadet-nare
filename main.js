const checkBoxs = document.querySelectorAll(".quizCheckBox")

function onlySelectClickedBox(){
    for(i = 0; i<checkBoxs.length;i++){
        checkBoxs[i].checked=false;
    }
    this.checked=true;
}

for(i = 0; i<checkBoxs.length;i++){
    checkBoxs[i].addEventListener("click",onlySelectClickedBox);
}