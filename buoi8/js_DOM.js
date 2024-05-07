/** */
// !Dom--*
function layGiaTri() {
    var theP = document.getElementById("noiDung");
    theP.innerHTML = " Xin chao VietNama";
    theP.style.color = "yellow";
}

function layGiaTriTheP() {
    var tatCaP = document.getElementsByTagName("p");
    alert(
        "So the P la :::" +
            tatCaP.length +
            " Noi dung the P :::" +
            tatCaP[3].innerHTML
    );
}

function layGiaTriClass() {
    var tatCaP = document.getElementsByClassName("demo");
    alert(
        "So the P la :::" +
            tatCaP.length +
            " Noi dung the P :::" +
            tatCaP[1].innerHTML
    );
}
