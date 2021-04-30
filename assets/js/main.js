$(document).ready(function(){

  let cats = [
      {
      nome: "Stella",
      age: 2,
      colore: "yellow",
      gender: 'F'
    },
    {
      nome: "Felix",
      age: 7,
      colore: "white",
      gender: 'M'
    },
    {
      nome: "Vinny",
      age: 13,
      colore: "brown",
      gender: 'F'
    },
    {
      nome: "Stella",
      age: 2,
      colore: "black",
      gender: 'M'
    }
  ]

cats.forEach((cat)=>{

  $('#cats ul').append(listGenerator(cat.colore, cat.nome));

});

const pink = '#FF00FF';
const blue = "#0099FF";
const newCats = cats.map((cat) =>{
  let color;
  if(cat.gender =='F'){
    color = pink;
  }else{
    color = blue;
  }
  let opacity = cat.age / 10;

  return {
    ...cat,
    ribbon:{
      color,
      opacity
    }
  }

});

const femaleCats = newCats.filter((cat) => cat.gender == 'F');
const maleCats = newCats.filter((cat) => cat.gender == 'M');

femaleCats.forEach((cat)=>{

  $('#female_cats ul').append(listGenerator(cat.colore, cat.nome, cat.ribbon.color, cat.ribbon.opacity));

});

maleCats.forEach((cat)=>{

  $('#male_cats ul').append(listGenerator(cat.colore, cat.nome, cat.ribbon.color, cat.ribbon.opacity));

});

function listGenerator(catColor, name, ...ribbon){

  let ribbonTag= "";
  if(ribbon.length > 0){
    ribbonTag = `<i class="fas fa-ribbon" style="color:${ribbon[0]}; opacity:${ribbon[1]}"></i>`;
  };
  let html = `
  <li>
    <i class="fas fa-cat" style="color:${catColor}"></i>
    ${ribbonTag}
    <span>${name}</span>
  </li>
  `;
  return html;
};


});