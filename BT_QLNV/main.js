function getMyEle(ele) {
    return document.getElementById(ele);
}
// toi uu thong bao
var mangThongBao = [
    " Vui Lòng nhập vào HỌ",
    " Vui lòng nhập vào Tên",
    " Vui lòng nhập MNV",
    " Vui lòng chọn chức vụ",
    " Họ là kí tự ",
    " Tên là kí tự",
    " Độ dài không được nhỏ hơn 4 và lớn hơn 6",
];

// kiem tra nhap
function kiemTraNhap(idField, idThongBao, idChuoiTB) {
    var valueField = getMyEle(idField).value;
    var thongBao = getMyEle(idThongBao);
    var kq = false;
    if (valueField === "") {
        thongBao.style.display = "block";
        thongBao.innerHTML = mangThongBao[idChuoiTB];
        kq = false;
    } else {
        thongBao.style.display = "none";
        kq = true;
    }
    return kq;
}

// selectedIndex : kiem tra select
function kiemTraChucVu() {
    var kq = false;
    var theSelect = getMyEle("chucVu");
    var thongBao = getMyEle("spanChucVu");
    if (theSelect.selectedIndex == 0) {
        thongBao.style.display = "block";
        kq = false;

        thongBao.innerHTML = mangThongBao[3];
    } else {
        thongBao.style.display = "none";
        kq = true;
    }
    return kq;
}

function kiemTraNhapKiTu(idField, idThongBao, idChuoiTB) {
    var kq = false;
    var mangKiTu = /^[A-Za-z ]+$/; //JS expression
    var valueField = getMyEle(idField).value;
    var thongBao = getMyEle(idThongBao);

    if (valueField.match(mangKiTu)) {
        thongBao.style.display = "none";
        kq = true;
    } else {
        thongBao.style.display = "block";
        thongBao.innerHTML = mangThongBao[idChuoiTB];
        kq = false;
    }
    return kq;
}

function kiemTraDoDai(minLength, maxLength, idChuoiTB) {
    var valueField = getMyEle("txtMaNV").value;
    var thongBao = getMyEle("spanMaNV");
    var kq = false;
    if (valueField.length < minLength || valueField.length > maxLength) {
        thongBao.style.display = "block";
        thongBao.innerHTML = mangThongBao[idChuoiTB];
        kq = false;
    } else {
        thongBao.style.display = "none";
        kq = true;
    }
    return kq;
}

function kiemTraHopLe() {
    var kq = kiemTraNhap("txtHo", "spanHo", 0);
    if (kq) {
        kq = kiemTraNhapKiTu("txtHo", "spanHo", 4);
    }

    kq = kiemTraNhap("txtTen", "spanTen", 1);
    if (kq) {
        kq = kiemTraNhapKiTu("txtTen", "spanTen", 5);
    }
    kq = kiemTraNhap("txtMaNV", "spanMaNV", 2);
    if (kq) {
        kq = kiemTraDoDai(4, 6, 6);
    }
    kq = kiemTraChucVu();
    if (kq) {
    }

    return kq;
}

// lam mois form

function lamMoiForm() {
    ho = getMyEle("txtHo").value = "";
    ten = getMyEle("txtTen").value = "";
    maNV = getMyEle("txtMaNV").value = "";
    chucVu = getMyEle("chucVu").selectedIndex = 0;
}

// xoa nhan vien

// function deleteHandler() {
//     getMyEle("txt
// }

var dsNhanVien = new DanhSachNV();

document.getElementById("themNhanVien").addEventListener("click", function () {
    var kTraHopLe = kiemTraHopLe();
    if (kTraHopLe) {
        // viet code them nhan vien
        // lay gia tri nguoi dung nhap vao
        var ho = getMyEle("txtHo").value;
        var ten = getMyEle("txtTen").value;
        var maNV = getMyEle("txtMaNV").value;
        var chucVu = getMyEle("chucVu").value;
        // var date = getMyEle("ngaySinh").value;
        // var ngayLamViec = getMyEle("ngayLamViec").value;
        // var luongCoBan = getMyEle("luongCoBan").value;
        // var phuCap = getMyEle("phuCap").value;

        // tao moi nhan vien
        var nhanVien = new NhanVien(maNV, ho, ten, "", "", "", "", "");
        dsNhanVien.themNhanVien(nhanVien);
        console.log(dsNhanVien);

        // lam moi form
        lamMoiForm();
    }
});

// document.getElementById("themNhanVien").onclick = function () {

// var kq = kiemTraNhap("txtHo", "spanHo", 0);
//     if (kq) {
//         kiemTraNhapKiTu("txtHo", "spanHo", 4);
//     }

//     kq = kiemTraNhap("txtTen", "spanTen", 1);
//     if (kq) {
//         kiemTraNhapKiTu("txtTen", "spanTen", 5);
//     }
//     kiemTraNhap("txtMaNV", "spanMaNV", 2);
//     kiemTraChucVu();
// };
