function showUserDisplay(user) {
  document.querySelector('.listitem-2').style.display = 'none';
  document.querySelector('#displayuser').style.display = 'inline-block';
  document.querySelector('#displayuser').textContent = user.fullname;
}

// Kiểm tra trạng thái đăng nhập khi trang tải
window.addEventListener('load', () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')); // Lấy danh sách người dùng
  const currentUser = localStorage.getItem('currentUser'); // Lấy tên tài khoản đang đăng nhập
  const isLoggedIn = localStorage.getItem('login') === 'true';

  if (isLoggedIn && storedUsers && currentUser) {
    // Tìm người dùng có tên trùng với `currentUser`
    const loggedInUser = storedUsers.find(user => user.fullname === currentUser);
    if (loggedInUser) {
      showUserDisplay(loggedInUser); // Gọi hàm hiển thị thông tin người dùng
    }
  }
});

// Sự kiện đăng xuất
function logout() {
  localStorage.setItem('login', 'false');
  localStorage.removeItem('currentUser'); // Xóa thông tin người dùng hiện tại khi đăng xuất
  location.reload();
}
