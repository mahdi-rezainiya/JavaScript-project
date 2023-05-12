// select all of the boxes
const boxes =document.querySelectorAll('.box');
// add event for whole of the window
window.addEventListener('scroll' , showBox);
// external function is showBox
function showBox(){
    // innerHeight is height of page
    const triggerBottom = window.innerHeight ;
    // console.log(triggerBottom);
    boxes.forEach(box => {
        // getBoundingClientRect is location of an element compare with viewport
        const boxTop = box.getBoundingClientRect().top ;
        // console.log(boxTop);
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}