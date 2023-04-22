const amount_img = document.querySelectorAll('.container_gallery img');
const current_image = document.querySelector('.on');
let measure_of_width = 0; 
const btnPrevious = document.querySelector('.prev_button');
const btnNext = document.querySelector('.prox_button');

function slide(){
  if(measure_of_width >= amount_img.length){
    measure_of_width = 0
  }
  else if(measure_of_width < 0){
    measure_of_width = amount_img.length-1
  }
  current_image.style.marginLeft = -640*measure_of_width+"px"
}

btnPrevious.addEventListener("click", ()=>{
  measure_of_width--
  slide()
})

btnNext.addEventListener("click", ()=>{
  measure_of_width++
  slide()
})