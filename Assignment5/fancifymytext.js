
function biggerText(){
    document.getElementById("inputText").style.fontSize = "24pt";
}

function changeText() { 

    const fancy = document.getElementById("fancyText");
    const boring = document.getElementById("boringText");

    if(fancy.checked) {
        document.getElementById("inputText").style.fontWeight = "bold";
        document.getElementById("inputText").style.color = "blue";
        document.getElementById("inputText").style.textDecoration = "underline";
    }
    else if(boring.checked){
        document.getElementById("inputText").style.fontWeight = "normal";
        document.getElementById("inputText").style.color = "black";
        document.getElementById("inputText").style.textDecoration = "none";
    }

}

function mooText(){
    
    const userText = document.getElementById("inputText");

    let text = userText.value.toUpperCase();
    let parts = text.split(".");
    userText.value = parts.join("-Moo.");

}