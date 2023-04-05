const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click' , e =>{
        removeActiveClasses();
        panel.classList.add('active');
    })
    panel.addEventListener('dblclick' , e =>
        removeActiveClasses()
    )
})
function removeActiveClasses(){
    panels.forEach(panel => 
        panel.classList.remove('active')
    )
}