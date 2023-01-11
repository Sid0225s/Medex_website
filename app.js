AOS.init();

const navBtn = document.querySelector(".fa-bars");
const navExtends = document.querySelector("nav #navs");
const navTabs = document.querySelectorAll("#navs div");
navTabs.forEach(tab => {
    tab.onclick = () => {
        navExtends.style.height = "0px";
    }
});
if (window.innerHeight < window.innerWidth) {
    navTabs.forEach(tab => {
        tab.style.margin = "10px auto";
    })
}
navBtn.onclick = () => {
    if (navExtends.style.height === "0px")
        navExtends.style.height = "100vh";
    else
        navExtends.style.height = "0px";
};

setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
}, 5000);



var myNav = document.querySelector("nav");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        document.querySelector("#gear").style.transform = "scale(0.75)";
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        document.querySelector("#gear").style.transform = "scale(0)";
    }
};


const submit = document.querySelector('#submit');
const fname = document.querySelector('#fname');
const email = document.querySelector('#mail');
const msg = document.querySelector('#message');



submit.addEventListener('click', (e) => {
    if (fname.value == '' || email.value == '' || msg.value == '' || email.value.includes('@') == false) {
        document.querySelector("#contact-msg").innerHTML = "Please fill the form details correctly.";
        document.querySelector("#contact-msg").style.color = "red";
    } else {
        document.querySelector('#msgload').style.display = "flex";
        document.querySelector('main').style.display = "none";
        e.preventDefault();
        const url = 'https://medextrous.herokuapp.com/contact';
        const data = {
            name: fname.value,
            mail: email.value,
            message: msg.value
        };
        const options = {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then((response) => {
                response.json()
                    .then((result) => {
                        document.querySelector('#msgload').style.display = "none";
                        document.querySelector('main').style.display = "block";
                        document.getElementById('contact').scrollIntoView();
                        document.querySelector("#contact-msg").innerHTML = result.message;
                        document.querySelector("#contact-msg").style.color = "rgb(45, 255, 56)";
                        fname.value = '';
                        email.value = '';
                        message.value = '';
                    })
            })
            .catch((error) => {
                document.querySelector('#msgload').style.display = "none";
                document.querySelector('main').style.display = "block";
                document.getElementById('contact').scrollIntoView();
                const message = "Internal Error";
                document.querySelector("#contact-msg").innerHTML = "Internal Error ! Plese try again later...";
                document.querySelector("#contact-msg").style.color = "red";
                fname.value = '';
                email.value = '';
                message.value = '';
            })
    }
})