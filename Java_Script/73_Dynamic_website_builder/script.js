function createCard(title,cName,views,monthsOld,duration,thumbnail){
    document.getElementsByTagName("img")[0].setAttribute("src",thumbnail);
    document.getElementsByClassName("about")[0].getElementsByTagName("h1")[0].innerHTML=title
    document.getElementsByTagName("ul")[0].children[0].innerHTML=cName;
    document.getElementsByTagName("ul")[0].children[1].innerHTML=views;
    document.getElementsByTagName("ul")[0].children[2].innerHTML=monthsOld;
    document.getElementsByClassName("time")[0].innerHTML=duration;
}
let title="Installing vs code & How Website Work|SigmaWeb Development Course-Tutorial #1";
let cName="CodeWithHarry"
let views="727k"
let monthsOld="2 months ago"
let duration="31:20"
let thumbnail="image.webp"

createCard(title,cName,views,monthsOld,duration,thumbnail)