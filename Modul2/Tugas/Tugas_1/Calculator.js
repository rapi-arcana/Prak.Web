let display = document.getElementById('display');

// Menambahkan karakter ke display
function appendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

// Menghapus semua isi display
function clearDisplay() {
    display.value = "";
}

// Menghitung hasil operasi matematika
function calculateResult() {
    try {
        let expression = display.value;

        // Mengganti operator pangkat (^) dengan Math.pow()
        expression = expression.replace('^', '**');

        // Menghitung hasil ekspresi
        let result = eval(expression);

        // Menampilkan hasil
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
