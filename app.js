const shape = document.querySelector('#shape')

//target shape

shape.addEventListener('mouseenter',() => {
    if(!shape.classList.contains('hover')){
        shape.classList.add('hover');
    }   document.getElementById("shape").innerHTML = "release";
}
);

shape.addEventListener('mouseleave', () => {
    if(shape.classList.contains('hover')){
        shape.classList.remove('hover');
    }   document.getElementById("shape").innerHTML = "hover";
});

