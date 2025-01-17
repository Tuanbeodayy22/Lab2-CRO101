const class1 = [
    { mssv: 'PS0000', name: 'Nguyen Van A', avgPoint: 8.9, avgTraningPoint: 7, status: 'pass' },
    { mssv: 'PS0001', name: 'Nguyen Van B', avgPoint: 4.9, avgTraningPoint: 10, status: 'pass' },
  ];
  const class2 = [
    { mssv: 'PS0002', name: 'Nguyen Van C', avgPoint: 4.9, avgTraningPoint: 10, status: 'failed' },
    { mssv: 'PS0003', name: 'Nguyen Van D', avgPoint: 10, avgTraningPoint: 10, status: 'pass' },
    { mssv: 'PS0004', name: 'Nguyen Van E', avgPoint: 10, avgTraningPoint: 2, status: 'pass' },
  ];
  
  // 1. Gộp danh sách và lọc sinh viên pass
  const allStudents = [...class1, ...class2];
  const passedStudents = allStudents.filter(student => student.status === 'pass');
  
  // 2. Sắp xếp danh sách theo điểm trung bình giảm dần
  const sortedByAvgPoint = [...passedStudents].sort((a, b) => b.avgPoint - a.avgPoint);
  
  // 3. Sắp xếp danh sách theo điểm rèn luyện giảm dần
  const sortedByAvgTraningPoint = [...passedStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
  
  // 4. Lấy thông tin Ong vàng
  const ongVang = sortedByAvgPoint[0];
  
  // 5. Xuất kết quả
  console.log("Danh sách theo điểm trung bình giảm dần:");
  console.table(sortedByAvgPoint);
  
  console.log("Danh sách theo điểm rèn luyện giảm dần:");
  console.table(sortedByAvgTraningPoint);
  
  console.log("Thông tin Ong vàng:");
  console.table(ongVang);
  