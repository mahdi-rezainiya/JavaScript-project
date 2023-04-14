const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currentActive = 1 ;

next.addEventListener('click' , function(e){
    currentActive++ ;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    // console.log(currentActive);
    update();
})

prev.addEventListener('click' , function(e){
    currentActive-- ;
    if(currentActive < 1){
        currentActive = 1;
    }
    // console.log(currentActive);
    update();
})

function update(){
    // circles.forEach(function(circle , idx){
    // })

    for(let [idx , circle] of circles.entries()){
        if(idx < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active')
        }
    }

    const actives = document.querySelectorAll('.active');
    // progress.style.width = (actives.length / circles.length)

    progress.style.width = (actives.length -1) / ( circles.length -1) * 100 + '%' ;
    console.log((actives.length -1) / ( circles.length -1) * 100 + '%');

    if(currentActive === 1){
        prev.disabled = true ;
    }
    else if(currentActive === 4){
        next.disabled = true ;
    }
    else{
        prev.disabled = false ;
        next.disabled = false ;
    }
}
