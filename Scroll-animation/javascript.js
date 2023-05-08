const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll' , showBox);

function showBox(){
    const triggerBottom = window.innerHeight / 1.2;
    console.log(triggerBottom);
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top ;
        // console.log(boxTop);
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}