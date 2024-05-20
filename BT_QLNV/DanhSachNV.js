/**
 * MucTieu:
 * Nguoi tao:
 * ngay tao:
 * VS:
 */

function DanhSachNV() {
    this.mangNhanVien = [];
    this.themNhanVien = function (nv) {
        this.mangNhanVien.push(nv);
    };
}
DanhSachNV.prototype.xuatLuong = function () {
    var soNhanVien = this.mangNhanVien.length;

    for (var i = 0; i < soNhanVien; i++) {
        this.mangNhanVien = [i].tinhLuong();
    }
};

DanhSachNV.prototype.timNhanVien = function (maNV) {
    var indexFound = -1;

    for (var i = 0; i < this.mangNhanVien.length; i++) {
        if (this.mangNhanVien[i].maNV === maNV) {
            indexFound = i;
            break;
        }
    }
    return indexFound;
};

DanhSachNV.prototype.xoaNhanVien = function (maNV) {
    var idNhanVien = this.timNhanVien(maNV);
    if (idNhanVien >= 0) {
        this.mangNhanVien.splice(idNhanVien, 1);
    }
};

DanhSachNV.prototype.timTheoTen = function (ten) {
    return "";
};
