// Hàm tải lịch sử từ LocalStorage và hiển thị
function loadHistory() {
    const currentUser = localStorage.getItem('currentUser'); // Lấy tên người dùng hiện tại
    if (!currentUser) {
        alert("Vui lòng đăng nhập để xem lịch sử.");
        return;
    }

    let userHistory = JSON.parse(localStorage.getItem(`movieHistory_${currentUser}`)) || [];
    const tableBody = document.getElementById('history-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Xóa các dòng cũ trước khi hiển thị

    userHistory.forEach(item => {
        let row = tableBody.insertRow();
        
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        cell1.innerText = item.movie;
        cell2.innerText = item.day;
        cell3.innerText = item.time;
    });
}

// Gọi hàm loadHistory khi trang được tải
window.onload = function() {
    loadHistory();
}
