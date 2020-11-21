//Navbrand Javascript
const logoOne = document.querySelectorAll('#HRlogo path');

for(let i=0; i<logoOne.length; i++){
  console.log(`Letter ${i} is ${logoOne[i].getTotalLength()}`);
}

const logoTwo = document.querySelectorAll('#LRlogo path');

for(let j=0; j<logoTwo.length; j++){
  console.log(`Letter ${j} is ${logoTwo[j].getTotalLength()}`);
}

//Scroll Reveal
window.sr = ScrollReveal();
  sr.reveal('.tlContain',{
    duration: 2500,
    origin:'bottom',
    distance: '1000px'
  });
  sr.reveal('.TagText',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.sectionHeading',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.sectionSubHead',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.aboutBlurb',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.p1',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.p2',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.p3',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.mapLegend',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.card1',{
    delay: 10,
    duration: 2500,
    origin:'top',
    distance: '300px'
  });
  sr.reveal('.card2',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('#map',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.myForm',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });  
  sr.reveal('.cDetails',{
    delay: 10,
    duration: 2500,
    origin:'bottom',
    distance: '300px'
  });

//Section Image Change

  document.getElementById("footerBtn").addEventListener("click",function(){
    [...document.querySelectorAll(".bgImage")]
      .forEach(img => img.classList.toggle("checked",this.checked))
  })