$(document).ready(function(){

  let cats = [
      {
      nome: "Stella",
      età: 2,
      colore: "nero",
      sesso: 'F'
    },
    {
      nome: "Felix",
      età: 7,
      colore: "bianco",
      sesso: 'M'
    },
    {
      nome: "Vinny",
      età: 13,
      colore: "marrone",
      sesso: 'F'
    },
    {
      nome: "Stella",
      età: 2,
      colore: "nero",
      sesso: 'M'
    }
  ]

cats.forEach((cat)=>{

  $('#cats ul').append(listGenerator(cat.colore, cat.nome));

});


function listGenerator(catColor, name){

  let html =  `
  <li>
    <i class="fas fa-cat" style="color:$(catColor)"></i>
    <span>$(name)</span>
  </li>
  `;
  return html;
}


});