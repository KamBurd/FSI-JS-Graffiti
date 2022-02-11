let header = document.querySelector('#page-header')
header.style.textAlign= "left"
let dogImages = document.querySelectorAll('.dog-image')
for(i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '500px'
}
let dogNames = document.querySelectorAll('.dog-name')
for(i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign= 'left'
}
let shade = document.querySelector('.footer')
shade.style.color = 'red'

// Select some elements...