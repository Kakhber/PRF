function sendMessage() {
    const data = getFormData();
    fetch(`http://borjomi.loremipsum.ge/api/send-message`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((res) => {
            openModal('წარმატებით გაიზავნა')
        })
        .catch((error) => {
            openModal('დაფისქსირდა შეცდომა')
        })
}


function openModal(message) {

    const modal = document.getElementById('modal');
    const content = modal.children[1];
    content.innerHTML = message;
    modal.classList.add('opened')
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('opened')
}

function getFormData() {
    username = document.getElementById('username');
    email = document.getElementById('email');
    homepage = document.getElementById('homepage');
    areaMessage = document.getElementById('area-message');

    return {
        username: username.value,
        email: email.value,
        homepage: homepage.value,
        areaMessage: areaMessage.value
    }
}
