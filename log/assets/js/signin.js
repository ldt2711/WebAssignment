function validateForm(event) {
    // Ngăn form tải lại trang
    event.preventDefault(); 

    const check_empty = /^$/; // Kiểm tra chuỗi rỗng
    const check_space = /\s/; // Kiểm tra khoảng trắng
    const check_length = /^.{6,8}$/; // Kiểm tra số ký tự từ 6 đến 8
    const check_dau =/^[a-zA-Z0-9]*$/; 
    let valid = true;

    const fullname = document.getElementById('fullname');
    const password = document.getElementById('password');
    const checkPassword = document.getElementById('checkpassword');

    // Kiểm tra fullname
    if (check_empty.test(fullname.value)) {
        valid = false;
        document.querySelector('.n-empty').style.display = 'block';
        document.querySelector('#fullname').style.borderColor='red';
    } else {
        document.querySelector('.n-empty').style.display = 'none';
        document.querySelector('#fullname').style.borderColor='green';
    }
    if(check_space.test(fullname.value) || !check_dau.test(fullname.value)){
        valid = false;
        document.querySelector('#fullname').style.borderColor='red';
        document.querySelector('.c-fullname').style.display = 'block';
    }
    else{
        document.querySelector('.c-fullname').style.display = 'none';
        document.querySelector('#fullname').style.borderColor='green';
    }


    // Kiểm tra password
    if (check_empty.test(password.value) || !check_length.test(password.value)) {
        valid = false;
        document.querySelector('#password').style.borderColor='red';
        document.querySelector('.c-password').style.display = 'block';
    } 
    else {
        document.querySelector('.c-password').style.display = 'none';
        document.querySelector('#password').style.borderColor='green';
    }


    // Kiểm tra checkPassword
    if (password.value !== checkPassword.value) {
        valid = false;
        document.querySelector('#checkpassword').style.borderColor='red';
        document.querySelector('.re-password').style.display = 'block';
    } 
    else {
        document.querySelector('#checkpassword').style.borderColor='green';
        document.querySelector('.re-password').style.display = 'none';
    }


    // Nếu tất cả đều hợp lệ
    if (valid) {
        const userData = {
            fullname: fullname.value,
            password: password.value,
        };
        // Lưu userData vào Local Storage
        localStorage.setItem('userData', JSON.stringify(userData));
        // Có thể thêm thông báo thành công ở đây
        alert("Đăng ký thành công!");
        window.location.href = 'https://ldt2711.github.io/WebAssignment/log/login.html'; 
    }
}
