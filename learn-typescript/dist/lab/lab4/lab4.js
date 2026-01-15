"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sv1 = {
    id: 1,
    name: "Nguyễn Văn A",
    score: 8.5,
};
console.log("--- Bài 1: Thông tin sinh viên (Type) ---");
console.log(sv1);
const user1 = { id: 1, email: "admin@gmail.com" };
const user2 = { id: 2, email: "user@gmail.com", phone: "0987654321" };
console.log("\n--- Bài 2: Thông tin User (Interface) ---");
console.log("User 1 (Thiếu phone):", user1);
console.log("User 2 (Đủ thông tin):", user2);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log("\n--- Bài 3: Tính toán (Function Type) ---");
console.log(`Cộng (5 + 3): ${add(5, 3)}`);
console.log(`Nhân (5 * 3): ${multiply(5, 3)}`);
function logStatus(status) {
    switch (status) {
        case "loading":
            console.log("Trạng thái: Đang tải...");
            break;
        case "success":
            console.log("Trạng thái: Thành công!");
            break;
        case "error":
            console.log("Trạng thái: Có lỗi xảy ra :(");
            break;
        case "idle":
            console.log("Trạng thái: Đang chờ");
            break;
    }
}
console.log("\n--- Bài 4: Kiểm tra trạng thái (Literal Type) ---");
logStatus("loading");
logStatus("success");
