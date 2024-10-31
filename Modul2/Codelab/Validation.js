function validateForm() {
    // Mengambil elemen input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mengambil elemen error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let valid = true;

    // Validasi Nama
    if (name.trim() === "") {
        nameError.innerText = "Nama harus diisi.";
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validasi Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Masukkan email yang valid.";
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validasi Kata Sandi
    if (password.length < 6) {
        passwordError.innerText = "Kata sandi harus lebih dari 6 karakter.";
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Jika valid = false, return false untuk menghentikan submit
    return valid;
}
