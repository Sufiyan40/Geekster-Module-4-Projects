const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const countryname = document.getElementById('country');
const phonenumber = document.getElementById('phnumber');
const statename = document.getElementById('state');
const cityname = document.getElementById('city');
const villagename = document.getElementById('village');

const btn = document.getElementById('btn');

window.addEventListener('load', () => {
    const existingUserInfo = localStorage.getItem('userInfo');
    
    if (existingUserInfo) {
        const userInfo = JSON.parse(existingUserInfo);
        firstname.innerText = userInfo.firstname;
        lastname.innerText = userInfo.lastname;
        countryname.innerText = userInfo.country;
        phonenumber.innerText = userInfo.phone;
        statename.innerText = userInfo.state;
        cityname.innerText = userInfo.city;
        villagename.innerText = userInfo.village;
    }
});

btn.addEventListener('click', () => {
    // Prompt for user information
    const fname = prompt("Enter your first name");
    const lname = prompt('Enter your last name');
    const country = prompt("Enter your country");
    const phone = prompt("Enter your Phone number");
    const state = prompt("What is your state");
    const city = prompt("Enter name of your city");
    const village = prompt("Enter name of your village");

    const userInfo = {
        firstname: fname,
        lastname: lname,
        country: country,
        phone: phone,
        state: state,
        city: city,
        village: village,
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Update the UI with the new user information
    firstname.innerText = fname;
    lastname.innerText = lname;
    countryname.innerText = country;
    phonenumber.innerText = phone;
    statename.innerText = state;
    cityname.innerText = city;
    villagename.innerText = village;
});