// !toan tu 3 ngoi
// var numb10 = 10;
// var loai = numb10 % 2 == 0 ? "Chan" : "Le";
// console.log(numb10 + " " + loai);

// // khai bao xe uber_X
// var UBER_X = "UBER_X";
// var UBER_X_0_1KM = 8_000;
// var UBER_X_1_20KM = 12_000;
// var UBER_X_HON_20KM = 10_000;
// var UBER_X_CHO = 2_000;

// // khai bao xe uber_SUV
// var UBER_SUV = "UBER_SUV";
// var UBER_SUV_0_1KM = 9_000;
// var UBER_SUV_1_20KM = 14_000;
// var UBER_SUV_HON_20KM = 12_000;
// var UBER_SUV_CHO = 3_000;

// // khai bao xe uber_BLACK
// var UBER_BLACK = "UBER_BLACK";
// var UBER_BLACK_0_1KM = 10_000;
// var UBER_BLACK_1_20KM = 16_000;
// var UBER_BLACK_HON_20KM = 14_000;
// var UBER_BLACK_CHO = 4_000;

// function tinhGiaTienSoKmDiDuoc(loaiXe, soKm) {
//     switch (loaiXe) {
//         case UBER_X: {
//             gia_tien_0_1km = UBER_X_0_1KM;
//             gia_tien_0_20km = UBER_X_1_20KM;
//             gia_tien_hon_20km = UBER_X_HON_20KM;
//             break;
//         }
//         case UBER_SUV: {
//             gia_tien_0_1km = UBER_SUV_0_1KM;
//             gia_tien_0_20km = UBER_SUV_1_20KM;
//             gia_tien_hon_20km = UBER_SUV_HON_20KM;
//             break;
//         }
//         case UBER_BLACK: {
//             gia_tien_0_1km = UBER_BLACK_0_1KM;
//             gia_tien_0_20km = UBER_BLACK_1_20KM;
//             gia_tien_hon_20km = UBER_BLACK_HON_20KM;
//             break;
//         }
//     }

//     if (soKm <= 1) {
//         return gia_tien_0_1km;
//     } else {
//         if (soKm > 1 && soKm <= 20) {
//             return gia_tien_0_1km + (soKm - 1) * gia_tien_0_20km;
//         } else {
//             return (
//                 gia_tien_0_1km +
//                 (soKm - 1) * gia_tien_0_20km +
//                 (soKm - 20) * gia_tien_hon_20km
//             );
//         }
//     }
// }

// function tinhGiaTienThoiGianCho(loaiXe, thoiGianCho) {
//     switch (loaiXe) {
//         case UBER_X: {
//             thoi_gian_cho_loaiXe = UBER_X_CHO;
//             break;
//         }
//         case UBER_SUV: {
//             thoi_gian_cho_loaiXe = UBER_SUV_CHO;

//             break;
//         }
//         case UBER_X: {
//             thoi_gian_cho_loaiXe = UBER_BLACK_CHO;

//             break;
//         }
//     }

//     var soLanCho = Math.floor(thoiGianCho / 3);
//     var tienCho = soLanCho * thoi_gian_cho_loaiXe;
//     return tienCho;
// }

// // var rs6 = tinhGiaTienThoiGianCho(UBER_X, 5);
// // console.log("🚀 ~ rs6:", rs6);
// // var rs7 = tinhGiaTienThoiGianCho(UBER_SUV, 6);
// // console.log("🚀 ~ rs7:", rs7);
// // var rs8 = tinhGiaTienThoiGianCho(UBER_BLACK, 12);
// // console.log("🚀 ~ rs8:", rs8);

// document.getElementById("btnGrab").onclick = function () {
//     var loaiXe;
//     var soKm = Number(document.getElementById("soKm").value);
//     var thoiGianCho = Number(document.getElementById("time").value);

//     var isUberX = document.getElementById("grabCar").checked;
//     var isUberSuv = document.getElementById("grabSUV").checked;
//     var isUberBlack = document.getElementById("grabBlack").checked;

//     if (isUberX) {
//         loaiXe = UBER_X;
//     }
//     if (isUberSuv) {
//         loaiXe = UBER_SUV;
//     }

//     if (isUberBlack) {
//         loaiXe = UBER_BLACK;
//     }
//     var tongTien =
//         tinhGiaTienSoKmDiDuoc(loaiXe, soKm) +
//         tinhGiaTienThoiGianCho(loaiXe, thoiGianCho);
//     console.log(tongTien);
// };

// Khai bao xe uber X

var UBER_X = "uber_x";
var UBER_X_0_1KM = 8_000;
var UBER_X_1_20KM = 12_000;
var UBER_X_HON_20KM = 10_000;
var UBER_X_CHO = 2_000;

// khai bao xe uber_suv
var UBER_SUV = "UBER_SUV";
var UBER_SUV_0_1KM = 9_000;
var UBER_SUV_1_20KM = 14_000;
var UBER_SUV_HON_20KM = 12_000;
var UBER_SUV_CHO = 3_000;

// khai bao xe uber_BLACK
var UBER_BLACK = "UBER_BLACK";
var UBER_BLACK_0_1KM = 10_000;
var UBER_BLACK_1_20KM = 16_000;
var UBER_BLACK_HON_20KM = 14_000;
var UBER_BLACK_CHO = 4_000;

function tinhGiaTienSoKmDiDuoc(loaiXe, soKm) {
    var gia_tien_0_1km;
    var gia_tien_0_20km;
    var gia_tien_hon_20km;
    switch (loaiXe) {
        case UBER_X: {
            gia_tien_0_1km = UBER_X_0_1KM;
            gia_tien_0_20km = UBER_X_1_20KM;
            gia_tien_hon_20km = UBER_X_HON_20KM;
            break;
        }
        case UBER_SUV: {
            gia_tien_0_1km = UBER_SUV_0_1KM;
            gia_tien_0_20km = UBER_SUV_1_20KM;
            gia_tien_hon_20km = UBER_SUV_HON_20KM;
            break;
        }
        case UBER_BLACK: {
            gia_tien_0_1km = UBER_BLACK_0_1KM;
            gia_tien_0_20km = UBER_BLACK_1_20KM;
            gia_tien_hon_20km = UBER_BLACK_HON_20KM;
            break;
        }
    }

    if (soKm <= 1) {
        return gia_tien_0_1km;
    } else {
        if (soKm > 1 && soKm <= 20) {
            return gia_tien_0_1km + (soKm - 1) * gia_tien_0_20km;
        } else {
            return (
                gia_tien_0_1km +
                (soKm - 1) * gia_tien_0_20km +
                (soKm - 20) * gia_tien_hon_20km
            );
        }
    }
}

function tinhGiaTienThoiGianCho(loaiXe, thoiGianCho) {
    var tien_cho;
    switch (loaiXe) {
        case UBER_X: {
            tien_cho = UBER_X_CHO;
            break;
        }
        case UBER_SUV: {
            tien_cho = UBER_SUV_CHO;
            break;
        }
        case UBER_BLACK: {
            tien_cho = UBER_BLACK_CHO;
            break;
        }
    }

    var tienCho = tien_cho * Math.floor(thoiGianCho / 3);
    return tienCho;
}

// document.getElementById("btnGrab").onclick = function () {
//     var loaiXe;
//     var soKm = Number(document.getElementById("soKm").value);
//     var thoiGianCho = Number(document.getElementById("time").value);

//     var isUberX = document.getElementById("grabCar").checked;
//     var isUberSuv = document.getElementById("grabSUV").checked;
//     var isUberBlack = document.getElementById("grabBlack").checked;

//     if (isUberX) {
//         loaiXe = UBER_X;
//     }
//     if (isUberSuv) {
//         loaiXe = UBER_SUV;
//     }

//     if (isUberBlack) {
//         loaiXe = UBER_BLACK;
//     }
//     var tongTien =
//         tinhGiaTienSoKmDiDuoc(loaiXe, soKm) +
//         tinhGiaTienThoiGianCho(loaiXe, thoiGianCho);
//     console.log(tongTien);
// };

document.getElementById("btnGrab").onclick = function () {
    var loaiXe;
    var soKm = +document.getElementById("soKm").value;
    var thoiGianCho = +document.getElementById("time").value;
    var isUberX = document.getElementById("grabCar").checked;
    var isUberSuv = document.getElementById("grabSUV").checked;
    var isUberBlack = document.getElementById("grabBlack").checked;

    if (isUberX) {
        loaiXe = UBER_X;
    }
    if (isUberSuv) {
        loaiXe = UBER_SUV;
    }
    if (isUberBlack) {
        loaiXe = UBER_BLACK;
    }

    var tongTien =
        tinhGiaTienThoiGianCho(loaiXe, thoiGianCho) +
        tinhGiaTienSoKmDiDuoc(loaiXe, soKm);
    alert(" Tiền đi xe của bạn là ::: " + tongTien + " VND");
};
