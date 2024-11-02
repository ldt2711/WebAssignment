// Hàm tải lịch sử từ LocalStorage và hiển thị
function loadHistory() {
    let history = JSON.parse(localStorage.getItem('movieHistory')) || [];
    const tableBody = document.getElementById('history-table').getElementsByTagName('tbody')[0];
    
    history.forEach(item => {
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