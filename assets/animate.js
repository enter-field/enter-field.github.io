function setup() {
    let images = [ 
"assets/AndrewsCDN/media/caption.gif",
"assets/AndrewsCDN/media/fine china.gif",
"assets/AndrewsCDN/media/cup.jpg"
]
    let selectedImage = random(images)
    let element = select('#randomImage')
    element.attribute('src', selectedImage)
noCanvas()
}