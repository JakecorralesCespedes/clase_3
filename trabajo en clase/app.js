function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    if (nameInput === '' || phoneInput === '') {
        alert("Ingresa todos los datos")
        return;
    }

    const contactList = document.getElementById('contact-list');
    const li = document.createElement('div');
    li.innerHTML = `<span>${nameInput.value}: ${phoneInput.value}</span>`;

    contactList.appendChild(li);

    nameInput.value = '';
    phoneInput.value = '';

}
