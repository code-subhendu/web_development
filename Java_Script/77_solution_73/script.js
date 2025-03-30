function createCard(title,cName,views,monthsOld,duration,thumbnail)
{
    let viewstr
    if(views<1000000){
        viewstr=views/1000 +"K";
    }
    else if(views>1000000  && views<100000000){
        viewstr=views/1000000 +"M";
    }
    else{
        viewstr=views/100000000 +"B";
    }
    let html=`<div class="card">
            <div class="time">${duration}</div>
            <img src="${thumbnail}" alt="">
            <div class="about">
                <h1>${title}</h1>
                <p>
                    <ul>
                        <li style="list-style: none;">${cName}</li>
                        <li>${viewstr} views</li>
                        <li>${monthsOld}</li>
                    </ul>
                </p>
            </div>
        </div>`
    
    document.getElementsByClassName("container")[0].innerHTML=html;
}
let title="Installing vs code & How Website Work|SigmaWeb Development Course-Tutorial #1";
let cName="CodeWithHarry"
let views=50000
let monthsOld="2 months ago"
let duration="31:20"
let thumbnail="image.webp"

createCard(title,cName,views,monthsOld,duration,thumbnail)