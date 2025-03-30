// document.body.firstElementChild.firstElementChild.firstElementChild.style.color="red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";

document.getElementsByTagName("ul")[0].firstElementChild.style.color="blue";
document.getElementsByTagName("ul")[0].lastElementChild.style.color="blue";


Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.backgroundColor="green";
});