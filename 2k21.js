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
navExtends.style.height = "0px";
navBtn.onclick = () => {
    if (navExtends.style.height === "0px")
        navExtends.style.height = "100vh";
    else
        navExtends.style.height = "0px";
};
const mp = document.querySelector(".more-projects");
mp.style.height = "0px";
document.querySelector("#mp-btn").onclick = () => {
    if (mp.style.height == "0px") {
        mp.style.height = mp.scrollHeight + "px";
        document.querySelector("#mp-btn").innerHTML = "Less Projects";
    } else {
        document.querySelector("#mp-btn").innerHTML = "More Projects";
        mp.style.height = "0px";
        window.scrollBy(0, -mp.scrollHeight);
    }
}