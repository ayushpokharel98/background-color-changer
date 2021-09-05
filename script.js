document.getElementById("btn-2").style.setProperty("display", "none");
let changeColor = 
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = randomColor();
    document.getElementById("pC").innerHTML = "Present Color ="+randomColor();
    document.getElementById("btn-2").style.removeProperty("display");
});
document.getElementById("btn-2").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("pC").innerHTML = "";
    document.getElementById("btn-2").style.setProperty("display", "none");
});
let randomColor = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}