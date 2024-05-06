/**
 * 
 * switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
 */

// bai toan xet hoc luc cua sinh vien

function XetHocLucSinhVien(dtb) {
    var thongBao = "";
    switch (dtb) {
        case 9:
            thongBao = " Hoc Luc Loai Xuat sac";
            break;
        case 8:
            thongBao = " Hoc Luc Loai Gioi";
            break;
        case 7:
            thongBao = " Hoc Luc Loai Kha";
            break;
        case 6:
            thongBao = " Hoc Luc Loai TB";
            break;
        default:
            thongBao = "hoc luc kem";
            break;
    }
    alert(thongBao);
}
