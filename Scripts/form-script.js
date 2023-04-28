const scriptURL = 'https://script.google.com/macros/s/AKfycbwUSuWgkAUZe_nTzUi_PVtcCIVvFjlTWjspKeAdkyi40jNvBju9fbqrRyDsZn1MezUWpQ/exec'
const form = document.forms['contact-me-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You for Contacting!"))
    .catch(error => console.error('Error!', error.message))
})