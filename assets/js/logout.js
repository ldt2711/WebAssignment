
function showUserDisplay(fullname) {
  document.querySelector('.listitem-2').style.display = 'none';
  document.querySelector('#displayuser').style.display = 'inline-block';
  document.querySelector('#displayuser').textContent = `${fullname}`;
 }

 // Kiểm tra trạng thái đăng nhập khi trang tải
 window.addEventListener('load', () => {
 const storedUserData = JSON.parse(localStorage.getItem('userData'));
 const isLoggedIn = localStorage.getItem('login') === 'true';

  if (isLoggedIn && storedUserData) {
    showUserDisplay(storedUserData.fullname); // Gọi hàm hiển thị thông tin
  }
  }); 
 //su kien dang xuat
function logout(){
  localStorage.setItem('login','false');
  location.reload();
}
