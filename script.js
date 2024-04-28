const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const grid = document.querySelector('.grid');

uploadBtn.addEventListener('click', () => {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            grid.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});