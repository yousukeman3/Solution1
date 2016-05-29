var txt1 = document.querySelector("#inputS");
var txt2 = document.querySelector("#inputF");
var button = document.querySelector("#button");
var txt3 = document.querySelector("#inputP");
button.addEventListener("click",
function () {
    a = Number(txt1.value);
    b = Number(txt2.value);
    txt3.value = a + b;
});                                                                                                                                                                 