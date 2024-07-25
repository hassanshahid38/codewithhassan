const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // If the input is empty, then return from here

    generateBtn.innerText = "Generating QR Code..."; // Update button text to indicate progress

    // Getting a QR code of user-entered value using the qrserver API
    // and passing the API returned image src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR Code"; // Reset button text after QR code is generated
    });
});
qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active'); // Remove the active class if the input is empty
    }
});
