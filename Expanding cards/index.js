const panels = document.querySelectorAll('.panel');
panels.forEach(function(panel){
    panel.addEventListener('click' , function(e){
        removeActiveClasses();
        panel.classList.add('active');
    panel.addEventListener('dblclick' , function(e){
        removeActiveClasses()
    })
    })
})
function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove('active');

    })
}