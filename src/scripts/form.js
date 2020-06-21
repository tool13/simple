const form = document.querySelector('.js-form');
const fileText = form.querySelector('.js-upload-text');
const fileInput = form.querySelector('.js-upload-input');

form.addEventListener('submit', onFormSend);
fileInput.addEventListener('change', onFileUpload);

function onFileUpload (evt) {
    if (fileInput.files[0].name) {
        fileText.textContent = fileInput.files[0].name;
    }
}

function onFormSend (evt) {
    evt.preventDefault();
}