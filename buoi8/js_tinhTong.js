// tinh tong

function TinhTong() {
    var soa = document.getElementById("soA");
    var sob = document.getElementById("soB");
    var Sum = document.getElementById("kq");
    // NaN = not a number --> hàm kiểm tra số : isNaN(chuỗi)
    // --> là số: False
    // --> khong phai la số --> true

    if (isNaN(soa.value) || isNaN(sob.value)) {
        alert(" vui long nhap vao so a va so b");
        return false;
    } else {
        soa = parseFloat(soa.value);
        sob = parseFloat(sob.value);
        var tong = soa + sob;
        kq.value = tong;
        return true;
    }
}
