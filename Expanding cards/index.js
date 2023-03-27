// const url1 = 'https://jsonplaceholder.typicode.com/todos/1' ;
// const url2 = 'https://jsonplaceholder.typicode.com/todos/2' ;
// const url3 = 'https://jsonplaceholder.typicode.com/todos/3' ;
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