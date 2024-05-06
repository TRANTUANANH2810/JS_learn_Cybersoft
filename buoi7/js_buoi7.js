// ! Một số sự kiện thông dụng:
/**
 * 1. onClick ( click event)
 * 2. onFocus ( focus event)
 * 3. onBlur ( out event)
 * 4. onChange
 * 5. onMouseOver
 * 6. onMouseOut
 * 7. onMouseDown
 * 8. onMouseUp
 * 9. onLoad
 * 10. onSubmit
 */

function onChangeColor(choose) {
    var txt = document.getElementById("testColor");
    if (choose == 1) {
        // focus
        txt.style.border = "3px solid red";
        txt.style.borderRadius = "5px";
    } else {
        // blur
        txt.style.border = "3px solid green";
        txt.style.borderRadius = "5px";
    }
}
// ex  onchange

function thayDoiChon() {
    var theP = document.getElementById("ho");
    var dropdown = document.getElementById("hi");
    theP.innerHTML = dropdown.value;
}
