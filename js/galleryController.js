'use strict'

function renderGallery() {
    const gallery = getGallery()
    var galleryStrHTML = gallery.map(img =>
        `<img scr="${img} onClick="onImgSelect(this.src)">`
    )
    document.querySelector('.gallery-section').innerHTML = galleryStrHTML
}

function onImgSelect(imgSrc) {
    setImg(imgSrc)
    renderMeme()
}