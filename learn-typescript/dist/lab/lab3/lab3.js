"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- 1. Hàm tính điểm trung bình (Arrow Function + Return Type) ---
const tinhDiemTB = (toan, ly, hoa) => {
    return (toan + ly + hoa) / 3;
};
console.log("--- 1. Điểm trung bình ---");
console.log(`Điểm TB (8, 7, 9): ${tinhDiemTB(8, 7, 9)}`);
const kiemTraChanLe = (n) => {
    return n % 2 === 0;
};
console.log("\n--- 2. Kiểm tra chẵn lẻ ---");
console.log(`Số 10 là chẵn? -> ${kiemTraChanLe(10)}`);
console.log(`Số 5 là chẵn?  -> ${kiemTraChanLe(5)}`);
// --- 3. Hàm tạo thông tin người dùng (Default + Optional Parameter) ---
function taoNguoiDung(ten, tuoi, role = "User") {
    console.log(`Tên: ${ten} | Tuổi: ${tuoi || "Không biết"} | Vai trò: ${role}`);
}
console.log("\n--- 3. Thông tin người dùng ---");
taoNguoiDung("Nguyễn Văn A", 20, "Admin");
taoNguoiDung("Trần Thị B", 18);
taoNguoiDung("Lê Văn C");
// --- 4. Hàm xử lý danh sách sản phẩm (Rest + Spread) ---
const quanLySanPham = (...list) => {
    console.log("Danh sách mới thêm:", list);
    const sanPhamCu = ["Tivi", "Tủ lạnh"];
    const tongHop = [...sanPhamCu, ...list];
    console.log("Tổng hợp tất cả sản phẩm:", tongHop);
};
console.log("\n--- 4. Quản lý sản phẩm (Rest/Spread) ---");
quanLySanPham("Máy giặt", "Điều hòa", "Laptop");
