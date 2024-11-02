function validateForm(event) {
    event.preventDefault();

    const check_empty = /^$/; 
    const check_space = /\s/; 
    const check_length = /^.{6,8}$/; 
    const check_dau = /^[a-zA-Z0-9]*$/;
    let valid = true;

    const fullname = document.getElementById('fullname');
    const password = document.getElementById('password');
    const checkPassword = document.getElementById('checkpassword');

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

    // Kiểm tra checkPassword
    if (password.value !== checkPassword.value) {
        valid = false;
        document.querySelector('#checkpassword').style.borderColor = 'red';
        document.querySelector('.re-password').style.display = 'block';
    } else {
        document.querySelector('#checkpassword').style.borderColor = 'green';
        document.querySelector('.re-password').style.display = 'none';
    }

    if (valid) {
        const newUser = {
            fullname: fullname.value,
            password: password.value,
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const isExistingUser = users.some(user => user.fullname === newUser.fullname);
        if (!isExistingUser) {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert("Đăng ký thành công!");
            window.location.href = 'https://ldt2711.github.io/WebAssignment/log/login.html';
        } else {
            alert("Tên đăng nhập đã tồn tại.");
        }
    }
}
