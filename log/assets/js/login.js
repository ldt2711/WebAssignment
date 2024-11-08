function validateForm(event) {
    event.preventDefault();

    const check_empty = /^$/;
    const check_space = /\s/;
    const check_length = /^.{6,8}$/;
    const check_dau = /^[a-zA-Z0-9]*$/;
    let valid = true;

    const fullname = document.getElementById('fullname');
    const password = document.getElementById('password');

    // Kiểm tra fullname
    if (check_empty.test(fullname.value)) {
        valid = false;
        document.querySelector('.n-empty').style.display = 'block';
        document.querySelector('#fullname').style.borderColor = 'red';
    } else {
        document.querySelector('.n-empty').style.display = 'none';
        document.querySelector('#fullname').style.borderColor = 'green';
    }
    if (check_space.test(fullname.value) || !check_dau.test(fullname.value)) {
        valid = false;
        document.querySelector('#fullname').style.borderColor = 'red';
        document.querySelector('.c-fullname').style.display = 'block';
    } else {
        document.querySelector('.c-fullname').style.display = 'none';
        document.querySelector('#fullname').style.borderColor = 'green';
    }

    // Kiểm tra password
    if (check_empty.test(password.value) || !check_length.test(password.value)) {
        valid = false;
        document.querySelector('#password').style.borderColor = 'red';
        document.querySelector('.c-password').style.display = 'block';
    } else {
        document.querySelector('.c-password').style.display = 'none';
        document.querySelector('#password').style.borderColor = 'green';
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.fullname === fullname.value && user.password === password.value);

    if (user && valid) {
        alert("Đăng nhập thành công!");
        localStorage.setItem('login', 'true');
        localStorage.setItem('currentUser', fullname.value); // Lưu tên người dùng đăng nhập
        window.location.href = 'https://ldt2711.github.io/WebAssignment/index.html';
    } else {
        document.querySelector('.nopass').style.display = 'block';
        document.querySelector('#password').style.borderColor = 'red';
        document.querySelector('#fullname').style.borderColor = 'red';
    }
}
