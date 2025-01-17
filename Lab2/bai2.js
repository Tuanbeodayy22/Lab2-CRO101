const products = [
    { code: 'P001', name: 'Lipstick', price: 100 },
    { code: 'P002', name: 'Eyeliner', price: 150 },
    { code: null, name: 'Foundation', price: 200 },
    { code: 'P003', name: '', price: 250 },
    null,
  ];
  
  // 1. Chuyển đổi từ mảng sang object
  const productObject = Object.fromEntries(
    products
      .filter(product => product && product.code && product.name) // Lọc dữ liệu hợp lệ
      .map(product => [product.code, product]) // Tạo cặp key-value
  );
  
  console.log("Danh sách sản phẩm (object):");
  console.log(productObject);
  