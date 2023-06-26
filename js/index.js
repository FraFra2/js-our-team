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

for (let index = 0; index < team.length; index++) {
    const element = team[index];
    for (const key in element) {
        console.log(key, element[key]);
    }
    
}