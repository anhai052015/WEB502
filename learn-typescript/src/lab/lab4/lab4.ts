// --- Bài 1: Type Alias cho Student ---
type Student = {
  id: number;
  name: string;
  score: number;
};

const sv1: Student = {
  id: 1,
  name: "Nguyễn Văn A",
  score: 8.5,
};
console.log("--- Bài 1: Thông tin sinh viên (Type) ---");
console.log(sv1);

// --- Bài 2: Interface cho User ---

interface User {
  id: number;
  email: string;
  phone?: string;
}

const user1: User = { id: 1, email: "admin@gmail.com" };
const user2: User = { id: 2, email: "user@gmail.com", phone: "0987654321" };

console.log("\n--- Bài 2: Thông tin User (Interface) ---");
console.log("User 1 (Thiếu phone):", user1);
console.log("User 2 (Đủ thông tin):", user2);

// --- Bài 3: Type cho Function (Calculate) ---
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => a + b;

const multiply: Calculate = (a, b) => a * b;

console.log("\n--- Bài 3: Tính toán (Function Type) ---");
console.log(`Cộng (5 + 3): ${add(5, 3)}`);
console.log(`Nhân (5 * 3): ${multiply(5, 3)}`);

// --- Bài 4: Literal Type & Union Type (ApiStatus) ---
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
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
