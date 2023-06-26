const team = [{
    firstName: "Wayne Barnett",
    role: "Founder&CEO",
    img: 'img/wayne-barnett-founder-ceo.jpg'

},
{
    firstName: "Angela Caroll",
    role: "Chief Editor",
    img: 'img/angela-caroll-chief-editor.jpg'
},
{
    firstName: "Walter Gordon",
    role: "Office Manager",
    img: 'img/walter-gordon-office-manager.jpg'
},
{
    firstName: "Angela Lopez",
    role: "Social Media Manager",
    img: 'img/angela-lopez-social-media-manager.jpg'
},
{
    firstName: "Scott Estrada",
    role: "Developer",
    img: 'img/scott-estrada-developer.jpg'
},
{
    firstName: "Barbara Ramos",
    role: "Graphic Designer",
    img: 'img/barbara-ramos-graphic-designer.jpg'
}];
const mainContainer = document.querySelector(".main-cont");

for (let index = 0; index < team.length; index++) {
    let myD = document.createElement("div");
    myD.classList.add("col");
    mainContainer.append(myD);
    const element = team[index];
    for (const key in element) {
        let card = `<div class="card">
                        <img src="${element.img}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.firstName}</h5>
                            <p class="card-text">${element.role}</p>
                        </div>
                    </div>`;
        myD.innerHTML = card;
    } 
}