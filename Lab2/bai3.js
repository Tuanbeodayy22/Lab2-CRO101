// Các promise được cung cấp
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 1 hoàn thành!"), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 thất bại!"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 3 hoàn thành!"), 3000));

// Yêu cầu 1: Dừng khi có lỗi
Promise.all([promise1, promise2, promise3])
  .then(results => console.log("Tất cả promise hoàn thành:", results))
  .catch(error => console.error("Lỗi:", error));

// Yêu cầu 2: Luôn chạy, bất kể thất bại hay thành công
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log("Kết quả từng promise:");
    console.table(results);
  })
  .finally(() => console.log("Chương trình kết thúc!"));
