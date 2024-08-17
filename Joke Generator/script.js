document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const button = document.getElementById('get-joke');

    button.addEventListener('click', getJoke);

    function getJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = `${data.setup} - ${data.punchline}`;
            })
            .catch(error => {
                jokeElement.textContent = 'Oops! Something went wrong.';
            });
    }
});
