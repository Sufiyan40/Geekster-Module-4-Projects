
const inputtext = document.getElementById('inputdiv');


window.addEventListener('load', () => {
    
    const inputval = localStorage.getItem('inputvalue');
    console.log(inputval);

    inputtext.innerText = inputval;
    
})


inputtext.addEventListener('input', () => {
    const text = inputtext.value;
    console.log(text);

    localStorage.setItem('inputvalue' , text)
});