let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

// Menambahkan tugas ke daftar
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Tombol Edit
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.onclick = function () {
        editTask(li);
    };
    li.appendChild(editBtn);

    // Tombol Hapus
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        deleteTask(li);
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';
}

// Mengedit tugas yang sudah ditambahkan
function editTask(li) {
    let span = li.querySelector('span');
    let currentText = span.textContent;
    
    // Membuat input untuk mengedit tugas
    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = currentText;
    editInput.classList.add('edit-mode');

    // Mengganti teks tugas dengan input
    li.replaceChild(editInput, span);

    // Mengganti tombol Edit menjadi Save
    let editBtn = li.querySelector('button.edit');
    editBtn.textContent = 'Save';
    editBtn.onclick = function () {
        saveEdit(li, editInput);
    };
}

// Menyimpan hasil edit tugas
function saveEdit(li, editInput) {
    let newText = editInput.value.trim();
    if (newText === '') {
        alert("Task cannot be empty!");
        return;
    }

    // Mengembalikan teks tugas
    let span = document.createElement('span');
    span.textContent = newText;
    li.replaceChild(span, editInput);

    // Mengembalikan tombol Save menjadi Edit
    let editBtn = li.querySelector('button.edit');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () {
        editTask(li);
    };
}

// Menghapus tugas dari daftar
function deleteTask(li) {
    taskList.removeChild(li);
}
