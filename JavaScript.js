var txt1 = document.querySelector("#inputS");
var txt2 = document.querySelector("#inputF");
var button =document.querySelector("#button");
button.addEventListener("click",
function () {
    txt1 = Number(txt1.value);
    txt2 = Number(txt2.value);
    var txt3 = txt1 + txt2;
    document.write(txt3 + "");
});                                                                                                                                                                 