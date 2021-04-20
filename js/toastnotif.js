const x = document.getElementById("toast");

function showToast(text){
    x.classList.add("show");
    x.innerHTML = text;
        setTimeout(function(){
            x.classList.remove("show");
        },3000);
}