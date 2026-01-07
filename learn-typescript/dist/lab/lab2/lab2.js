"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Khai báo Enum cho mức đánh giá (Rate)
// Enum giúp gán tên cho các giá trị để dễ gọi (thay vì nhớ số 1, 2, 3 hay string dài dòng)
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["high"] = "Cao"; 
})(Rate || (Rate = {}));

// 3. Tạo mảng dữ liệu (ít nhất 5 phần tử)
const listProducts = [
    { name: "Áo phông", price: 10, sale: true, rate: Rate.low },
    { name: "Quần Jean", price: 20, sale: false, rate: Rate.medium },
    { name: "Giày Sneaker", price: 5, sale: true, rate: Rate.high }, 
    { name: "Mũ lưỡi trai", price: 3, sale: false, rate: Rate.low },
    { name: "Kính râm", price: 30, sale: true, rate: Rate.high },
];
console.log("--- 1. Danh sách gốc ---");
console.log(listProducts);

// 4. Yêu cầu: Thêm description (Mô tả) bằng hàm MAP
console.log("\n--- 2. Thêm mô tả (Map) ---");
const listWithDesc = listProducts.map((item) => {
    // Trả về một object mới, giữ nguyên các thuộc tính cũ (...item) và thêm description
    return {
        ...item,
        description: item.price > 5 ? "Tốt" : "Bình thường"
    };
});
console.log(listWithDesc);

// 5. Yêu cầu: Hiển thị danh sách bằng FOREACH
console.log("\n--- 3. Hiển thị danh sách (ForEach) ---");
listProducts.forEach((item) => {
    console.log(`Tên: ${item.name} | Giá: ${item.price} | Sale: ${item.sale} | Đánh giá: ${item.rate}`);
});

// 6. Yêu cầu: Tính tổng giá bán bằng REDUCE
console.log("\n--- 4. Tổng giá bán (Reduce) ---");
const total = listProducts.reduce((tong, item) => {
    return tong + item.price;
}, 0);
console.log(`Tổng tiền tất cả sản phẩm: ${total}`);

// 7. Yêu cầu: Lọc sản phẩm đang Sale VÀ đánh giá từ Trung bình trở lên bằng FILTER
console.log("\n--- 5. Lọc sản phẩm Sale & Đánh giá cao (Filter) ---");
const filteredProducts = listProducts.filter((item) => {
    return item.sale === true && (item.rate === Rate.medium || item.rate === Rate.high);
});
console.log(filteredProducts);
