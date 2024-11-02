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
    saveHistory();
    alert("Đặt Vé Thành Công");
}

// Hàm lưu lịch sử vào LocalStorage
function saveHistory() {
    const movieTitle = document.getElementById('movie-title').innerText;
    const historyItem = {
        movie: movieTitle,
        day: selectedDay,
        time: selectedTime
    };
    
    // Lấy lịch sử từ LocalStorage
    let history = JSON.parse(localStorage.getItem('movieHistory')) || [];
    
    // Thêm mục mới vào lịch sử
    history.push(historyItem);
    
    // Lưu lịch sử trở lại LocalStorage
    localStorage.setItem('movieHistory', JSON.stringify(history));
}
