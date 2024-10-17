function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "Harap masukkan kedua angka dengan benar.";
        return;
    }

    const sum = number1 + number2;
    document.getElementById('result').innerText = sum;
}

function resetFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').innerText = '';
}