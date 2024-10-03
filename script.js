document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const papyrus = document.getElementById('papyrus');
    const textContainer = document.getElementById('text-container');

    if (username === 'Kaique' && password === 'Jongin') {
        errorMessage.textContent = '';
        papyrus.classList.remove('hidden');
        setTimeout(() => {
            textContainer.classList.remove('hidden');
            document.getElementById('youtube-player').classList.remove('hidden');
        }, 2000); // Animação de 2 segundos antes de mostrar o texto
    } else {
        errorMessage.textContent = 'Seu nome não é Kaique';
    }
});
