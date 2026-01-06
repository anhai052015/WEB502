// 1. Hàm trả về chu vi và diện tích hình chữ nhật
// Trả về một object chứa cả 2 giá trị để tiện sử dụng
function tinhHinhChuNhat(dai: number, rong: number): { chuVi: number; dienTich: number } {
    const chuVi = (dai + rong) * 2;
    const dienTich = dai * rong;
    return { chuVi, dienTich };
}

// 2. Hàm tính tổng nhiều số (sử dụng rest parameter)
// Rest parameter (...args) giúp nhận vô số tham số truyền vào dưới dạng mảng
function tinhTong(...so: number[]): number {
    let tong = 0;
    so.forEach((num) => {
        tong += num;
    });
    return tong;
    // Cách ngắn gọn hơn: return so.reduce((a, b) => a + b, 0);
}

// 3. Hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demKyTu(chuoi: string, kyTuCanTim: string): number {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTuCanTim) {
            dem++;
        }
    }
    return dem;
}

// 4. Hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function kiemTraNguyenTo(n: number): boolean {
    if (n < 2) return false; // Số nhỏ hơn 2 không phải nguyên tố
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Nếu chia hết cho số nào đó thì không phải nguyên tố
        }
    }
    return true;
}

// --- PHẦN KIỂM TRA (CONSOLE LOG) ---
console.log("--- Bài 1: Hình chữ nhật (Dài 10, Rộng 5) ---");
const hcn = tinhHinhChuNhat(10, 5);
console.log(`Chu vi: ${hcn.chuVi}, Diện tích: ${hcn.dienTich}`);

console.log("\n--- Bài 2: Tổng nhiều số (1, 2, 3, 4, 5) ---");
console.log(`Tổng là: ${tinhTong(1, 2, 3, 4, 5)}`);

console.log("\n--- Bài 3: Đếm ký tự 'o' trong 'Hello World' ---");
console.log(`Số lượng ký tự 'o': ${demKyTu("Hello World", "o")}`);

console.log("\n--- Bài 4: Kiểm tra số nguyên tố ---");
console.log(`Số 7 là nguyên tố? -> ${kiemTraNguyenTo(7)}`);
console.log(`Số 10 là nguyên tố? -> ${kiemTraNguyenTo(10)}`);