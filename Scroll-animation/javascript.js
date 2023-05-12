// select all of the boxes
const boxes = document.querySelectorAll('.box');
// add event for whole of the window
window.addEventListener('scroll' , showBox);
// external function is showBox
function showBox(){
    // triggerBottom here is for measure the internal height of page in ease scroll
    const triggerBottom = window.innerHeight / 1.2 ;
    // console.log(triggerBottom);
    boxes.forEach(box => {
        // 
        const boxTop = box.getBoundingClientRect().top ;
        // console.log(boxTop);
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show')
        }
    })
}