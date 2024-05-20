/**
 * MoTa: Tao ra lop / prototype NhanVien
 * nguoitao: Tuan Anh
 * ngay tao: 20/5/24
 * vs: 1.0
 */
function NhanVien(
    maNV,
    ho,
    ten,
    ngaySinh,
    chucVu,
    ngayLamViec,
    luongCoBan,
    phuCap
) {
    // thuoc tinhs class nhan vien
    this.maNV = maNV;
    this.ho = ho;
    this.ten = ten;
    this.ngaySinh = ngaySinh;
    this.chucVu = chucVu;
    this.soNgayLamViec = ngayLamViec;
    this.luongCoBan = luongCoBan;
    this.phuCap = phuCap;

    //Tao mang chuaw tat ca thuoc tinh de xu ly nang cao

    this.mangThuocTinh = [
        this.ten,
        this.ho,
        this.ngaySinh,
        this.chucVu,
        this.soNgayLamViec,
        this.luongCoBan,
        this.phuCap,
    ];

    // phuon thuc Prototype NhanVien
    // cach 1
    // this.tinhLuong = function () {
    //     return this.soNgayLamViec * luongCoBan + phuCap;
    // };
}
/**
 * MoTa: Tao ra lop / prototype NhanVien
 * nguoitao: Tuan Anh
 * ngay tao:
 * vs:
 */
// cach 2:
NhanVien.prototype.tinhLuong = function () {
    return this.soNgayLamViec * luongCoBan + phuCap;
};
