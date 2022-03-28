
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.B-0').onclick = HelloF
    var name = prompt('Say Your Name : ')
    function HelloF(){
        alert(`Hello  ${name}`)
    }
    
    document.querySelector('.B-1').onclick = CountF
    let counter = 0 
    function CountF(){
        counter++ 
        document.querySelector('h1').innerHTML = counter
    }    
})