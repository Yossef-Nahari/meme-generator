'use strict'

function renderGallery() {
    const gallery = getGallery()
    var galleryStrHTML = gallery.map(img =>
        `<img src="${img}" onClick="onImgSelect(this.src)">\n`
    )
    console.log(galleryStrHTML.join(''));
    document.querySelector('.gallery-section').innerHTML = galleryStrHTML
}

function onImgSelect(imgSrc) {
    setImg(imgSrc)
    renderMeme()
}