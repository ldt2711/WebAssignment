function changeButton(element) {
    var items = document.querySelectorAll('.date a');
    items.forEach(function(item) {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    var lineDisplay = document.querySelector('.line');
    var ticketDisplay = document.querySelector('.ticket');
    lineDisplay.classList.remove('hidden');
    ticketDisplay.classList.remove('hidden');
}
let selectedDay = '';
let selectedTime = '';

// Hàm lưu ngày đã chọn
function selectDay(element) {
    selectedDay = element.innerText;
}

// Hàm lưu giờ đã chọn và cập nhật lịch sử
function selectTime(element) {
    selectedTime = element.innerText;
    if (selectedDay && selectedTime) {
        saveHistory();
        alert("Đặt Vé Thành Công");
    }
}

// Hàm lưu lịch sử vào LocalStorage
function saveHistory() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert("Vui lòng đăng nhập để lưu lịch sử.");
        window.location.href = 'https://ldt2711.github.io/WebAssignment/log/login.html';
    }
    
    const movieTitle = document.getElementById('movie-title').innerText;
    const historyItem = {
        movie: movieTitle,
        day: selectedDay,
        time: selectedTime
    };
    
    // Lấy lịch sử từ LocalStorage của tài khoản hiện tại
    let userHistory = JSON.parse(localStorage.getItem(`movieHistory_${currentUser}`)) || [];
    
    // Thêm mục mới vào lịch sử
    userHistory.push(historyItem);
    
    // Lưu lịch sử trở lại LocalStorage với khóa riêng của tài khoản
    localStorage.setItem(`movieHistory_${currentUser}`, JSON.stringify(userHistory));
}

