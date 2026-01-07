"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
//1. Core Types: number, string, bolean
let myName = "hoadv"; // chuoi ky  tu
const age = 36;
const isMarried = true;
console.log(myName);
//2.Type info suy dien ra kieu du lieu
let count = 10;
//count = "20"; //error
//3.Core types: obj
let product = {
    id: 1,
    title: 'Samshjt',
    price: 20,
};
//4.Core types: array number[] or array<number>
let number = [1, 2, 3, 4, 5];
let names = ["An", "Phi", "Dư", "Doanh"];
let scores = [10, 9, 6]; //number[]
//6. Special Types: any
let randomValues = 10; //Gan any cho chay code
randomValues = "Hello";
//7.Type: Union ( | )
let multiType;
multiType = 42; // Hợp lệ
multiType = "Success"; // Hợp lệ
// multiType = true; // Lỗi
//8.Literal Type
let status;
status = "success"; // Hợp lệ
// status = "failed"; // Lỗi
