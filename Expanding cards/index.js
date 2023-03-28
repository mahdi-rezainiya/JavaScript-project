const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
    panel.addEventListener('dblclick' , (e) => {
        removeActiveClasses()
        e.preventDefault();
    })
})
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
